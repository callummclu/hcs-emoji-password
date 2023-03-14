import { Affix, Button, rem, Title, Text, Code, Card } from "@mantine/core"
import { useEffect, useState } from "react"
import { VscSave } from "react-icons/vsc"
import { PasswordEntry } from "../../components/PasswordEntry"
import { inputValidation } from "../../helpers/check_password"

export const StandardPasswordEntry = () => {
    const [password, setPassword] = useState("")

    const SaveToLocalStorage = () => {
        localStorage.setItem("standard_password", password);
        window.location.replace("/standard/distraction")
    }

    const [disabled, setDisabled] = useState(true)

    useEffect(()=>{
        setDisabled(inputValidation(password, false))
    },[password])


    return (

        <>
            <Card mt="xl" p="xl" withBorder>
                <Title>Standard password entry</Title>
                <Text>Choose a password without any emojis.</Text>
                <Text>Here is an example password <Code>bkDunwh4</Code></Text>
            </Card>
            <div style={{marginTop:100}}>
            <PasswordEntry isEmoji={false} password={[password, setPassword]} />
            </div>

            <Affix position={{ bottom: rem(20), right: rem(20)}}>
                <Button disabled={disabled} onClick={SaveToLocalStorage} color="green" leftIcon={<VscSave/>}>Save Password</Button>
            </Affix>   
            
        </>
    )
}