import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './hero.module.scss';

/** @typedef {import('react')} React */

/**
 * @typedef {{
 *   children: React.ReactNode
 *   className?: string;
 * }} HeroProps
 */

/**
 * The Hero used throughout the documentation.
 * @param {HeroProps} props
 */
export default function Hero({ children, className }) {
  return (
    <div className={cn(styles.hero, className)}>
      {children}
    </div>
  );
}

Hero.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Hero.defaultProps = {
  children: null,
  className: null,
};
