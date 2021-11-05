import Typography from 'components/Typography';
import styled from 'styled-components';

//redux
import { selectApeId, changeApeId } from 'store/slices/grillsSlice';
import { useDispatch, useSelector } from 'react-redux';

//components

//icons

type WithChildren<T = Record<string, unknown>> = T & {
  children?: React.ReactNode;
};
type ComponentProps = WithChildren<{
  pageTitle?: string;
}>;

export default function SelectorApe(_props: ComponentProps): JSX.Element {
  const dispatch = useDispatch();
  const apeId = useSelector(selectApeId);

  const onApeIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value >= 0 && +e.target.value <= 10000) {
      dispatch(changeApeId(+e.target.value));
    }
    return;
  };

  return (
    <Wrapper>
      <Typography className="no-wrap" variant="caption2" style={{ gridArea: 'caption' }}>
        Bored Ape #
      </Typography>
      <Typography className="no-wrap" variant="body2" style={{ gridArea: 'comment' }}>
        (from 1 to 10k)
      </Typography>
      <Input
        value={apeId}
        onChange={onApeIdChange}
        placeholder="126"
        style={{ gridArea: 'input' }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 95px;
  grid-template-rows: 24px 24px;
  grid-template-areas:
    'caption input'
    'comment input';
`;

const Input = styled.input.attrs({
  type: 'number',
  name: 'ape-number',
  min: '1',
  max: '10000',
  step: '1'
})`
  background-color: var(--color-gray-700);
  border: 1px solid transparent;
  border-radius: 12px;
  color: var(--color-white);
  caret-color: var(--color-blue-main);
  height: 45px;
  margin: 0px;
  font-size: 1rem;
  outline: currentcolor none medium;
  padding: 7px 12px;
  transition: all 0.1s ease 0s;
  width: 100%;
  text-align: right;
  &:active,
  &:focus {
    border: 1px solid var(--color-gray-400);
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

// width: 90px;
//   font-size: 1rem;
//   font-family: IBM Plex Sans, sans-serif;
//   font-weight: 400;
//   line-height: 1.4375em;
//   background: rgb(243, 246, 249);
//   border: 1px solid #E5E8EC;
//   border-radius: 10px;
//   padding: 6px 10px;
//   color: #20262D;
//   transition: width 300ms ease;

//   &:hover {
//     background: #EAEEF3;
//     border-color: #E5E8EC;
//   }

//   &:focus {
//     outline: none;
//     width: 95px;
//     transition: width 200ms ease-out;
//   }

//   font-size: 18px;
//   padding: 10px;
//   align-self: center;
//   /* margin: 10px; */
//   background-color: var(--color-gray-700);
//   border: none;
//   height: 40px;
//   border-radius: 6px;
//   ::placeholder {
//     color: palevioletred;
//   }
