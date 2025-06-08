{
  pkgs ? import <nixpkgs> { },
  ...
}:

pkgs.writeShellScript "serve-portfolio-yvaniak"
  "${pkgs.nodePackages.serve}/bin/serve ${pkgs.callPackage ./default.nix { }}"
