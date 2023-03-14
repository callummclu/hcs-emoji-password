import { Title, Text, Affix, Button, rem, Card, Code } from "@mantine/core";
import { useEffect, useState } from "react";
import { VscSave } from "react-icons/vsc";
import { PasswordEntry } from "../../components/PasswordEntry";
import { inputValidation } from "../../helpers/check_password";

export const EmojiPasswordEntry = () => {
    const [password, setPassword] = useState("")
    const [disabled, setDisabled] = useState(true)

    const SaveToLocalStorage = () => {
        localStorage.setItem("emoji_password", password);
        window.location.replace("/emoji/distraction")
    }


    useEffect(()=>{
        setDisabled(inputValidation(password, true))
    },[password])

    return (

        <>
            <Card mt="xl" p="xl" withBorder>
                <Title>Emoji password entry</Title>
                <Text>Choose a password with a minimum length of 8 characters including atleast 1 emoji.</Text>
                <Text>Here is an example password <Code>jdhWnC7🐬</Code></Text>
            </Card>
            <div style={{marginTop:100}}>
            <PasswordEntry isEmoji={true} password={[password, setPassword]} />
            </div>

            <Affix position={{ bottom: rem(20), right: rem(20)}}>
                <Button disabled={disabled} onClick={SaveToLocalStorage} color="green" leftIcon={<VscSave/>}>Save Password</Button>
            </Affix>   
            
        </>
    )
}