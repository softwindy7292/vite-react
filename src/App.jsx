import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './route/Routes'
import HeaderNav from './components/HeaderNav'

function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderNav />
                <Routes>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={route.path || index}
                                path={route.path}
                                element={route.element}
                            ></Route>
                        )
                    })}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
