import GenericForm from '@/components/GenericForm';
import { FormProps } from '@/helpers/types';
import { NextPage } from 'next';
import styles from '@/styles/register.module.css';
import Loading from '@/components/Loading';

const Register: NextPage = () => {
  const fields = [
    { type: 'text', name: 'first_name', required: true, label: 'First Name' },
    { type: 'text', name: 'last_name', required: true, label: 'Last Name' },
    {
      type: 'phone',
      name: 'number',
      required: true,
      label: 'Phone',
      autoComplete: 'dada',
    },
    {
      type: 'email',
      name: 'email',
      required: true,
      label: 'Email',
      autoComplete: 'none',
    },
    { type: 'password', name: 'password', required: false, label: 'Password' },
  ];

  const renderForm = ({ register, errors, isSubmitting }: FormProps) => {
    return (
      <>
        {fields.map((field, index) => {
          return (
            <>
              <div key={index} className={styles.inputContainer}>
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  type={field.type}
                  autoComplete={field.autoComplete}
                  {...register(field.name, { required: field.required })}
                />
                <div className="error">{errors[field.name]?.message}</div>
              </div>
            </>
          );
        })}
        <div className={styles.buttonContainer}>
          <button disabled={isSubmitting}>
            {isSubmitting ? <Loading /> : 'Register'}
          </button>
        </div>
      </>
    );
  };
  return <GenericForm url="/auth/register" renderForm={renderForm} />;
};

export const getStaticProps = () => {
  return {
    props: {
      headerInfo: {
        heading: 'Register',
        text: 'Heading description',
        buttonText: 'Click here',
        buttonLink: '#',
      },
      meta: {
        title: 'Register',
        description: 'Register',
      },
      current: 'register',
    },
  };
};

export default Register;
