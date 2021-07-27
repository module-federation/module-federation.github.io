import Head from "next/head";
import config from "../data/config.json";
import AppShell from "../components/app-shell";
import navItems from "../nav-items";
import Hero from "../components/hero";
import {Button, Container, Divider, Header, Segment} from "semantic-ui-react";
import {container} from "./blog/blog.module.css";

export default function BlogPage({posts}) {
  return (
    <>
      <Head>
        <title>Module Federation Group | {config.title}</title>
      </Head>

      <AppShell
        menuItems={navItems.menuItems}
        secondaryMenuItems={navItems.secondaryMenuItems}
        heading={() => (
          <Hero>
            <Container text>
              <h1>Need Help? Contact Us</h1>
              <h2>We do workshops, support, and consulting</h2>
            </Container>
          </Hero>
        )}
      >
        <Segment style={{padding: "8em 0em"}} vertical>
          <Container text className={container}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdtJJoWQdvqECU9ZGKcV_7KngcALUt1Q8acum8mPDw3dybJLg/viewform?embedded=true"
              width="640" height="650" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
            </iframe>
          </Container>
        </Segment>
      </AppShell>
    </>
  )
}
