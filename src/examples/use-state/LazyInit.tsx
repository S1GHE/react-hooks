import {useState} from "react";

const expensiveComputation = (): number[] => {
    console.log("expensiveComputation")
    return Array(10000).fill(0).map((_, i) => i * Math.random());
  };

export const LazyInit = () => {
    const [number, setNuber] = useState(() => expensiveComputation())
    const [count, setCount] = useState(0)

    const handleClick = () => {
      setNuber(prevState => [
          ...prevState, 1
      ])
    };

    const handleCountClick = () => setCount(count + 1)
    return (
        <div>
            <button onClick={handleClick}>add</button>
            <button onClick={handleCountClick}>{count}</button>
                 <pre
                    style={{
                      background: "#f4f4f4",
                      padding: "10px",
                      borderRadius: "4px",
                      overflowX: "auto",
                      maxHeight: "300px",
                    }}
                  >
                    {JSON.stringify(number, null, 2)}
                </pre>
        </div>
    )
}