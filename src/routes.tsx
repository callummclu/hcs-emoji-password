import React from "react";
import { CompletePage } from "./pages/Complete";
import { Display } from "./pages/data";
import { DistractionGame } from "./pages/DistractionGame";
import { EmojiPasswordEntry } from "./pages/Emoji/EmojiPasswordEntry";
import { EmojiRepeatPassword } from "./pages/Emoji/EmojiRepeatPassword";
import { EmojiSplashPage } from "./pages/Emoji/EmojiSplashpage";
import { Introduction } from "./pages/Introduction";
import { StandardPasswordEntry } from "./pages/Standard/StandardPasswordEntry";
import { StandardRepeatPassword } from "./pages/Standard/StandardRepeatPassword";
import { StandardSplashPage } from "./pages/Standard/StandardSplashpage";
import { Error } from './pages/error'
interface Route{
    path:string;
    element:React.ReactElement;
    withCard:boolean;
}

export const routes:Route[] = [
    {path: "*", element: <Error/>, withCard:false},
    {path:"/",element:<Introduction/>, withCard:true},

    // emoji entry
    {path:"emoji",element:<EmojiSplashPage/>, withCard:true},
    {path:"emoji/entry", element:<EmojiPasswordEntry/>, withCard:false},
    {path:"emoji/repeat", element:<EmojiRepeatPassword/>, withCard:false},
    {path:"emoji/distraction", element: <DistractionGame type="emoji"/>, withCard:true},

    // standard entry
    {path:"standard", element:<StandardSplashPage/>, withCard:true},
    {path:"standard/entry", element:<StandardPasswordEntry/>, withCard:false},
    {path:"standard/repeat", element:<StandardRepeatPassword/>, withCard:false},
    {path:"standard/distraction", element: <DistractionGame type="standard"/>, withCard:true},

    {path:"complete", element:<CompletePage/>, withCard:true},
    {path:"results", element:<Display/>, withCard:true},
]