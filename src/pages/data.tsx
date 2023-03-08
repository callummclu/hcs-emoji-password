import { useEffect, useState } from "react"
import {session} from '../types/session'
export const Display = () => {

    const [data, setData] = useState<session[] | null>(null)
    const [success, setSuccess] = useState(true)

    useEffect(()=>{
        fetch("https://hcs-emoji-password.onrender.com/api")
            .then(async data => {
                let data_json = await data.json()
                setData(data_json)
                setSuccess(true)

            })
            .catch(()=>{
                setSuccess(false)
            })
    },[])

    return (
        <>
            {data ? data.length === 0 ? "no data" :<Table data={data}/> : success ? "loading..." : "failed to load"}
        </>
    )
}

const Table = ({data}:{data:session[]}) => {
    const rows:JSX.Element[] = data.map((session) => (
        <tr key={session.ID}>
            <td>{session.ID}</td>
            <td>{session.Emoji_password}</td>
            <td>{session.Emoji_reentry}</td>
            <td>{session.Emoji_time}</td>
            <td>{session.Standard_password}</td>
            <td>{session.Standard_reentry}</td>
            <td>{session.Standard_time}</td>
        </tr>
    ))
return (
    <table>
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
            {rows}
        </tbody>
    </table>
)
}