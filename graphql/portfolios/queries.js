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
      templateType
      templateSlug
      about
      coverImage
      job
      css
      html
      profileImage
      name
      socials {
        name
        link
      }
      contact {
        email
        phone
        address
      }
    }
  }
`

export const GET_ALL_PORTFOLIOS = gql`
  query getAllPortfolios(
    $size: Int
    $skip: Int
    $filters: AllPortfolioFiltersInput
  ) {
    getAllPortfolios(size: $size, skip: $skip, filters: $filters) {
      portfolios {
        id
        title
        userId
        type
        url
        description
        templateId
        createdAt
        updatedAt
        user {
          name
          bio
          username
          avatarURL
        }
      }
      meta {
        total
      }
    }
  }
`
