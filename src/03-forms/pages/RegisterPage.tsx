import {  FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'




export const RegisterPage = () => {

    const {onChange, name, password, password2, email, formData, resetForm, isValidEmail} = useForm({name: '', email: '', password:'', password2:''})

    const onSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={onSubmit}>
                <input type="text" className={`${name.trim().length <= 0 && 'has-error'}`} name='name' placeholder="Name" value={name} onChange={onChange} />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}
                <input type="email" className={`${ !isValidEmail(email) && 'has-error'}`} name='email' placeholder="Email" value={email} onChange={onChange}/>
                { !isValidEmail(email) && <span>Email no es Valido</span>}
                <input type="password" name='password' placeholder="Password"  value={password} onChange={onChange}/>
                {password.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password.trim().length < 6 && password.trim().length > 0 && <span>La contrasena debe tener 6 caracteres</span>}


                <input type="password"  name='password2' placeholder="Repeat Password" value={password2} onChange={onChange}/>
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password  !== password2  && <span>Las contrasenas deben ser iguales</span>}


                <button type="submit">Create</button>
                <button type='button' onClick={resetForm}>Reset Form</button>
            </form>
        </div>
    )
}
