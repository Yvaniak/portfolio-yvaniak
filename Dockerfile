FROM nixos/nix AS builder

WORKDIR /app

COPY . .

RUN nix-channel --update

RUN nix build --extra-experimental-features nix-command --extra-experimental-features flakes

EXPOSE 9000

ENV PORT=9000
ENV HOSTNAME="0.0.0.0"

ENTRYPOINT [ "result/bin/portfolio-yvaniak" ]
