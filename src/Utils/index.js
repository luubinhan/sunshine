export const getCategoryName = (slug) => {
  switch (slug) {
  case 'be-trai':
    return 'Bé Trai';
  case 'be-gai':
    return 'Bé Gái'
  default:
    return slug;
  }
}
