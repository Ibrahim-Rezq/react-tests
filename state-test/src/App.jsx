import { useEffect, useState } from 'react'
import './App.css'
import Width from './Width'

function App() {
    const [Show, setShow] = useState(true)

    useEffect(() => {
        console.log(Show)
    }, [Show])

    return (
        <div className='App'>
            {Show && <Width />}
            <button onClick={() => setShow((v) => !v)}>Click</button>
        </div>
    )
}

export default App
