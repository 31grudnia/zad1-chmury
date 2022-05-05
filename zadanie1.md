Czesc obowiazkowa - P1
Klient serwera zostal napisany w node.js. Po wejsciu na podstawowy enpoint w konsoli dostajemy informacje o dacie wraz z czasem oraz strefa oraz IP osoby odwiedzajacej nasz serwer.

Czesc obowiazkowa - P2
Kontener wykorzystuje obraz node:16, kopiuje pliki z glownego folderu do /usr/src/app, instaluje zaleznosci, odkrywa porty oraz uruchamia plik index.js

Czesc obowiazkowa - P3
docker build -t 31grudnia/zadanie1:v1 .
docker run -p 8080:8080 --name zadanie1 zadanie1:v1
Nie uruchamiajac serwera w trybie -d widzimy wszystkie logi na biezaco.

Czesc obowiazkowa - P4
sudo apt-get install -y qemu-user-static
docker buildx create --name builder
docker buildx use builder
docker buildx inspect --bootstrap
docker buildx build -t 31grudnia/zadanie1:multi --platform linux/arm/v7,linux/arm64/v8,linux/amd64 --push .
