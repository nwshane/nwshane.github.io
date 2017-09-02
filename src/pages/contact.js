import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Ul = styled.ul`
  padding: 0;
`

const Li = styled.li`
  list-style-type: none;
`

const ContactPage = () => (
  <Layout>
    <main>
      <Ul>
        <Li>
          <a href='mailto:nathanwshane@gmail.com'>
            Email
          </a>
        </Li>
        <Li>
          <a href='https://github.com/nwshane'>
            Github
          </a>
        </Li>
        <Li>
          <a href='https://www.linkedin.com/in/nathan-shane-5834a534'>
            LinkedIn
          </a>
        </Li>
      </Ul>
    </main>
  </Layout>
)

export default ContactPage
