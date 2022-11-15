import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css'



export const FormikYupPage = () => {


    const { handleSubmit, errors, touched, getFieldProps} = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) =>{
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
            lastName: Yup.string().max(10, 'Debe tener 10 caracteres o menos').required('Requerido'),
            email: Yup.string().email('Email no valido').required('requerido')
        })
    })

    return (
        <div>
            <h1>Formik Yup Page</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstname">FirstName</label>
                <input type="text"  {...getFieldProps('firstName')} />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">LastName</label>
                <input type="text"  {...getFieldProps('lastName')}/>
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email Address</label>
                <input type="email"   {...getFieldProps('email')} />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
