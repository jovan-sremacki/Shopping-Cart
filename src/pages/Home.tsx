import { useState } from "react"

export function Home() {
    const [item, setItem] = useState(0);

    function increaseItem() {
        setItem(a => a + 1);
    }

    function decreaseItem() {
        setItem(a => a - 1);
    }

    return (
        <>
            <h1>{item}</h1>
            <button onClick={increaseItem}>Increase</button>
            <button onClick={decreaseItem}>Decrease</button>
        </>
    )
}