export const uriByENV = (env) => {
  switch (env) {
    case 0:
      return '/'
    case 1:
      return '/zaky-app/'
    default:
      return '/'
  }
}