import React from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react';

import AppShell from '../components/app-shell';
import Hero from '../components/hero';

import navItems from '../nav-items';

export default function HomePage() {
  return (
    <AppShell
      menuItems={navItems.menuItems}
      secondaryMenuItems={navItems.secondaryMenuItems}
      heading={() => (
        <Hero>
          <Container text>
            <h1>Module Federation</h1>
            <h2>
              start treating your component libraries as independently deployed services
            </h2>
            <Button as="a" primary size="huge" href="/blog/get-started" className="no-print">
              Get Started
              <Icon name="arrow right" />
            </Button>
          </Container>
        </Hero>
      )}
    >
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle" className="fb">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Keep Styles In-Sync
              </Header>
              <p>
                Say goodbye to divergent styles and duplicate components throughout parallel teams.
              </p>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Good Riddance NPM Packages
              </Header>
              <p>
                Gone are the days of updating each consuming application after making a change to
                a shared NPM package.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6} textAlign="center">
              <Image size="large" src="/federation-diagram.svg" style={{ margin: '0 auto 1rem auto' }} />
              <p>
                Teams can consume components at runtime instead of as part of their build pipeline
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button
                as="a"
                size="huge"
                rel="noopener noreferrer"
                target="_blank"
                href="https://indepth.dev/webpack-5-module-federation-a-game-changer-in-javascript-architecture/"
                className="no-print"
              >
                Lean More
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                &quot;A Microfrontend Revolution&quot;
              </Header>
              <p>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://dev.to/marais/webpack-5-and-module-federation-4j1i"
                >
                  Marais Rossouw
                </a>
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                &quot;A game-changer in JavaScript architecture&quot;
              </Header>
              <p>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://indepth.dev/webpack-5-module-federation-a-game-changer-in-javascript-architecture/"
                >
                  Zack Jackson
                </a>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: '2em' }}>
            Webpack 5 Federation For Dummies
          </Header>
          <p>
            Webpack 5 Module Federation aims to solve the sharing of modules in a distributed
            system, by shipping those critical shared pieces as macro or as micro as you would
            like. It does this by pulling them out of the the build pipeline and out of your apps.
          </p>
          <Button
            as="a"
            size="large"
            rel="noopener noreferrer"
            target="_blank"
            href="https://dev.to/marais/webpack-5-and-module-federation-4j1i"
            className="no-print"
          >
            Read More
          </Button>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            Case Studies
          </Divider>

          <Header as="h3" style={{ fontSize: '2em' }}>
            A Blog Utilizing This Websites Modules
          </Header>
          <p>
            Explore the source of a simple blog that utilizes the ContainerReferencePlugin to
            reference federated components from this website.
          </p>
          <Button
            as="a"
            size="large"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jacob-ebey/federated-blog"
            className="no-print"
          >
            Browse Code
          </Button>
        </Container>
      </Segment>
    </AppShell>
  );
}
