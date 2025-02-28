{
  pkgs,
  lib,
  filter,
  ...
}:

pkgs.buildNpmPackage {
  pname = "portfolio-yvaniak";
  inherit ((lib.trivial.importJSON ./package.json)) version;

  src = filter {
    root = ./.;
    include = [
      "src"
      "public"
      ./package.json
      ./package-lock.json
      ./.eslintrc.json
      ./.components.json
      ./jest.config.ts
      ./next.config.mjs
      ./postcc.config.mjs
      ./tsconfig.json
    ];
  };

  npmDeps = pkgs.importNpmLock {
    npmRoot = ./.;
  };

  inherit (pkgs.importNpmLock) npmConfigHook;

  npmPackFlags = [ "--ignore-scripts" ];
  makeCacheWritable = true;
  npmFlags = [ "--legacy-peer-deps" ];

  NODE_OPTIONS = "--openssl-legacy-provider";

  preBuild = ''
    cp "${
      pkgs.google-fonts.override { fonts = [ "Inter" ]; }
    }/share/fonts/truetype/Inter[opsz,wght].ttf" src/app/Inter.ttf
  '';

  postBuild = ''
    # Add a shebang to the server js file, then patch the shebang.
    sed -i '1s|^|#!/usr/bin/env node\n|' .next/standalone/server.js
    patchShebangs .next/standalone/server.js
  '';

  installPhase = ''
    runHook preInstall

    mkdir -p $out/{share,bin}

    cp -r .next/standalone $out/share/portfolio-yvaniak/
    cp -r public $out/share/portfolio-yvaniak/public

    mkdir -p $out/share/portfolio-yvaniak/.next
    cp -r .next/static $out/share/portfolio-yvaniak/.next/static

    chmod +x $out/share/portfolio-yvaniak/server.js

    makeWrapper $out/share/portfolio-yvaniak/server.js $out/bin/portfolio-yvaniak \
      --set-default PORT 3000 \

    runHook postInstall
  '';

  doDist = false;
}
