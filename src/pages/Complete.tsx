import { Title,Text } from "@mantine/core"
import { useEffect } from "react"
import { session } from '../types/session'

export const CompletePage = () => {

    const getPostData = () => {
        return {
            Emoji_password: localStorage.getItem('emoji_password') || "",
            Emoji_reentry: localStorage.getItem('emoji_reentry') || "",
            Emoji_time: "0",

            Standard_password: localStorage.getItem('standard_password') || "",
            Standard_reentry: localStorage.getItem('standard_reentry') || "",
            Standard_time: "0"

        }
    }

    useEffect(()=>{
        let body = JSON.stringify(getPostData())
        fetch("https://hcs-emoji-password.onrender.com/api/create",{
            method:"POST",
            body
        }).then(()=>{
            localStorage.clear()
        })
    },[])

    return (
        <>
            <Title mt="xl">Tasks Finished</Title>
            <Text mt="md">Thanks for participating in our study.</Text>
        </>
    )
}