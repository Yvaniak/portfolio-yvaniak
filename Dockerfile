FROM docker.io/nixos/nix AS builder

WORKDIR /tmp

COPY . .

RUN nix build .#serve --extra-experimental-features nix-command --extra-experimental-features flakes

RUN mkdir /tmp/nix-store-closure
RUN cp -R $(nix-store -qR result/) /tmp/nix-store-closure

FROM scratch

WORKDIR /app

ENV PORT=80
# ENV HOSTNAME="test.yvaniak.fr"

COPY --from=builder /tmp/nix-store-closure /nix/store
COPY --from=builder /tmp/result /app

ENTRYPOINT [ "./result" ]
