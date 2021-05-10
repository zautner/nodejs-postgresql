docker run -p 5432:5432 -d \
    --name some-postgres \
    -e POSTGRES_USER=rapidapi_adm \
    -e POSTGRES_PASSWORD=rapidapi \
    -e PGDATA=/var/lib/postgresql/data/pgdata \
    postgres