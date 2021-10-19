import styled from 'styled-components';

type WithChildren<T = Record<string, unknown>> = T & {
  children?: React.ReactNode;
};
type MainLayoutProps = WithChildren<{
  pageTitle?: string;
}>;

export default function MainLayout(props: MainLayoutProps): JSX.Element {
  const { children } = props;

  return (
    <Container>
      <Header />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex; */
  align-items: center;
  justify-content: center;
`;

const Header = styled.nav``;

const Main = styled.main``;

const Footer = styled.footer``;
