import styled from 'styled-components';

//components
import IconButton from 'components/IconButton';

//icons
import { SiSurveymonkey } from 'react-icons/si';

//components

type ComponentProps = {
  pageTitle?: string;
};

export default function Footer(_props: ComponentProps): JSX.Element {
  return (
    <Wrapper>
      © 2021 &nbsp;<span className="underlined"> Apecessories </span>&nbsp;
      <IconButton style={{ fontSize: '20px' }}>
        <SiSurveymonkey />
      </IconButton>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100%;
  padding: 16px var(--main-container-padding);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  margin-top: auto;
`;
