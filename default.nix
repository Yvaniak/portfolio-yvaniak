{
  pkgs ? import <nixpkgs> { },
  lib ? pkgs.lib,
  ...
}:

pkgs.buildNpmPackage {
  pname = "portfolio-yvaniak";
  inherit ((lib.trivial.importJSON ./package.json)) version;

  src = ./.;

  npmDeps = pkgs.importNpmLock {
    npmRoot = ./.;
  };

  inherit (pkgs.importNpmLock) npmConfigHook;

  postInstall = ''
    cp -rf dist/* $out
  '';
}
