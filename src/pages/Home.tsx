import { useState } from "react"
import { useThemeContext } from "../context/ThemeContext";
import { Button, Container } from "react-bootstrap";

export function Home() {
    const [item, setItem] = useState(0);
    const { theme, toggleTheme } = useThemeContext()

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

            <Container>
                <p>{theme}</p>
                <Button onClick={toggleTheme}>
                    Toggle Theme
                </Button>
            </Container>
        </>
    )
}