import { useState } from 'react'

export default function TestApi() {
    const [res, setRes] = useState('(sin respuesta)')

    const ping = async () => {
        try {
            const r = await fetch('/api/test/ping')
            if (!r.ok) throw new Error(`HTTP ${r.status}`)
            const data = await r.json()
            setRes(JSON.stringify(data, null, 2))
        } catch (e) {
            setRes(`Error: ${(e as Error).message}`)
        }
    }
    return (
        <div style={{ padding: '1.5rem' }}>
            <h2>Test API</h2>
            <button onClick={ping}>Probar /api/test/ping</button>
            <pre style={{ marginTop: '1rem' }}>{res}</pre>
        </div>
    )
}