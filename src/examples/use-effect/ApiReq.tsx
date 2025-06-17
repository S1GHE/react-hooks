import {useEffect, useState} from "react";

export const ApiReq = () => {
    const [user, setUser] =  useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setErroe] = useState<string | null>(null)

    useEffect(() => {
        async function fethcUser(){
            try{
                setLoading(true)
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                if (!res.ok)  throw new Error('Error load')
                const data = await res.json()
                setUser(data)
            } catch (err: unknown){
                if (err instanceof Error) setErroe(err.message)
            } finally {
                setLoading(false)
            }
        }

        fethcUser()
    })

    if (loading) return <div>Загрузка...</div>
    if (error) return <div>Ошибка</div>
    return <div>{JSON.stringify(user)}</div>
}