import React from 'react'
import SharpImage from '~/src/components/SharpImage'
import styled from 'styled-components'
import TagList from '~/src/components/TagList'
import DateWithIcon from '~/src/components/DateWithIcon'
import ForkLinkWithIcon from '~/src/components/ForkLinkWithIcon'

const H1 = styled.h1`
  font-family: "Patua One",sans-serif;
  font-size: 3rem;
  margin-bottom: 0;
  margin-top: 20px;
`

const smallFontSize = '1.6rem'

const MainUrlAnchor = styled.a`
  font-size: ${smallFontSize};
  display: block;
  margin-bottom: 20px;
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

const MetaDataContainer = styled.div`
  margin-bottom: 50px;
`

const IntroProjectSection = ({project: {frontmatter}}) => (
  <section>
    <div>
      <H1>
        {frontmatter.title}
      </H1>
      <MainUrlAnchor target='_blank' href={frontmatter.mainUrl}>
        {frontmatter.mainUrl}
      </MainUrlAnchor>
    </div>
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
          <ForkLinkWithIcon href={frontmatter.githubUrl} />
        </GithubUrlPar>
      )}
    </MetaDataContainer>
  </section>
)

export default IntroProjectSection
