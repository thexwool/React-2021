import { useState } from "react"

export function Counter(){
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prevState => prevState + 1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    )
}