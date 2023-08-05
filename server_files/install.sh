#!/bin/sh
echo Downloading packwiz-installer-bootstrap.jar
curl -LO https://github.com/packwiz/packwiz-installer-bootstrap/releases/download/v0.0.3/packwiz-installer-bootstrap.jar

echo Launching packwiz-installer
java -jar packwiz-installer-bootstrap.jar -s server http://thestaticvoid.github.io/StaTech-Industry/pack.toml

echo Downloading fabric server jar
curl -OJ https://meta.fabricmc.net/v2/versions/loader/1.19.2/0.14.22/0.11.2/server/jar

echo Downloading server-icon.png
curl -OJ https://raw.githubusercontent.com/TheStaticVoid/StaTech-Industry/3f3314751ee69c65cab4ac24c1d88056d44a6550/server-icon.png

