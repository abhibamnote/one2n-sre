1. build api image : docker build -f DockerFile -t sre-api --target production .
2. create network : docker network create SRE_NET
3. run mongo image on network : docker run --name mongo --network mongo-network -d mongo
4. run api image on network : docker run --name sre-api --network mongo-network -p 4545:4545 -d sre-api




dockerfile ports

makefile ports to args