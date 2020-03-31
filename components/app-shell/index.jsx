import React from 'react';
import PropTypes from 'prop-types';

import DesktopShell from './desktop';
import Footer from './footer';
import MobileShell from './mobile';

/** @typedef {import('react')} React */

/**
 * @typedef {import('semantic-ui-react').MenuItemProps} MenuItemProps
 */

/**
 * @typedef {{
 *   children: React.ReactNode;
 *   heading: React.ComponentType<{ mobile?: boolean; }>;
 *   menuItems?: MenuItemProps[];
 *   secondaryMenuItems?: MenuItemProps[];
 * }} AppShellProps
 */

/**
 * The app shell used in the documentation.
 * @param {AppShellProps} props
 */
export default function AppShell({
  children,
  heading,
  menuItems,
  secondaryMenuItems,
}) {
  return (
    <div>
      <DesktopShell
        heading={heading}
        menuItems={menuItems}
        secondaryMenuItems={secondaryMenuItems}
      >
        {children}
        <Footer />
      </DesktopShell>
      <MobileShell
        heading={heading}
        menuItems={menuItems}
        secondaryMenuItems={secondaryMenuItems}
      >
        {children}
        <Footer />
      </MobileShell>
    </div>
  );
}

AppShell.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.func,
  menuItems: PropTypes.arrayOf(PropTypes.any),
  secondaryMenuItems: PropTypes.arrayOf(PropTypes.any),
};

AppShell.defaultProps = {
  children: null,
  heading: null,
  menuItems: null,
  secondaryMenuItems: null,
};
