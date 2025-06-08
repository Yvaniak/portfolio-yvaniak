{
  description = "Description for the project";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-parts.url = "github:hercules-ci/flake-parts";
    mydevenvs.url = "github:yvaniak/mydevenvs";
    mydevenvs.inputs.nixpkgs.follows = "nixpkgs";
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [
        inputs.mydevenvs.inputs.devenv.flakeModule
        inputs.mydevenvs.flakeModule
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
          ...
        }:
        {
          packages.default = pkgs.callPackage ./nix/default.nix { };
          packages.serve = pkgs.callPackage ./nix/serve.nix { };

          devenv.shells.default = {
            mydevenvs = {
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
                check.enable = true;
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
