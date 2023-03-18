import { resolveRoute } from 'vite-plugin-ssr/routing'

// We use a Route Function to implement advanced routing logic
export default (pageContext) => {
  console.log(pageContext.urlPathname)
  if (pageContext.urlPathname === '/blogType' || pageContext.urlPathname === '/blogType/') {
    const name = 'anonymous'
    return { routeParams: { name } }
  }
  return resolveRoute('/blogType/@name', pageContext.urlPathname)
}
