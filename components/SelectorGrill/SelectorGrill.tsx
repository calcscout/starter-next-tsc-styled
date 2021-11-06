import Typography from 'components/Typography';
import styled from 'styled-components';

//redux
import { selectGrillId, openDialogGrills } from 'store/slices/grillsSlice';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'components/Button';

//components

//icons
import { MdOutlineArrowDropDown } from 'react-icons/md';

type WithChildren<T = Record<string, unknown>> = T & {
  children?: React.ReactNode;
};
type ComponentProps = WithChildren<{
  pageTitle?: string;
}>;

export default function SelectorGrill(_props: ComponentProps): JSX.Element {
  const dispatch = useDispatch();
  const grillId = useSelector(selectGrillId);

  const openDialog = () => {
    dispatch(openDialogGrills());
  };

  // const onGrillIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (+e.target.value >= 0 && +e.target.value <= 10000) {
  //     dispatch(changeGrillId(+e.target.value));
  //   }
  //   return;
  // };

  return (
    <Wrapper>
      <Typography className="no-wrap" variant="caption2" style={{ gridArea: 'caption' }}>
        Grill #
      </Typography>
      <Typography className="no-wrap" variant="body2" style={{ gridArea: 'comment' }}>
        (please select)
      </Typography>
      <Selector onClick={openDialog} style={{ gridArea: 'input' }}>
        {grillId}
        <MdOutlineArrowDropDown />
      </Selector>
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

const Selector = styled(Button)`
  background-color: var(--color-gray-700);
  border-radius: 12px;
  color: var(--color-white);
  height: 45px;
  margin: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* padding-left: 12px; */
  padding-right: 12px;
  font-size: 1rem;
  gap: 4px;
  cursor: pointer;
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
