import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BoardPage from './pages/BoardPage'
import ProfilePage from './pages/ProfilePage'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/board" element={<BoardPage />}></Route>
                    <Route path="/profile" element={<ProfilePage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
