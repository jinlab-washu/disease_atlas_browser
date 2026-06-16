// import fetch from 'graphql-fetch'

import 'whatwg-fetch'
import queryString from 'query-string'
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { Searchbox } from '@broad/ui'

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 680px;
  border: 1px solid #bfc7d1;
  border-radius: 4px;
  background: white;
  overflow: hidden;
`

const CohortFilter = styled.select`
  width: 155px;
  padding: 0 10px;
  border: none;
  border-right: 1px solid #d1d5db;
  background: #f8fafc;
  color: #334155;
  font-size: 13px;
  outline: none;
`

const SearchboxWrapper = styled.div`
  flex: 1;

  input {
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
  }
`

const SearchButton = styled.button`
  width: 48px;
  border: none;
  background: #004225;
  color: white;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background: #005c35;
  }
`

const fetchSearchResults = query =>
  fetch('/api/', {
    body: JSON.stringify({
      query: `query Search($query: String!){
        searchResults(query: $query) {
          label
          value: url
        }
      }`,
      variables: { query },
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(response => response.data.searchResults)

export default withRouter(props => {
  const { history, location, match, ...rest } = props

  const currentParams = queryString.parse(location.search)
  const [selectedCohort, setSelectedCohort] = useState(currentParams.dataset || '')

  return (
    <SearchContainer>
      <CohortFilter
        value={selectedCohort}
        onChange={event => {
          setSelectedCohort(event.target.value)
        }}
      >
        <option value="">All cohorts</option>
        <option value="CHD">CHD</option>
        <option value="CP">CP</option>
        <option value="IPN">IPN</option>
      </CohortFilter>

      <SearchboxWrapper>
        <Searchbox
          key={history.location.pathname}
          {...rest}
          fetchSearchResults={fetchSearchResults}
          onSelect={url => {
            const nextParams = {}

            if (selectedCohort) {
              nextParams.dataset = selectedCohort
            }

            history.push({
              pathname: url,
              search: queryString.stringify(nextParams),
            })
          }}
          placeholder="Search by gene or variant"
        />
      </SearchboxWrapper>

      <SearchButton type="button">⌕</SearchButton>
    </SearchContainer>
  )
})