{
  pkgs ? import <nixpkgs> { },
  pkg,
  ...
}:
pkgs.runCommand "respond" { } ''
  ${pkg}/bin/portfolio-yvaniak&
  sleep 5
  ${pkgs.curl}/bin/curl -s localhost:3000 | grep "Contact me"
  ${pkgs.killall}/bin/killall "next-server (v15.2.2)"
  touch $out
''
