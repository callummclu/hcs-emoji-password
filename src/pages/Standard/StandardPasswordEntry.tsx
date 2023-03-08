import { Affix, Button, rem, Title, Text } from "@mantine/core"
import { useState } from "react"
import { VscSave } from "react-icons/vsc"
import { PasswordEntry } from "../../components/PasswordEntry"

export const StandardPasswordEntry = () => {
    const [password, setPassword] = useState("")

    const SaveToLocalStorage = () => {
        localStorage.setItem("standard_password", password);
        window.location.replace("/standard/distraction")
    }


    return (

        <>
            <Title>Standard password entry</Title>
            <Text>Choose a password including atleast 1 emoji.</Text>
            <div style={{marginTop:100}}>
            <PasswordEntry isEmoji={false} password={[password, setPassword]} />
            </div>

            <Affix position={{ bottom: rem(20), right: rem(20)}}>
                <Button onClick={SaveToLocalStorage} color="green" leftIcon={<VscSave/>}>Save Password</Button>
            </Affix>   
            
        </>
    )
}