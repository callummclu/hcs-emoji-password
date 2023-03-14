import { Button, Flex, Text } from '@mantine/core'
import {TbError404} from 'react-icons/tb'

export const Error = () => {
    return (

        <Flex align={'center'} justify='center' direction='column' h='100vh' >
        <TbError404 size={180}/>
        <Text ta='center' w={250}>This page does not exist press the button below to return back to the home page</Text>
        <Button variant='outline' mt="md" onClick={()=> window.location.replace(window.location.origin)}>Go back</Button>
        </Flex>

    )
}