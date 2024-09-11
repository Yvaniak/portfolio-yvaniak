{

  description = "portfolio yvaniak";


  inputs = {
    flake-utils = {
      url = "github:numtide/flake-utils";
    };
  };


  outputs = { self, nixpkgs, ... }@inputs:
    inputs.flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
        };

        mylib = {
          update = pkgs.writeShellApplication {
            name = "update";
            text = ''
              pnpm up
            '';
          };
          install_deps = pkgs.writeShellApplication {
            name = "install_deps";
            text = ''
              pnpm i
            '';
          };
        };
      in
      {

        formatter = pkgs.nixpkgs-fmt;

        devShells = {
          default = pkgs.mkShell {

            packages = [
              pkgs.nodejs_latest
              pkgs.nodePackages.vscode-langservers-extracted
              pkgs.nodePackages.pnpm

              mylib.update
              mylib.install_deps
            ];


            shellHook = ''
              echo "shell pour portfolio"
            '';
          };
        };
      }
    );
}
