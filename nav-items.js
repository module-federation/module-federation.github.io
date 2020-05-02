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
      href: 'https://indepth.dev/webpack-5-module-federation-a-game-changer-in-javascript-architecture/',
      children: 'Learn More',
      rel: 'noopener noreferrer',
      target: 'blank',
    },
    {
      href: '/blog',
      children: 'Blog'
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
