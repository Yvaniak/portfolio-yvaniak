{
  pkgs ? import <nixpkgs> { },
  pkg,
  ...
}:
pkgs.runCommand "respond" { } ''
  ${pkg}/bin/portfolio-yvaniak&
  sleep 5
  ${pkgs.curl}/bin/curl -s localhost:3000 | grep "Contactez-moi"
  ${pkgs.killall}/bin/killall "next-server (v15.2.4)"
  touch $out
''
