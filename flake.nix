{
  description = "Description for the project";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    devenvs.url = "github:yvaniak/devenvs";
    devenvs.inputs.nixpkgs.follows = "nixpkgs";
    nix-filter.url = "github:numtide/nix-filter";
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
        inputs.devenvs.inputs.devenv.flakeModule
        inputs.devenvs.flakeModule
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
          config,
          lib,
          ...
        }:
        {
          packages = pkgs.callPackage ./default.nix { filter = inputs.nix-filter.lib; };

          devenv.shells.default = {
            devenvs = {
              ts = {
                enable = true;
                biome.enable = true;
                tests.enable = true;
                script-lint.enable = true;
              };
              nix = {
                enable = true;
                flake.enable = true;
                check.enable = true;
                check.package = config.packages.default;
              };
              tools.just = {
                enable = true;
                pre-commit.enable = true;
              };

            };
            enterShell = ''
              test ! src/app/Inter.ttf || cp "${
                pkgs.google-fonts.override { fonts = [ "Inter" ]; }
              }/share/fonts/truetype/Inter[opsz,wght].ttf" src/app/Inter.ttf
              echo "shell pour portfolio"
            '';
          };
        };
      flake = {
      };
      debug = true;
    };
}
