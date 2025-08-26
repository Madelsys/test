import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div style={{ padding: '1.5rem' }}>
            <h1>Inicio</h1>
            <p>Esta es la página principal.</p>
            <Link to="/testapi">Ir a Test API</Link>
        </div>
    )
}