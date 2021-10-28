import styled from 'styled-components';
import Link from 'next/link';

type ComponentProps = {
  pageTitle?: string;
};

export default function Footer(_props: ComponentProps): JSX.Element {
  return (
    <Wrapper>
      {`© ${new Date().getFullYear()}`} &nbsp;
      <span className="underlined" style={{ cursor: 'pointer' }}>
        {' '}
        <Link href="/">
          <StyledLink>Apecessories </StyledLink>
        </Link>{' '}
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

const StyledLink = styled.a``;
