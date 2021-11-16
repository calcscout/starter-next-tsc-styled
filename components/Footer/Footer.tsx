import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

// import { FaDiscord } from 'react-icons/fa';
// import { FaTwitter } from 'react-icons/fa';
import OpenseaLogo from '../../public/img/icons/openseLogo.svg';

type ComponentProps = {
  pageTitle?: string;
};

export default function Footer(_props: ComponentProps): JSX.Element {
  const router = useRouter();

  return (
    <Wrapper>
      <Apecessories>
        {`© ${new Date().getFullYear()}`} &nbsp;
        <span className="underlined" style={{ cursor: 'pointer' }}>
          {' '}
          <Link href="/about">
            <StyledLink>Apecessories </StyledLink>
          </Link>{' '}
        </span>
        &nbsp;
      </Apecessories>
      <SocialIcons>
        {/* <IconButton onClick={() => router.push('/socials')}>
          <FaDiscord />
        </IconButton>
        <IconButton onClick={() => router.push('/socials')}>
          <FaTwitter />
        </IconButton> */}
        <IconButton onClick={() => router.push('/socials')}>
          <OpenseaLogo />
        </IconButton>
      </SocialIcons>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100%;
  padding: 16px var(--main-container-padding);
  display: flex;
  gap: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  margin-top: auto;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 4px;
`;

const Apecessories = styled.div``;

// const LogoWrapper = styled.div`
//   /* flex: 1; */
//   display: flex;
//   align-items: center;
//   & svg {
//     height: 24px;
//     font-size: 30px;
//   }
// `;

const IconButton = styled.button`
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  margin-left: 0px;
  border-radius: 0;
  padding: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  color: inherit;
  text-align: center;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  font-size: 1.5rem;
  border-radius: 50%;
  overflow: visible;
  color: rgba(0, 0, 0, 0.54);
  -webkit-transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  /* margin-left: 12px; */
  color: inherit;
  padding: 0px;
  font-size: 1.75rem;
  & > svg {
    fill: var(--text-primary);
    height: 20px;
    font-size: 20px;
  }
  &:hover {
    /* background-color: var(--color-gray-800); */
  }
  &:hover > svg {
    fill: var(--text-secondary);
  }
`;

const StyledLink = styled.a``;
