import { Title, Text, Affix, Button, rem } from "@mantine/core";
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
            <Title>Emoji password entry</Title>
            <Text>Choose a password including atleast 1 emoji.</Text>
            <div style={{marginTop:100}}>
            <PasswordEntry isEmoji={true} password={[password, setPassword]} />
            </div>

            <Affix position={{ bottom: rem(20), right: rem(20)}}>
                <Button disabled={disabled} onClick={SaveToLocalStorage} color="green" leftIcon={<VscSave/>}>Save Password</Button>
            </Affix>   
            
        </>
    )
}