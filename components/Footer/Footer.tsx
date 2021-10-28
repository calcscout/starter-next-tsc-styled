import styled from 'styled-components';

type ComponentProps = {
  pageTitle?: string;
};

export default function Footer(_props: ComponentProps): JSX.Element {
  return (
    <Wrapper>
      {`© ${new Date().getFullYear()}`} &nbsp;
      <span className="underlined" style={{ cursor: 'pointer' }}>
        {' '}
        Apecessories{' '}
      </span>
      &nbsp;
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
