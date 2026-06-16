import React from 'react'
import styled from 'styled-components'

import DocumentTitle from './DocumentTitle'
import InfoPage from './InfoPage'
import Link from './Link'
import Searchbox from './Searchbox'

const HomePage = styled(InfoPage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: none;
  min-height: 100vh;
  margin-top: 0;
  padding: 0;
  background-color: #ffffff;
`

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  padding: clamp(24px, 4vw, 40px) 20px clamp(36px, 5vw, 55px);
  background: radial-gradient(circle at center, #ffffff 0%, #f9f9fa 60%, #f9f9fa 100%);
`

const HeadingContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(740px, 100%);
  margin: 0 auto;
`

const Logo = styled.img`
  width: clamp(170px, 22vw, 260px);
  max-width: 55%;
  margin-bottom: clamp(4px, 1vw, 8px);
  background-color: #f9f9fa;
`

const MainHeading = styled.h1`
  margin: 0;
  color: #111;
  font-size: clamp(2.1em, 4vw, 3.1em);
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.5px;
`

const HeroText = styled.p`
  max-width: 650px;
  margin: clamp(10px, 2vw, 18px) 0 clamp(18px, 3vw, 28px);
  color: #555;
  font-size: clamp(0.95em, 1.5vw, 1.05em);
  line-height: 1.5;
  text-align: center;
`

const ExampleText = styled.p`
  margin-top: 12px;
  margin-bottom: 0;
  text-align: center;
`

const CohortSectionWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  padding: clamp(22px, 3vw, 32px) 20px 60px;
`

const CohortSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

const CohortTitle = styled.h2`
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
  color: #111;
  font-size: clamp(1.5em, 2.5vw, 2em);
`

const CohortDescription = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 30px;
`

const CohortGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(16px, 2vw, 24px);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const CohortCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: clamp(22px, 3vw, 28px) 24px;
  text-align: center;
  background: white;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
  }
`

const CohortName = styled.h2`
  margin-top: 0;
  color: #111;
`

const CohortText = styled.p`
  color: #666;
  font-size: 0.95em;
  min-height: 60px;
`

const CohortButton = styled(Link)`
  display: inline-block;
  margin-top: 12px;
  font-weight: bold;
  color: #111;
`

export default () => (
  <HomePage>
    <DocumentTitle />

    <HeroSection>
      <HeadingContainer>
        <Logo src="/disease_atlas_logo.png" alt="WashU Disease Atlas logo" />

        <MainHeading>WashU Disease Atlas</MainHeading>

        <HeroText>
          Explore genotype and variant associations across diverse cohorts
          <br />
          to advance understanding of human disease.
        </HeroText>

        <Searchbox width="100%" />

        <ExampleText>
          Examples - Gene:{' '}
          <Link preserveSelectedDataset={false} to="/gene/PKD1">
            PKD1
          </Link>
          , Variant:{' '}
          <Link preserveSelectedDataset={false} to="/variant/16-2090943-G-A">
            16-2090943-G-A
          </Link>
        </ExampleText>
      </HeadingContainer>
    </HeroSection>

    <CohortSectionWrapper>
      <CohortSection>
        <CohortTitle>Explore by Cohort</CohortTitle>

        <CohortDescription>
          Browse genetic and clinical data across available study cohorts.
        </CohortDescription>

        <CohortGrid>
          <CohortCard>
            <CohortName>CH</CohortName>
            <CohortText>
              Explore variants and gene associations related to congenital hydrocephalus.
            </CohortText>
            <CohortButton preserveSelectedDataset={false} to="/cohort/CHD">
              Explore →
            </CohortButton>
          </CohortCard>

          <CohortCard>
            <CohortName>CP</CohortName>
            <CohortText>
              Discover variants across rare disease in the cerebral palsy population.
            </CohortText>
            <CohortButton preserveSelectedDataset={false} to="/cohort/CP">
              Explore →
            </CohortButton>
          </CohortCard>

          <CohortCard>
            <CohortName>IPN</CohortName>
            <CohortText>
              Investigate genetic findings from idiopathic peripheral neuropathy studies.
            </CohortText>
            <CohortButton preserveSelectedDataset={false} to="/cohort/IPN">
              Explore →
            </CohortButton>
          </CohortCard>
        </CohortGrid>
      </CohortSection>
    </CohortSectionWrapper>
  </HomePage>
)
