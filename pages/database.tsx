import { useState } from 'react';
import NextSeoHoc from 'components/NextSeoHoc';
import useTranslation from 'next-translate/useTranslation';
import MainLayout from 'components/MainLayout';

import styled from 'styled-components';
import Typography from 'components/Typography';
import Spacer from 'components/Spacer';
import Button from 'components/Button';

export default function Database(): JSX.Element {
  const { t, lang } = useTranslation('pills'),
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
    console.log('Counter equal to:', counter);
    for (let i = 0; i < apes; i++) {
      const response = await fetch('/api/populate-ape-database', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify({ ape_id: `${counter}` }) // body data type must match "Content-Type" header
      });
      console.log('response:', response);
      setCounter(counter + 1);
    }
    return;
  }

  async function clearApeDatabase() {
    try {
      const response = await fetch('/api/clear-ape-database', {
        method: 'POST' // *GET, POST, PUT, DELETE, etc.
      });
      console.log('response:', response);
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

      <MainLayout pageTitle="Typography Viewer">
        <Wrapper>
          <Typography variant="h6" align="center">
            Populate Database with 10 apes
          </Typography>
          <Spacer size={gap} />
          <StyledButton onClick={() => populateApeDatabase(1)}>Populate with 1</StyledButton>
          <Spacer size={gap} />
          <StyledButton onClick={() => populateApeDatabase(5)}>Populate with 5</StyledButton>
          <Spacer size={gap} />
          <StyledButton onClick={clearApeDatabase}>CLEAR Database</StyledButton>
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
