'use client';
import { useEffect, useState } from 'react';
import styles from '@/styles/login.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link';

function Login() {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Please enter email')
      .email('Please enter valid email'),
    password: Yup.string().required('Please enter password'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, watch, formState } = useForm(formOptions);
  const { errors } = formState;
  const formData = watch();

  const onSubmit = () => {
    console.log(formData);
    console.log('submitted');
    return false;
  };

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  if (!initialRenderComplete) return null;
  else
    return (
      <main className={styles.loginForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>Sign in</h3>
          <div className={styles.inputContainer}>
            <label>Username </label>
            <input
              type="email"
              {...register('email')}
              className={`${errors.email ? styles.isInvalid : ''}`}
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Password </label>
            <input
              type="password"
              {...register('password')}
              className={`${errors.password ? styles.isInvalid : ''}`}
            />
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit">Sign in</button>
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/register">Create account now</Link>
            <Link href="/forgot">Forgot Password?</Link>
          </div>
        </form>
      </main>
    );
}

export const getStaticProps = () => {
  return {
    props: {
      headerInfo: {
        heading: 'Sign in',
        text: 'Heading description',
        buttonText: 'Click here',
        buttonLink: '#',
      },
      meta: {
        title: 'Sign in',
        description: 'Sign in',
      },
      current: 'login',
    },
  };
};

export default Login;
