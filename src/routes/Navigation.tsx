import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';

import {FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage} from '../03-forms/pages'
export const Navigation = () => {
  return (
    // <Suspense fallback={<span>Cargando...</span>}>
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <h3>Logo react Xd</h3>
                    <ul >
                        <li><NavLink to={"/"}> Register </NavLink> </li>
                        <li><NavLink to={"/formik-basic"}> Formik Basic </NavLink> </li>
                        <li><NavLink to={"/formik-yup"}> Formik Yup </NavLink> </li>
                        <li><NavLink to={"/formik-components"}> Formik Components </NavLink> </li>
                        <li><NavLink to={"/formik-abstraction"}> Formik Abstraction </NavLink> </li>


                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<RegisterPage/>}/>
                    <Route path='/formik-basic' element={<FormikBasicPage/>}/>
                    <Route path='/formik-yup' element={<FormikYupPage/>}/>
                    <Route path='/formik-components' element={<FormikComponents/>}/>
                    <Route path='/formik-abstraction' element={<FormikAbstraction/>}/>



                </Routes>
            </div>
        </BrowserRouter>
    // </Suspense>
  )
}
