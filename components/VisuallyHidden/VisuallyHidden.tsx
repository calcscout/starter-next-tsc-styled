// Component from Josh Comeau course

import React from 'react';
const hiddenStyles: React.CSSProperties = {
  display: 'inline-block',
  position: 'absolute',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0
};

// Typescript
type WithChildren<T = Record<string, unknown>> = T & { children: React.ReactNode };
type FunctionProps = WithChildren<{
  // PageTitle?: string;
}>;

function VisuallyHidden({ children, ...delegated }: FunctionProps): JSX.Element {
  const [forceShow, setForceShow] = React.useState(false);
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (ev: KeyboardEvent) => {
          if (ev.key === 'Alt') {
            setForceShow(true);
          }
        },
        handleKeyUp = (ev: KeyboardEvent) => {
          if (ev.key === 'Alt') {
            setForceShow(false);
          }
        };
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keydown', handleKeyUp);
      };
    }
  }, []);
  if (forceShow) {
    return <>{children}</>;
  }
  return (
    <span style={hiddenStyles} {...delegated}>
      {children}
    </span>
  );
}
export default VisuallyHidden;
