import React from 'react';

import BlogPage from './blog/[slug]';

export default function GetStartedRedirect(props) {
  return <BlogPage {...props} />
}

GetStartedRedirect.getInitialProps = async () =>BlogPage.getInitialProps({
  query: {
    slug: 'get-started'
  },
});
