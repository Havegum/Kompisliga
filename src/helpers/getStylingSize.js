export default function getStylingSize (margin) {
  switch (margin.toLowerCase()) {
    case 'xl':
    case 'extra-large':
      return '2rem';

    case 'l':
    case 'large':
      return '1.5rem';

    default:
    case 'm':
    case 'medium':
      return '1rem';

    case 's':
    case 'small':
      return '.5rem';

    case 'xs':
    case 'extra-small':
      return '.25rem';

    case 'none':
      return 0;
  }
}
