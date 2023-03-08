package main

import (
	"github.com/callummclu/hcs-emoji-password/configs"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	router.Run(configs.EnvPORT())
}
