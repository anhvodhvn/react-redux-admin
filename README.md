# Demo Sale System:
- User Profile
- Employee Management
- Product Management
- Order Management


# docker setup: 

# build image:
docker build -t admin/node-demo-sale .

# attach to container:
docker run -p 8081:8080 -d admin/node-demo-sale

# print app output
docker logs [containerid]

# enter the container
docker exec -it <container id> /bin/bash

# get data
curl -i localhost:8081

# other commands:
docker ps -a 

docker stop [containerid]

docker rm [containerid]

docker images -a

docker rmi [imageid]
