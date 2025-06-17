import { useEffect, useRef } from 'react';

export const DOMEffect = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(!inputRef.current) return;
        inputRef.current.focus();
      }, []);

    return <input ref={inputRef}/>
}