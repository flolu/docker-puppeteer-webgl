FROM ubuntu:20.04

RUN apt-get update && \
  DEBIAN_FRONTEND=noninteractive \
  apt-get install -y \
  xorg \
  xserver-xorg \
  xvfb \
  libx11-dev \
  libxext-dev \
  nodejs \
  chromium-browser
