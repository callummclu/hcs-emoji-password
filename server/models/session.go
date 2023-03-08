package models

import (
	"errors"

	"github.com/callummclu/hcs-emoji-password/configs"
)

type Session struct {
	ID                int64  `json:"session"`
	Emoji_time        string `json:"emoji_time"`
	Emoji_password    string `json:"emoji_password"`
	Emoji_reentry     string `json:"emoji_reentry"`
	Standard_time     string `json:"standard_time"`
	Standard_password string `json:"standard_password"`
	Standard_reentry  string `json:"standard_reentry"`
}

func NewSession() *Session {
	return new(Session)
}

func (s *Session) SaveSession() error {
	db, err := configs.GetDB()
	if err != nil {
		err = errors.New("DB connection error: ")
		return err
	}
	defer db.Close()

	insert_stmt, err := db.Prepare("INSERT INTO participant (emoji_time, emoji_password, emoji_reentry, standard_time, standard_password, standard_reentry) VALUES ($1,$2,$3,$4,$5,$6)")

	if err != nil {
		return err
	}

	defer insert_stmt.Close()
	_, err = insert_stmt.Exec(s.Emoji_time, s.Emoji_password, s.Emoji_reentry, s.Standard_time, s.Standard_password, s.Standard_reentry)

	return err
}
