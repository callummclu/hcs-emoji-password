import { Input, UnstyledButton } from '@mantine/core';
import {AiOutlineSmile} from 'react-icons/ai'
import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

function App() {

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [passwordInput, setPasswordInput] = useState('');

  return (
    <div className="App">
      <div style={{display:"flex", width:"100%",alignItems:"center",justifyContent:"center"}}>

        <div style={{display:"flex"}}>
        <Input value={passwordInput} onInput={(e) => setPasswordInput((e.target as any).value)} pr="xs"/>
        <div>
        <UnstyledButton pt={7} onClick={()=>setShowEmojiPicker(!showEmojiPicker)}><AiOutlineSmile size={20} color="gray"/></UnstyledButton>
        <div style={{position:"absolute", top:50, left:"50%",transform:"translateX(-50%)"}}>
        {showEmojiPicker && <EmojiPicker onEmojiClick={(emoji) => setPasswordInput(passwordInput+emoji.emoji)}/>}
        </div>
        </div>
        </div>
        

      </div>
    </div>
  );
}

export default App;
