import {useEffect, useState} from "react";

export const WindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        function handlerResize(){
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handlerResize)

        return () => {
            window.removeEventListener('resize', handlerResize) // Отписка от события при размонировании
        }
    }, []) // Пустой массив — подписка только при монтировании

    return <div>Ширина: {windowSize.width}px, Высота: {windowSize.height}px</div>
}