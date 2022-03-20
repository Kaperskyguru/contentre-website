import { InMemoryCache } from '@apollo/client/core'
import { setContext } from 'apollo-link-context'

const uidGenerator = (id) => {
  if (!!id || id === 0) return id.toString()

  const block = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  return `${block()}${block()}-${block()}-${block()}-${block()}-${block()}${block()}${block()}`
}

export default (context) => {
  console.log(context.env.API_URL, 'haha')
  const headerLink = setContext((_, previousContext) => ({
    credentials: 'include',
    headers: {
      ...previousContext.headers,
      'x-from-path': process.client
        ? window.location.href
        : context.env.APP_URL,
    },
  }))

  return {
    cache: new InMemoryCache(),
    // typeDefs,
    // resolvers: {
    //   Mutation: {
    //     ...resolvers
    //   }
    // },
    httpEndpoint: context.env.API_URL ?? 'https://test.contentre.io/graphql',
    link: headerLink.concat(headerLink),
    connectToDevTools: context.env.NODE_ENV === 'development',
    httpLinkOptions: {
      headers: {
        'x-transaction-id': uidGenerator(),
      },
    },
  }
}
