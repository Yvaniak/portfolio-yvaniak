{
  pkgs ? import <nixpkgs> { },
  lib ? pkgs.lib,
  ...
}:

pkgs.buildNpmPackage {
  pname = "portfolio-yvaniak";
  inherit ((lib.trivial.importJSON ./package.json)) version;

  src = lib.fileset.toSource {
    root = ./.;
    fileset = lib.fileset.unions [
      ./src
      ./public
      ./package.json
      ./package-lock.json
      ./.eslintrc.json
      ./components.json
      ./jest.config.ts
      ./next.config.mjs
      ./postcss.config.mjs
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

  doCheck = true;
  checkPhase = ''
    runHook preCheck

    npx jest

    runHook postCheck
  '';

  nativeInstallCheckInputs = [
    pkgs.curl
    pkgs.killall
  ];
  doInstallCheck = true;
  installCheckPhase = ''
    runHook preInstallCheck

      node .next/standalone/server.js&
      sleep 5
      curl -s localhost:3000 | grep "Contact me"
      killall "next-server (v15.2.0)"

    runHook postInstallCheck
  '';

  doDist = false;
}
