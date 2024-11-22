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
        };
      in
      {

        formatter = pkgs.nixpkgs-fmt;

        devShells = {
          default = pkgs.mkShell {

            packages = [
              pkgs.nodejs_latest
              pkgs.nodePackages.pnpm
              pkgs.nodePackages.vscode-langservers-extracted
              pkgs.tailwindcss-language-server
              pkgs.stylelint-lsp
              pkgs.typescript-language-server
              pkgs.deno

              mylib.update
            ];


            shellHook = ''
              echo "shell pour portfolio"
            '';
          };
        };
      }
    );
}
