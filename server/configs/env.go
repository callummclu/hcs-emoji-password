package configs

import (
	"os"
)

func getEnvByName(name string) string {
	return os.Getenv(name)
}

func EnvPORT() string {

	port := "8080"
	env_port := os.Getenv("PORT")

	if len(env_port) > 0 {
		port = env_port
	}

	return ":" + port
}
