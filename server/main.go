package main

import (
	"errors"
	"fmt"

	"github.com/callummclu/hcs-emoji-password/configs"
	"github.com/callummclu/hcs-emoji-password/models"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.POST("create", func(c *gin.Context) {
		session := models.NewSession()
		if err := c.ShouldBindJSON(&session); err != nil {
			c.JSON(500, gin.H{"error": err.Error()})
			return
		}

		if err := session.SaveSession(); err != nil {
			c.JSON(500, gin.H{"error": err.Error()})
			return
		}

		c.JSON(200, gin.H{
			"message": "Post successfully created",
		})
	})

	router.GET("", func(c *gin.Context) {
		var sessions []models.Session
		db, err := configs.GetDB()
		if err != nil {
			err = errors.New("DB connection error")
			c.JSON(400, gin.H{"error": err})
			return
		}

		defer db.Close()

		rows, err := db.Query("SELECT * FROM participant")

		if err != nil {
			c.JSON(500, gin.H{"error": err.Error()})
			return
		}

		defer rows.Close()

		for rows.Next() {
			var (
				ID                int64
				Emoji_time        string
				Emoji_password    string
				Emoji_reentry     string
				Standard_time     string
				Standard_password string
				Standard_reentry  string
			)

			if err := rows.Scan(&ID, &Emoji_time, &Emoji_password, &Emoji_reentry, &Standard_time, &Standard_password, &Standard_reentry); err != nil {
				fmt.Print(err)
			}

			sessions = append(sessions, models.Session{
				ID:                ID,
				Emoji_password:    Emoji_password,
				Emoji_time:        Emoji_time,
				Emoji_reentry:     Emoji_reentry,
				Standard_time:     Standard_time,
				Standard_password: Standard_password,
				Standard_reentry:  Standard_reentry,
			})
		}

		if err != nil {
			c.JSON(400, gin.H{"error": err.Error()})
			return
		}

		c.JSON(200, gin.H{"data": sessions})
	})

	router.Run(configs.EnvPORT())
}
