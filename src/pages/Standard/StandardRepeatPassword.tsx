import { Title,Text, Affix, Button, rem } from "@mantine/core"
import { useState } from "react"
import { PasswordEntry } from "../../components/PasswordEntry"

export const StandardRepeatPassword = () => {
    const [password, setPassword] = useState("")


    return (

        <>
            <Title>Standard password re-entry</Title>

            <Text>Re-enter the password you previously created.</Text>
            <div style={{marginTop:100}}>
            <PasswordEntry isEmoji={false} password={[password, setPassword]} />
            </div>

            <Affix position={{ bottom: rem(20), right: rem(20)}}>
                <a href="/complete"><Button color="green">Complete task</Button></a>
            </Affix>   
            
        </>
    )
}