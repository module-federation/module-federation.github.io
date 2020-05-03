/** @typedef {import('semantic-ui-react').MenuItemProps} MenuItemProps */

/**
 * @type {{
 *   menuItems: MenuItemProps[];
 *   secondaryMenuItems: MenuItemProps[];
 * }} */
const menuItems = {
  menuItems: [
    {
      href: '/',
      children: 'Home',
    },
    {
      href: '/blog/get-started',
      children: 'Get Started',
    },
    {
      href: 'https://medium.com/swlh/webpack-5-module-federation-a-game-changer-to-javascript-architecture-bcdd30e02669',
      children: 'Learn More',
      rel: 'noopener noreferrer',
      target: 'blank',
    },
    {
      href: '/blog',
      children: 'Blog'
    },
    {
      href: '/videos',
      children: 'Videos'
    }
  ],
  secondaryMenuItems: [
    {
      href: 'https://github.com/jacob-ebey/federated-libraries',
      children: 'GitHub',
      rel: 'noopener noreferrer',
      target: 'blank',
    },
  ],
};

export default menuItems;
