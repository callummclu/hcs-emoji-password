import { Title, Text, Affix, Button, rem } from "@mantine/core"
import { VscDebugStart } from "react-icons/vsc"

export const EmojiSplashPage = () => {
    return (
        <>
            <Title mt="xl">Stage 1: Emoji Entry</Title>
            <Text mt="md">In this section we will ask you to enter an emoji-based password. Use the emoji picker to the right of the input box along with the keyboard to enter your password, which must be at least 8 characters long and include emojis. </Text>

            <Affix position={{ bottom: rem(20), right: rem(20)}}>
                <a href="emoji/entry"><Button color="green" leftIcon={<VscDebugStart/>}>Get Started</Button></a>
            </Affix>    
        </>
    )
}