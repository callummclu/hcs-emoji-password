import { Affix, Button, rem, Title, Text } from "@mantine/core"
import { VscDebugStart } from "react-icons/vsc"

export const StandardSplashPage = () => {
    return (
        <>
            <Title mt="xl">Stage 2: Standard Entry</Title>
            <Text mt="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis tempus enim, ac suscipit lectus ultricies nec. Nam vulputate non quam sit amet convallis. Mauris placerat, mauris at dignissim vestibulum, elit nibh cursus sem, vitae vehicula turpis justo quis elit. Mauris quis luctus libero, id pretium nunc. Curabitur eros enim, cursus vulputate sollicitudin at, aliquam sit amet nisl. Integer sagittis, est eu pellentesque ullamcorper, arcu libero tempor lectus, id mattis turpis tortor congue felis. Suspendisse elementum massa non odio dictum faucibus. Quisque eget pharetra mi.<br/><br/>Praesent a pulvinar eros. Nunc eleifend, eros ac pharetra faucibus, lectus tellus congue turpis, sed molestie nisl ipsum nec odio. Sed odio eros, aliquam sit amet est sed, porta sagittis diam. Vestibulum feugiat, odio ac convallis dapibus, lectus tortor molestie augue, sit amet varius lacus enim ac tellus. Suspendisse vitae elit rhoncus libero mattis pharetra. Donec eu diam non velit condimentum tempor. Sed tempor ultricies arcu. Phasellus in lobortis leo.</Text>

            <Affix position={{ bottom: rem(20), right: rem(20)}}>
                <a href="standard/entry"><Button color="green" leftIcon={<VscDebugStart/>}>Get Started</Button></a>
            </Affix>    
        </>
    )
}