import React from 'react';
import Router from 'next/router';

export default function GetStartedRedirect() {
  React.useEffect(() => {
    Router.replace('/blog/get-started');
  }, []);

  return <p>Redirecting....</p>;
}
