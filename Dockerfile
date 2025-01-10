FROM nixos/nix AS builder

WORKDIR /tmp

COPY . .

RUN nix build --extra-experimental-features nix-command --extra-experimental-features flakes

RUN mkdir /tmp/nix-store-closure
RUN cp -R $(nix-store -qR result/) /tmp/nix-store-closure

FROM scratch

WORKDIR /app

EXPOSE 9000

ENV PORT=9000
# ENV HOSTNAME="test.yvaniak.fr"

COPY --from=builder /tmp/nix-store-closure /nix/store
COPY --from=builder /tmp/result /app

ENTRYPOINT [ "/app/bin/portfolio-yvaniak" ]
