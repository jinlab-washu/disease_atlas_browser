import React from 'react'

import { ExternalLink, PageHeading } from '@broad/ui'
import styled from 'styled-components'

import DocumentTitle from './DocumentTitle'
import InfoPage from './InfoPage'


const TableStyled = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
`

const TableHeader = styled.th`
  border: 1px solid black;
  border-collapse: collapse;
`

const TableData = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
`


export default () => (
  <InfoPage>
    <DocumentTitle title="Contact" />
    <PageHeading>Contact</PageHeading>
  </InfoPage>
)
