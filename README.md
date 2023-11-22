# Psalms

To run the frontend on 8080:
```bash
cd web
docker-compose up 
```

To run the backend on 1337:
```
cd api
docker build --tag api-container .
docker run -p 1337:1337 api-container
```
