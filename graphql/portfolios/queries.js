import { gql } from 'graphql-tag'
export const GET_PORTFOLIO_CONTENT = gql`
  query getPortfolioContent(
    $size: Int
    $skip: Int
    $filters: PortfolioContentFilters!
  ) {
    getPortfolioContent(size: $size, skip: $skip, filters: $filters) {
      about
      coverImage
      profileImage
      name
      clients {
        id
        name
      }
      tags {
        id
        name
      }
      categories {
        id
        name
        color
      }
      contents {
        contents {
          url
          title
          featuredImage
          excerpt
          tags
          client {
            name
            profile
            icon
          }
          category {
            name
            color
          }
        }
        meta {
          total
        }
      }
    }
  }
`
