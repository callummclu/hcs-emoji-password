import { Title,Text } from "@mantine/core"
import { useEffect } from "react"

export const CompletePage = () => {

    const getPostData = () => {
        return {
            emoji_password: localStorage.getItem('emoji_password') || "",
            emoji_reentry: localStorage.getItem('emoji_reentry') || "",
            emoji_time: localStorage.getItem('emoji_time') || "",

            standard_password: localStorage.getItem('standard_password') || "",
            standard_reentry: localStorage.getItem('standard_reentry') || "",
            standard_time: localStorage.getItem('standard_time') || ""

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
            <Title>Tasks Finished</Title>
            <Text mt="md">Thanks for participating in our study.</Text>
        </>
    )
}