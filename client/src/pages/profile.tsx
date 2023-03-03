import { useEffect, useState } from 'react';

function Profile() {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  if (!initialRenderComplete) return null;
  else return <h1>Profile</h1>;
}

export async function getStaticProps() {
  return {
    props: {
      headerInfo: {
        heading: 'Profile',
        text: 'Heading description',
        buttonText: 'Click here',
        buttonLink: '#',
      },
      meta: {
        title: 'Profile',
        description: 'Profile',
      },
      current: 'profile',
    },
  };
}

export default Profile;
