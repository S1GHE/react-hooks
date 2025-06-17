import { useQuery } from '@tanstack/react-query';

interface User {
    id: number;
    name: string;
    email: string;
}

export const RQReq = () => {
    const {data: users, isLoading, error} = useQuery<Array<User>, Error>({
        queryKey: ['users'], // Уникальный ключ для кэширования
        queryFn: async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            if (!res.ok) throw new Error('Error loading users')
            return res.json()
        }
    })

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;
    return <div>Users: {JSON.stringify(users, null, 2)}</div>;
}