import {FieldValues, UseFormRegister} from 'react-hook-form';

export type Props = {
    // Where to GET/POST the form data
    url: string

    // Function that returns a component that will display the inner form
    renderForm: (formProps: FormProps) => React.ReactNode
}

// All values that come from useForm, to be used in our custom forms
export type FormProps = {
    register: UseFormRegister<FieldValues>
    isSubmitting: boolean
    errors: { [error: string]: any }
}