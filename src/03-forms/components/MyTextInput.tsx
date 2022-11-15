import { ErrorMessage, useField } from "formik"

interface Props{
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    [x: string] : any;
}

export const MyTextInput = ({label, ...props}:Props) => {

    const [field] = useField(props); /// con meta se puede agregar estilos con los errores que proporciona el meta

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input {...field} {...props} />
            <ErrorMessage name={props.name} component="span"/>
        </>
    )
}
