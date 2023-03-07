import React from "react";
import { CompletePage } from "./pages/Complete";
import { DistractionGame } from "./pages/DistractionGame";
import { EmojiPasswordEntry } from "./pages/Emoji/EmojiPasswordEntry";
import { EmojiRepeatPassword } from "./pages/Emoji/EmojiRepeatPassword";
import { EmojiSplashPage } from "./pages/Emoji/EmojiSplashpage";
import { Introduction } from "./pages/Introduction";
import { StandardPasswordEntry } from "./pages/Standard/StandardPasswordEntry";
import { StandardRepeatPassword } from "./pages/Standard/StandardRepeatPassword";
import { StandardSplashPage } from "./pages/Standard/StandardSplashpage";

interface Route{
    path:string;
    element:React.ReactElement;
}

export const routes:Route[] = [
    {path:"/",element:<Introduction/>},

    // emoji entry
    {path:"emoji",element:<EmojiSplashPage/>},
    {path:"emoji/entry", element:<EmojiPasswordEntry/>},
    {path:"emoji/repeat", element:<EmojiRepeatPassword/>},
    {path:"emoji/distraction", element: <DistractionGame type="emoji"/>},

    // standard entry
    {path:"standard", element:<StandardSplashPage/>},
    {path:"standard/entry", element:<StandardPasswordEntry/>},
    {path:"standard/repeat", element:<StandardRepeatPassword/>},
    {path:"standard/distraction", element: <DistractionGame type="standard"/>},

    {path:"complete", element:<CompletePage/>}
]