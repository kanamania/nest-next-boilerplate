import { Props } from '@/helpers/types';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useConfirmRedirectIfDirty } from '@/helpers/useConfirmRedirectIfDirty';
import { fetcher, saveFormData } from '@/helpers/saveFormData';
import { toast, ToastContainer } from 'react-toastify';
import styles from '@/styles/register.module.css';
import Link from 'next/link';
import { Configs } from '../../configs';

function GenericForm({ url, renderForm }: Props) {
  // Fetch our initial form data
  // const { data, error } = useSWR(url, fetcher);
  const {
    register,
    reset,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors, isDirty },
  } = useForm();

  // Confirm redirects when isDirty is true
  useConfirmRedirectIfDirty(isDirty);

  // Submit handler which displays errors + success messages to the user
  const onSubmit = async (data: object) => {
    const response: any = await saveFormData(data, `${Configs.apiUrl}${url}`);

    if (response.code === 400) {
      // Validation error, expect response to be a JSON response {"field": "error message for that field"}
      const fieldToErrorMessage: { [fieldName: string]: string } =
        await response.json();
      for (const [fieldName, errorMessage] of Object.entries(
        fieldToErrorMessage,
      )) {
        setError(fieldName, { type: 'custom', message: errorMessage });
      }
    } else if (response.code === 201) {
      // successful
      toast.success('Successfully saved');
    } else {
      // unknown error
      toast.error(
        'An unexpected error occurred while saving, please try again',
      );
    }
  };

  // Sets the default value of the form once it's available
  // useEffect(() => {
  //   if (data === undefined) {
  //     return; // loading
  //   }
  //   reset(data);
  // }, [reset, data]);

  // Handle errors + loading state
  // if (error) {
  //   console.log(error);
  //   return (
  //     <div>An unexpected error occurred while loading, please try again</div>
  //   );
  // } else if (!data) {
  //   return <div>Loading...</div>;
  // }

  // Finally, render the form itself
  return (
    <main className={styles.registerForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderForm({ register, errors, isSubmitting })}
        <ToastContainer position="bottom-center" />
        <div className={styles.bottomLinks}>
          <Link href="/login">Have account? Go to Login</Link>
        </div>
      </form>
    </main>
  );
}

export default GenericForm;
