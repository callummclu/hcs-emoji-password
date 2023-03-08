import { useEffect, useState } from "react"
import {session} from '../types/session'
export const Display = () => {

    const [data, setData] = useState<session[] | null>(null)
    const [success, setSuccess] = useState(true)

    useEffect(()=>{
        fetch("https://hcs-emoji-password.onrender.com/")
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

const Table = ({data}:any) => {
return (<>{JSON.stringify(data)}</>)
}