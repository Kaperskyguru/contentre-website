import { gql } from 'graphql-tag'
export const GET_PORTFOLIO_CONTENT = gql`
  query getPortfolioContent(
    $size: Int
    $skip: Int
    $filters: PortfolioContentFilters!
  ) {
    getPortfolioContent(size: $size, skip: $skip, filters: $filters) {
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

export const GET_PORTFOLIO_DETAIL = gql`
  query getPortfolioDetail($filters: PortfolioDetailsFilters!) {
    getPortfolioDetail(filters: $filters) {
      about
      coverImage
      job
      profileImage
      name
    }
  }
`
