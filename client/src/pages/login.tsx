"use client";
import {useEffect, useState} from 'react';
import styles from './login.module.css'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const preventDefault = (f: any) => (e: any) => {
    e.preventDefault()
    f(e)
}

function Login() {
    const [initialRenderComplete, setInitialRenderComplete] = useState(false);
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Please enter email')
            .email('Please enter valid email'),
        password: Yup.string()
            .required('Please enter password'),
    });
    const formOptions = {resolver: yupResolver(validationSchema)};

    const {register, handleSubmit, reset, watch, formState} = useForm(formOptions);
    const {errors} = formState;
    const formData = watch();

    const onSubmit = preventDefault((event: any) => {
        event.preventDefault();
        console.log(formData);
        console.log('submitted')
        return false;
    })

    useEffect(() => {
        setInitialRenderComplete(true);
    }, []);
    if (!initialRenderComplete) return null;
    else
        // onsubmit="e => {e.preventDefault(); handleSubmit(onSubmit)}"
        return (
            <main className={styles.loginForm}>
                <form onSubmit={onSubmit}>
                    <h3>Sign in</h3>
                    <div className={styles.inputContainer}>
                        <label>Username </label>
                        <input type="email" {...register('email')}
                               className={`${errors.email ? styles.isInvalid : ''}`}/>
                        <div className={styles.invalidFeedback}>{errors.email?.message}</div>
                    </div>
                    <div className={styles.inputContainer}>
                        <label>Password </label>
                        <input type="password" {...register('password')}
                               className={`${errors.password ? styles.isInvalid : ''}`}/>
                        <div className={styles.invalidFeedback}>{errors.password?.message}</div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button type="submit">Sign in</button>
                    </div>
                </form>
            </main>
        )
}

export async function getStaticProps() {
    return {
        props: {
            headerInfo: {
                heading: 'Sign in',
                text: "Heading description",
                buttonText: "Click here",
                buttonLink: "#"
            },
            meta: {
                title: "Sign in",
                description: "Sign in"
            },
            current: 'login'
        }
    }
}

export default Login;