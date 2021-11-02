import { useState } from 'react';
import NextSeoHoc from 'components/NextSeoHoc';
import useTranslation from 'next-translate/useTranslation';
import MainLayout from 'components/MainLayout';

import styled from 'styled-components';
import Typography from 'components/Typography';
import Spacer from 'components/Spacer';
import Button from 'components/Button';

export default function Database(): JSX.Element {
  const { t, lang } = useTranslation('database'),
    og = {
      images: [
        {
          url: `https://apecessories.vercel.app/img/og/og-square-logo-text-slogan-${lang}.png`,
          width: 800,
          height: 800,
          alt: t('og-image-alt')
        }
      ]
    };

  const gap = 16;
  const [counter, setCounter] = useState(1);

  async function populateApeDatabase(apes: number) {
    const start = counter;
    for (let i = 0; i < apes; i++) {
      const response = await fetch('/api/populate-ape-database', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify({ ape_id: `${start + i}` }) // body data type must match "Content-Type" header
      });
      if (response.statusText !== 'Created') {
        break;
      }
      setCounter((prevCount) => prevCount + 1);
    }
    return;
  }

  async function clearApeDatabase() {
    try {
      await fetch('/api/clear-ape-database', {
        method: 'POST' // *GET, POST, PUT, DELETE, etc.
      });
      setCounter(1);
    } catch (e) {
      console.log(e);
    }
    return;
  }

  return (
    <>
      <NextSeoHoc
        description={t('description')}
        openGraph={og}
        title={t('title')}
        titleTemplate="%s"
      />

      <MainLayout pageTitle="Database Control Panel">
        <Wrapper>
          <Typography variant="h6" align="center">
            Database operations
          </Typography>
          <Spacer size={gap} />
          <StyledButton onClick={() => populateApeDatabase(1)}>Populate with 1</StyledButton>
          <Spacer size={gap} />
          <StyledButton onClick={() => populateApeDatabase(5)}>Populate with 5</StyledButton>
          <Spacer size={gap} />
          <StyledButton style={{ backgroundColor: 'red' }} onClick={clearApeDatabase}>
            CLEAR Database
          </StyledButton>
          <Spacer size={gap} />
          <Typography variant="body1" align="center">
            Counter: {counter}
          </Typography>
          <Spacer size={gap} />
          <StyledButton
            style={{ backgroundColor: 'var(--color-gray-400)' }}
            onClick={() => setCounter(1)}
          >
            Reset Counter
          </StyledButton>
          <Spacer size={gap} />
          <StyledButton onClick={() => populateApeDatabase(100)}>Populate with 100</StyledButton>
          <Spacer size={gap} />
          <StyledButton onClick={() => populateApeDatabase(1000)}>Populate with 1k</StyledButton>
          <Spacer size={gap} />
          <StyledButton onClick={() => populateApeDatabase(10000)}>Populate with 10k</StyledButton>
        </Wrapper>
      </MainLayout>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: '4px';
`;

const StyledButton = styled(Button)`
  border-radius: 9999px;
  width: 100%;
  max-width: 60vmin;
`;
