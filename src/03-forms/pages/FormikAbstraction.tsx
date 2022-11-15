import {  Formik,  Form } from 'formik';
import * as Yup from 'yup';
import {MyCheckbox, MySelect, MyTextInput} from '../components'
import '../styles/styles.css'



export const FormikAbstraction = () => {


    return (
        <div>
            <h1>Formik Abstraction Page</h1>
            <Formik 
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values)=>{ console.log(values)}}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string().max(15, 'Debe tener 15 caracteres o menos').required('Requerido'),
                        lastName: Yup.string().max(10, 'Debe tener 10 caracteres o menos').required('Requerido'),
                        email: Yup.string().email('Email no valido').required('requerido'),
                        terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
                        jobType: Yup.string().notOneOf(['it-jr'],'Esta opcion no es permitida').required('Requerido')
                    })
                }
            >
                {
                    formik => (
                        <Form >
                            <MyTextInput label='firstName' name='firstName' placeholder='Marcelo'/>

                            <MyTextInput label='lastName' name='lastName' placeholder='Cariz'/>

                            <MyTextInput label='email' name='email' placeholder='Marcelocariz4@hotmail.com'/>


                            <MySelect label='jobType' name='jobType'>
                                    <option value="">Pick something</option>
                                    <option value="developer">developer</option>
                                    <option value="designer">designer</option>
                                    <option value="it-senior">it-senior</option>
                                    <option value="it-jr">it-jr</option>
                            </MySelect>

                            <MyCheckbox label='Terms and conditions' name='terms'/>


            
                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}
