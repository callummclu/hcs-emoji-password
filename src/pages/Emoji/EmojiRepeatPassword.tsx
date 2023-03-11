import { Title,Text, Affix, Button, rem } from "@mantine/core"
import { useEffect, useState } from "react"
import { VscSave } from "react-icons/vsc"
import { PasswordEntry } from "../../components/PasswordEntry"
import { Timer, Time, TimerOptions } from 'timer-node';
import { inputValidation } from "../../helpers/check_password";

export const EmojiRepeatPassword = () => {
    const [password, setPassword] = useState("")
    const [time, setTime] = useState(new Timer())
    const [disabled, setDisabled] = useState(true)

    const SaveToLocalStorage = () => {
        localStorage.setItem("emoji_reentry", password);
        time.pause()
        localStorage.setItem("emoji_time", time.ms().toString());
        window.location.replace("/standard")
    }

    useEffect(()=> {
        time.start()
    },[])

    useEffect(()=>{
        setDisabled(inputValidation(password, true))
    },[password])

    return (

        <>
            <Title>Emoji password re-entry</Title>
            <Text>Re-enter the password you previously created.</Text>
            <div style={{marginTop:100}}>
            <PasswordEntry isEmoji={true} password={[password, setPassword]} />
            </div>
            <Affix position={{ bottom: rem(20), right: rem(20)}}>
                <Button disabled={disabled} onClick={SaveToLocalStorage} color="green">Complete task</Button>
            </Affix>   
        </>
    )
}