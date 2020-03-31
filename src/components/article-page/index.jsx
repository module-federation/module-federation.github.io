import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Grid,
  Segment,
} from 'semantic-ui-react';

import AppShell from '../app-shell';
import Hero from '../hero';

import styles from './article-page.module.scss';

/** @typedef {import('react')} React */

/** @typedef {import('../app-shell').MenuItemProps} MenuItemProps */

/**
 * @typedef {{
 *   title: string;
 *   secondaryTitle?: string | null;
 *   menuItems?: MenuItemProps[];
 *   secondaryMenuItems?: MenuItemProps[];
 *   children: React.ReactNode;
 * }} ArticlePageProps
 */

/**
 * An article page component.
 * @param {ArticlePageProps} props
 */
export default function ArticlePage({
  children,
  title,
  secondaryTitle,
  menuItems,
  secondaryMenuItems,
}) {
  return (
    <AppShell
      menuItems={menuItems}
      secondaryMenuItems={secondaryMenuItems}
      heading={() => (
        <Hero>
          <Container text>
            <h1>{title}</h1>
            {secondaryTitle && (
              <h2>
                {secondaryTitle}
              </h2>
            )}
          </Container>
        </Hero>
      )}
    >
      <Segment className={styles.articlePageContent} vertical>
        <Grid container stackable verticalAlign="middle" className="fb">
          <Grid.Row>
            <Grid.Column width={16}>
              {children}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </AppShell>
  );
}

ArticlePage.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  secondaryTitle: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.any),
  secondaryMenuItems: PropTypes.arrayOf(PropTypes.any),
};

ArticlePage.defaultProps = {
  children: null,
  secondaryTitle: null,
  menuItems: null,
  secondaryMenuItems: null,
};
