declare module '*.css';
declare module '*.svg';

declare module '*.module.scss' {
  const styles: {
    [className: string]: string | undefined;
  };
  
  export default styles;
}

declare module '*.md' {
  import * as React from 'react';

  const MDXComponent: React.FC;

  export default MDXComponent;
}

declare module '*.mdx' {
  import * as React from 'react';

  const MDXComponent: React.FC;

  export default MDXComponent;
}
