{
  pkgs,
  inputs,
  ...
}:

{
  imports = [
    inputs.devenvs.homeManagerModules.devenvs.default
  ];
  ts.enable = true;
  ts.biome.enable = true;
  nix.enable = true;

  enterShell = ''
    test src/app/Inter.ttf || cp "${
      pkgs.google-fonts.override { fonts = [ "Inter" ]; }
    }/share/fonts/truetype/Inter[opsz,wght].ttf" src/app/Inter.ttf
    echo "shell pour portfolio"
  '';
}
