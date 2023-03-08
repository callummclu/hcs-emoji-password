import { useEffect, useState } from "react"
import { Card, Flex, Text, Title } from '@mantine/core'
import {session} from '../types/session'
import styles from '../table.module.css'

export const Display = () => {

    const [data, setData] = useState<session[] | null>(null)
    const [success, setSuccess] = useState(true)

    useEffect(()=>{
        fetch("https://hcs-emoji-password.onrender.com/api")
            .then(async data => {
                let data_json = await data.json()
                setData(data_json.data)
                setSuccess(true)

            })
            .catch(()=>{
                setSuccess(false)
            })
    },[])

    return (
        <>
            {data ? (data === null ? "no data..." : <Table data={data}/>) : success ? "loading..." : "failed to load"}
        </>
    )
}

const Table = ({data}:{data:session[]}) => {
return (
    <>
    <Card withBorder mb="xl">
    <Title>Results</Title>
    <Text color="dimmed">The results from the study</Text>
    </Card>
    <Flex justify='center'>
    <Text>
    <table cellSpacing="0" className={styles.table}>
        <thead>
            <tr>
                <th>Participant ID</th>
                <th>Emoji Password</th>
                <th>Emoji Password Re-entry</th>
                <th>Emoji Re-entry time</th>
                <th>Standard Password</th>
                <th>Standard Password Re-entry</th>
                <th>Standard Re-entry time</th>
            </tr>
        </thead>
        <tbody>
            {data.map((session) => (
        <tr key={session.session}>
            <td>{session.session}</td>
            <td>{session.emoji_password}</td>
            <td>{session.emoji_reentry}</td>
            <td>{session.emoji_time}</td>
            <td>{session.standard_password}</td>
            <td>{session.standard_reentry}</td>
            <td>{session.standard_time}</td>
        </tr>
    ))}
        </tbody>
    </table>
    </Text>
    </Flex>
    </>
)
}