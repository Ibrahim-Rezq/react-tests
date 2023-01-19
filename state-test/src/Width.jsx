import { useEffect, useState } from 'react'
import React from 'react'

const Width = () => {
    const [windowScreen, setWindowScreen] = useState(window.innerWidth)

    const handleWidth = () => {
        setWindowScreen(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWidth)
        return () => {
            window.removeEventListener('resize', handleWidth)
        }
    }, [])

    return <div>{windowScreen}</div>
}

export default Width
