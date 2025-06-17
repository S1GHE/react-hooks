import {useEffect, useState} from "react";

export const DepEfffect = () => {
    const [count] = useState(0)

    useEffect(() => {
        // Код для побочного эффекта
        return () => {
          // Код для очистки (опционально)
        };
    }, [/* dependencies */])

    useEffect(() => {
        console.log('Без зависимостей: Эффект выполняется после каждого рендера.')
    })

    useEffect(() => {
        console.log('Пустой массив зависимостей: Эффект запускается Один раз после первого рендера')
    }, [])

    useEffect(() => {
        console.log('С зависимостями: Эффект запускается после первого рендера и каждый раз, когда одна из зависимостей изменяется.')
    }, [count])

    return <div>DepEfffect</div>
}