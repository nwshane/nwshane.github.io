import React from 'react'
import Layout from '~/src/components/Layout'
import HelmetTitle from '~/src/components/HelmetTitle'
import SharpImage from '~/src/components/SharpImage'
import styled from 'styled-components'
import TagList from '~/src/components/TagList'
import DateWithIcon from '~/src/components/DateWithIcon'
import ForkLinkWithIcon from '~/src/components/ForkLinkWithIcon'

const H1 = styled.h1`
  font-family: "Patua One",sans-serif;
  margin-bottom: 0;
`

const smallFontSize = '1.6rem'

const MainUrl = styled.p`
  font-size: ${smallFontSize};
  margin-top: 3px;
`

const ImageAnchor = styled.a`
  :hover {
    filter: none;
  }
`

const GithubUrlPar = styled.span`
  font-size: ${smallFontSize};
  font-weight: 300;
  display: block;
`

const StyledDateWithIcon = styled(DateWithIcon)`
  font-size: ${smallFontSize};
  font-weight: 300;
  display: block;
`

const StyledTagList = styled(TagList)`
  font-weight: 300;
  font-size: ${smallFontSize};
`

const ProjectTemplate = ({data}) => {
  const project = data.markdownRemark
  const {frontmatter} = project

  return (
    <Layout>
      <HelmetTitle title={frontmatter.title} />
      <H1>
        {frontmatter.title}
      </H1>
      <MainUrl>
        <a target='_blank' href={frontmatter.mainUrl}>
          {frontmatter.mainUrl}
        </a>
      </MainUrl>
      {frontmatter.featuredImage && (
        <ImageAnchor target='_blank' href={frontmatter.mainUrl}>
          <SharpImage imageData={frontmatter.featuredImage} alt='Featured Project Image' />
        </ImageAnchor>
      )}
      <StyledTagList tags={frontmatter.tags.split(' ')} />
      <StyledDateWithIcon date={frontmatter.date} />
      {frontmatter.githubUrl && (
        <GithubUrlPar>
          <ForkLinkWithIcon href={frontmatter.githubUrl} />
        </GithubUrlPar>
      )}
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </Layout>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        date(formatString: "MMMM D, YYYY")
        tags
        mainUrl
        githubUrl
        featuredImage {
          childImageSharp {
            responsiveSizes(maxWidth: 1440) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`
