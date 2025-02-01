{
  pkgs,
  ...
}:

{
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_latest;
    npm.enable = true;
    npm.install.enable = true;
  };

  languages.typescript.enable = true;

  git-hooks.hooks = {
    prettier.enable = true;
    eslint.enable = true;

    nixfmt-rfc-style.enable = true;
    statix.enable = true;
    deadnix.enable = true;
    commitizen.enable = true;
  };

  enterShell = ''
    test src/app/Inter.ttf || cp "${
      pkgs.google-fonts.override { fonts = [ "Inter" ]; }
    }/share/fonts/truetype/Inter[opsz,wght].ttf" src/app/Inter.ttf
    echo "shell pour portfolio"
  '';
}
