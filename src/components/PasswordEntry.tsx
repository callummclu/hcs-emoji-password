import { Input, UnstyledButton } from "@mantine/core";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { AiOutlineSmile } from "react-icons/ai";

interface PasswordProps{
    password:any;
    isEmoji:boolean;
}

export const PasswordEntry = (props:PasswordProps) => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const [passwordInput, setPasswordInput] = props.password
    return (
    <div style={{display:"flex", width:"100%",alignItems:"center",justifyContent:"center"}}>

        <div style={{display:"flex"}}>
        <Input value={passwordInput} onInput={(e) => setPasswordInput((e.target as any).value)} pr="xs"/>
        {props.isEmoji && <div>
        <UnstyledButton pt={7} onClick={()=>setShowEmojiPicker(!showEmojiPicker)}><AiOutlineSmile size={20} color="gray"/></UnstyledButton>
        <div style={{position:"absolute", top:225, left:"50%",transform:"translateX(-50%)"}}>
        {showEmojiPicker && <EmojiPicker onEmojiClick={(emoji) => setPasswordInput(passwordInput+emoji.emoji)}/>}
        </div>
        </div>}
        </div>
        

      </div>
    )
}