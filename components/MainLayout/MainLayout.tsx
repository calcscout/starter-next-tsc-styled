import styled from 'styled-components';

//Components
import Header from 'components/Header';
import Footer from 'components/Footer';

type WithChildren<T = Record<string, unknown>> = T & {
  children?: React.ReactNode;
};
type MainLayoutProps = WithChildren<{
  pageTitle?: string;
}>;

export default function MainLayout(props: MainLayoutProps): JSX.Element {
  const { children } = props;

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

const Main = styled.main`
  flex: 1;
  width: 100%;
  /* height: 100%; */
  padding: 16px var(--main-container-padding);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
