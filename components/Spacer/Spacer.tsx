//Spacer helps to create empty components with come height or width

import { CSSProperties } from 'styled-components';

type FunctionProps = {
  axis?: 'horizontal' | 'vertical';
  size: number;
  style?: CSSProperties;
};

export default function Spacer({ axis, size = 1, style }: FunctionProps): JSX.Element {
  const getHeight = () => {
    return axis === 'horizontal' ? 1 : size;
  };
  const getWidth = () => {
    return axis === 'vertical' ? 1 : size;
  };

  return (
    <span
      style={{
        ...style,
        display: 'block',
        width: `${getWidth()}px`,
        minWidth: `${getWidth()}px`,
        height: `${getHeight()}px`,
        minHeight: `${getHeight()}px`
      }}
    />
  );
}
