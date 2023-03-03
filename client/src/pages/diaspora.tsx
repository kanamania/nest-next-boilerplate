import { useEffect, useState } from 'react';

export default function Diaspora() {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  if (!initialRenderComplete) return null;
  else return <h1>Diaspora</h1>;
}
