import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutUs, Home } from './pages'

function App () {
  return (
    <Routes>
      <Route>
        <Route index element={<Home />} />
        <Route path='/nosotros' element={<AboutUs />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  )
}

export default App
