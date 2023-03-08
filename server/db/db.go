package db

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

func GetDB() (*sql.DB, error) {
	host := configs.getEnvByName("DB_HOST")
	port := configs.getEnvByName("DB_PORT")
	user := configs.getEnvByName("DB_USER")
	password := configs.getEnvByName("DB_PASS")
	dbname := configs.getEnvByName("DB_NAME")

	psqlInfo := fmt.Sprintf("host=%s port=%s user=%s "+"password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)

	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}

	err = db.Ping()
	if err != nil {
		panic(err)
	}
	fmt.Println("Successfully connected!")
	return db, err
}
