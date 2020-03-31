import { Responsive } from 'semantic-ui-react';

export default function getWidth() {
  const isSSR = typeof window === 'undefined';

  return Number.parseFloat(
    isSSR
      ? Responsive.onlyTablet.minWidth.toString()
      // eslint-disable-next-line no-undef
      : window.innerWidth.toString(),
  );
}
