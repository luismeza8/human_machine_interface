let
  pkgs = import <nixpkgs> {};
in pkgs.mkShell {
  packages = [
    (pkgs.python3.withPackages (python-pkgs: [
      python-pkgs.django
      python-pkgs.django-htmx
      python-pkgs.daphne
      python-pkgs.channels
      python-pkgs.requests
    ]))
  ];
}

