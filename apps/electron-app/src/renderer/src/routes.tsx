import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TestPage from './test-page'
import OtherPage from './other-page'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/other" element={<OtherPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
