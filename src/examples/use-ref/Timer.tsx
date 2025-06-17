import {useEffect, useRef} from "react";

export const Timer = () => {
    const countRef = useRef(0)

    useEffect(() => {
        const interval = setInterval(() => {
            countRef.current += 1;
            console.log('Count:', countRef.current);
          }, 1000);
          return () => clearInterval(interval);
    })

    return <div>Count (not re-rendered): {countRef.current}</div>;
}