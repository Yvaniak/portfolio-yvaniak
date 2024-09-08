{

  description = "portfolio yvaniak";


  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };


  outputs = { self, nixpkgs }:
    let

      supportedSystems = [ "x86_64-linux" ];
      forEachSupportedSystem = f: nixpkgs.lib.genAttrs supportedSystems (system: f {
        pkgs = import nixpkgs { inherit system; };
      });
    in
    {

      formatter = forEachSupportedSystem ({ pkgs }: pkgs.nixpkgs-fmt);

      devShells = forEachSupportedSystem ({ pkgs }: {
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
      });
    };
}
