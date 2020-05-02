import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'

/** @typedef {import('.').AppShellProps} AppShellProps */

/**
 * The desktop app shell used in the documentation.
 * @param {AppShellProps} props
 */
export default function DesktopShell({
  children,
  className,
  heading: Heading,
  menuItems,
  secondaryMenuItems
}) {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const handleMenuClose = React.useCallback(() => setMenuOpen(false), [setMenuOpen])
  const handleMenuOpen = React.useCallback(() => setMenuOpen(true), [setMenuOpen])

  return (
    <div className={className}>
      <Visibility
        once={false}
        onBottomPassed={handleMenuOpen}
        onBottomPassedReverse={handleMenuClose}
      >
        <Segment
          inverted
          vertical
        >
          <Menu
            fixed={menuOpen ? 'top' : null}
            inverted={!menuOpen}
            pointing={!menuOpen}
            secondary={!menuOpen}
            size="large"
            className="no-print"
          >
            <Container>
              {menuItems && menuItems.map(({ ...props }, i) => {
                return (
                  <Menu.Item
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                    // eslint-disable-next-line
                    {...props}
                    as={props.href ? 'a' : 'button'}
                  />
                )
              })}

              <Menu.Item position="right">
                {secondaryMenuItems && secondaryMenuItems.map((props, i) => (
                  // @ts-ignore
                  <Button
                    // eslint-disable-next-line react/no-array-index-key
                    key={i}
                    // eslint-disable-next-line
                    {...props}
                    as={props.href ? 'a' : 'button'}
                    inverted={!menuOpen}
                    style={i > 0 ? { marginLeft: '0.5em' } : undefined}
                  />
                ))}
              </Menu.Item>
            </Container>
          </Menu>
          {Heading && <Heading />}
        </Segment>
      </Visibility>

      {children}
    </div>
  )
}

DesktopShell.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.func,
  menuItems: PropTypes.arrayOf(PropTypes.any),
  secondaryMenuItems: PropTypes.arrayOf(PropTypes.any),
}

DesktopShell.defaultProps = {
  children: null,
  heading: null,
  menuItems: null,
  secondaryMenuItems: null,
}
