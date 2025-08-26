import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TestApi from './components/TestApi'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/testapi" element={<TestApi />} />
    </Routes>
  )
}