{
  description = "Description for the project";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    devenvs.url = "github:yvaniak/devenvs";
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
        inputs.devenvs.inputs.devenv.flakeModule
      ];
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "aarch64-darwin"
        "x86_64-darwin"
      ];
      perSystem =
        {
          pkgs,
          ...
        }:
        {
          packages = {
            default = pkgs.buildNpmPackage {
              pname = "portfolio-yvaniak";
              version = "0.1";

              src = ./.;

              npmDepsHash = "sha256-HEmw17uCIi7Yl2fW+M5R5kxJbZfpplTrUs0tubXpm3w=";

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
            };
          };
          devenv.shells.default = {
            imports = [ inputs.devenvs.flakeModule ];
            ts.enable = true;
            ts.biome.enable = true;
            nix = {
              enable = true;
              flake.enable = true;
              tests.enable = true;
            };

            enterShell = ''
              test src/app/Inter.ttf || cp "${
                pkgs.google-fonts.override { fonts = [ "Inter" ]; }
              }/share/fonts/truetype/Inter[opsz,wght].ttf" src/app/Inter.ttf
              echo "shell pour portfolio"
            '';
          };
        };
      flake = {
      };
    };
}
