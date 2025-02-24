#this justfile is generated

default:
  just --list




run:
  npm start

tests:
  jest
  nix build

pre-commit-all:
  pre-commit run --all-files





build-release:
  npm run build

all:  tests  pre-commit-all build-release

