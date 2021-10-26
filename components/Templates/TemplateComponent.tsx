import styled from 'styled-components';

//components

//icons

type WithChildren<T = Record<string, unknown>> = T & {
  children?: React.ReactNode;
};
type ComponentProps = WithChildren<{
  pageTitle?: string;
}>;

export default function TemplateComponent(_props: ComponentProps): JSX.Element {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div``;
