import { Title,Text, Affix, Button, rem } from "@mantine/core"
import { useState } from "react"
import { VscSave } from "react-icons/vsc"
import { PasswordEntry } from "../../components/PasswordEntry"

export const EmojiRepeatPassword = () => {
    const [password, setPassword] = useState("")


    return (

        <>
            <Title>Emoji password re-entry</Title>
            <Text>Re-enter the password you previously created.</Text>
            <div style={{marginTop:100}}>
            <PasswordEntry isEmoji={true} password={[password, setPassword]} />
            </div>

            <Affix position={{ bottom: rem(20), right: rem(20)}}>
                <a href="/standard"><Button color="green">Complete task</Button></a>
            </Affix>   
            
        </>
    )
}