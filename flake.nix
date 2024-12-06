{

  description = "portfolio yvaniak";


  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";

    flake-utils = {
      url = "github:numtide/flake-utils";
    };

    treefmt-nix = {
      url = "github:numtide/treefmt-nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = { self, nixpkgs, ... }@inputs:
    inputs.flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };

        treefmtEval = inputs.treefmt-nix.lib.evalModule pkgs ./treefmt.nix;
      in
      {
        formatter = treefmtEval.config.build.wrapper;

        checks = {
          formatting = treefmtEval.config.build.check self;
        };

        packages = {
          default = pkgs.buildNpmPackage {
            pname = "portfolio-yvaniak";
            version = "0.1";

            src = ./.;

            npmDepsHash = "sha256-vyCXPjRlu+w8G5YV4BUygU4e8V1tEHR34c22lR0KGNQ=";

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
          devenv-up = self.devShells.${system}.default.config.procfileScript;
          devenv-test = self.devShells.${system}.default.config.test;
        };
        devShells = {
          default = pkgs.mkShell {
            packages = [
              pkgs.nodejs_22
              pkgs.nodePackages.vscode-langservers-extracted
              pkgs.tailwindcss-language-server
              pkgs.stylelint-lsp
              pkgs.typescript-language-server
              pkgs.deno
            ];


            shellHook = ''
              test src/app/Inter.ttf || cp "${
                pkgs.google-fonts.override { fonts = [ "Inter" ]; }
              }/share/fonts/truetype/Inter[opsz,wght].ttf" src/app/Inter.ttf
              echo "shell pour portfolio"
            '';
          };
        };
      }
    );
}
