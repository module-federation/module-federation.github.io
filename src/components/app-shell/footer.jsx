import React from 'react';
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react';

export default function Footer() {
  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <Header inverted as="h4" content="More Awesomeness" />
              <List link inverted>
                <List.Item as="a" href="https://github.com/jacob-ebey">Peek My Github</List.Item>
                <List.Item as="a" href="https://jacob-ebey.js.org/resume">Check My Resume</List.Item>
                <List.Item as="a" href="https://jacob-ebey.js.org/about">Learn More About Me</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Looking To The Future
              </Header>
              <p>
                Staying up to date on technology and patterns are important, allowing me to work
                within your existing stack, or propose one that will scale far into the future.
              </p>
              <p>
                Created with&nbsp;
                <span role="img" aria-label="love">❤️</span>
                by: Jacob Ebey
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
}
