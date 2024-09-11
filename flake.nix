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
      in
      {

        formatter = pkgs.nixpkgs-fmt;

        devShells = {
          default = pkgs.mkShell {

            packages = [
              pkgs.nodejs_latest
              pkgs.nodePackages.vscode-langservers-extracted
              pkgs.nodePackages.pnpm
            ];


            shellHook = ''
              echo "shell pour portfolio"
            '';
          };
        };
      }
    );
}
