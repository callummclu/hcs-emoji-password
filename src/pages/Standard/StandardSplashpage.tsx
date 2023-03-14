import { Affix, Button, rem, Title, Text } from "@mantine/core"
import { VscDebugStart } from "react-icons/vsc"

export const StandardSplashPage = () => {
    return (
        <>
            <Title>Stage 2: Standard Entry</Title>
            <Text mt="md">In this section we will ask you to enter a regular password, using only characters available on your keyboard. Please choose a password over 8 characters and continue.</Text>

            <Affix position={{ bottom: rem(20), right: rem(20)}}>
                <a href="standard/entry"><Button color="green" leftIcon={<VscDebugStart/>}>Get Started</Button></a>
            </Affix>    
        </>
    )
}