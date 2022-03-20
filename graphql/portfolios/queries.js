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
      portfolios {
        url
        title
        featuredImage
      }
    }
  }
`
