import { Input, UnstyledButton } from "@mantine/core";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useState } from "react";
import { AiOutlineSmile } from "react-icons/ai";

interface PasswordProps{
    password:any;
    isEmoji:boolean;
}

export const PasswordEntry = (props:PasswordProps) => {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const [passwordInput, setPasswordInput] = props.password;

    const [inputErrorText, setInputErrorText] = useState("");

    const [emojiHover, setEmojiHover] = useState(false);

    const inputValidation = () => {
        if((/\p{Extended_Pictographic}/u.test(passwordInput))){
            if(passwordInput.length < 8){
                setInputErrorText("Password must be at least 8 characters");
                return
            }
            setInputErrorText("");
            return
        } else {
            if(passwordInput.length < 8){
                setInputErrorText("Password must include at least one emoji and must be at least 8 characters");
                return
            } else {

                setInputErrorText(`Password must include at least one emoji`);
                return
            }
        }

        
        

    }

    useEffect(()=>{
        if(passwordInput.length > 0){
            inputValidation();
        }
    },[passwordInput])

    useEffect(()=>{
    },[])


    return (
    <div style={{display:"flex", width:"100%",alignItems:"center",justifyContent:"center"}}>
        {showEmojiPicker && <div style={{top:0,width:"100%", height:"100%", position:"absolute"}} onClick={()=>setShowEmojiPicker(false)}>
        </div>}
        <div style={{display:"flex", position:'relative'}}>
            <Input.Wrapper error={inputErrorText}>
        <Input miw={300} sx={{fontSize:'100px !important'}} value={passwordInput} onInput={(e) => setPasswordInput((e.target as any).value)} pr="xs" placeholder="enter your emoji filled password"/>
        </Input.Wrapper>
        {props.isEmoji && <div>
        <UnstyledButton onMouseOver={()=>setEmojiHover(true)} onMouseOut={() => setEmojiHover(false)} pt={7} onClick={()=>setShowEmojiPicker(!showEmojiPicker)}><AiOutlineSmile size={20} color={emojiHover ? "orange":"gray"}/></UnstyledButton>
        {showEmojiPicker &&
        <div style={{position:"absolute", top:70, left:"50%",transform:"translateX(-50%)"}}>
         <EmojiPicker onEmojiClick={(emoji) => setPasswordInput(passwordInput+emoji.emoji)}/>
        </div>}
        </div>}
        </div>
        

      </div>
    )
}