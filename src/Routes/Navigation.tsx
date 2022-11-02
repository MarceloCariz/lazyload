import {BrowserRouter, Route, Routes, NavLink, Navigate} from 'react-router-dom'
import {Suspense} from 'react';
import { routes } from './routes';
import logo from '../logo.svg'
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
export const Navigation = () => {
  return (
    // <Suspense fallback={<span>Cargando...</span>}>
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo} alt="react-logo" />
                </nav>
                <Routes>
                    <Route path='/' element={<ShoppingPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    // </Suspense>
  )
}
