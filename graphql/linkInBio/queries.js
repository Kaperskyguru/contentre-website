import { gql } from 'graphql-tag'
export const GET_LINK_PROFILE = gql`
  query getLinkProfile($filters: LinkFiltersInput!) {
    getLinkProfile(filters: $filters) {
      name
      bio
      jobTitle
      avatar
      clients {
        name
        website
        profile
        icon
      }
      socials {
        name
        link
        icon
      }
      portfolios {
        title
        url
      }
    }
  }
`
