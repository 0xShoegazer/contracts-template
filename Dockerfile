
# docker build --no-cache --progress=plain .

# Use the latest foundry image
FROM ghcr.io/foundry-rs/foundry

# Copy our source code into the container
WORKDIR /app

# Build and test the source code
COPY contracts .
COPY foundry.toml .

RUN forge build

