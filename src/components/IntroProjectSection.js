import React from 'react'
import SharpImage from '~/src/components/SharpImage'
import styled from 'styled-components'
import TagList from '~/src/components/TagList'
import DateWithIcon from '~/src/components/DateWithIcon'
import ForkLinkWithIcon from '~/src/components/ForkLinkWithIcon'
import ResponsiveForkLink from '~/src/components/ResponsiveForkLink'

const H1 = styled.h1`
  font-family: "Patua One",sans-serif;
  font-size: calc(1vw + 2.7rem);
  margin: 0
`

const smallFontSize = 'calc(0.5vw + 1.3rem)'

const MainUrlAnchor = styled.a`
  font-size: ${smallFontSize};
  display: block;
  margin-bottom: 20px;
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

const minGridWidth = '900px'

const Wrapper = styled.section`
  margin-top: 30px;
  margin-bottom: 50px;
  ${props => props.featuredImage && `
    @media (min-width: ${minGridWidth}) {
      @supports (grid-area: auto) {
        display: grid;
        grid-gap: 40px;
        grid-template-columns: 2fr 1fr;
        grid-template-areas:
        'picture heading'
        'picture metadata';
      }
  `}
  }
`

const HeaderGroup = styled.section`
  @media (min-width: ${minGridWidth}) {
    @supports (grid-area: auto) {
      grid-area: heading;
    }
  }
`

const ImageAnchor = styled.a`
  :hover {
    filter: none;
  }

  @media (min-width: ${minGridWidth}) {
    max-width: 900px;
    display: block;
    @supports (grid-area: auto) {
      grid-area: picture;
    }
  }
`

const MetaDataContainer = styled.div`
  @media (min-width: ${minGridWidth}) {
    @supports (grid-area: auto) {
      grid-area: metadata;
      align-self: flex-end;
    }
  }
`

const IntroProjectSection = ({project: {frontmatter}}) => (
  <Wrapper featuredImage={frontmatter.featuredImage}>
    <HeaderGroup>
      <H1>
        {frontmatter.title}
      </H1>
      <MainUrlAnchor target='_blank' href={frontmatter.mainUrl}>
        {frontmatter.mainUrl}
      </MainUrlAnchor>
    </HeaderGroup>
    {frontmatter.featuredImage && (
      <ImageAnchor target='_blank' href={frontmatter.mainUrl}>
        <SharpImage imageData={frontmatter.featuredImage} alt='Featured Project Image' />
      </ImageAnchor>
    )}
    <MetaDataContainer>
      <StyledTagList tags={frontmatter.tags.split(' ')} />
      <StyledDateWithIcon date={frontmatter.date} />
      {frontmatter.githubUrl && (
        <GithubUrlPar>
          <ResponsiveForkLink href={frontmatter.githubUrl} />
        </GithubUrlPar>
      )}
    </MetaDataContainer>
  </Wrapper>
)

export default IntroProjectSection
