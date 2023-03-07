import { Title, Text, Affix, Button, rem } from "@mantine/core";
import { useState } from "react";
import { VscSave } from "react-icons/vsc";
import { PasswordEntry } from "../../components/PasswordEntry";

export const EmojiPasswordEntry = () => {
    const [password, setPassword] = useState("")


    return (

        <>
            <Title>Emoji password entry</Title>
            <Text>Choose a password including atleast 1 emoji.</Text>
            <div style={{marginTop:100}}>
            <PasswordEntry isEmoji={true} password={[password, setPassword]} />
            </div>

            <Affix position={{ bottom: rem(20), right: rem(20)}}>
                <a href="/emoji/distraction"><Button color="green" leftIcon={<VscSave/>}>Save Password</Button></a>
            </Affix>   
            
        </>
    )
}