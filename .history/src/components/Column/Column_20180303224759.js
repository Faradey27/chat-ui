import React from 'react';
import { css } from 'emotion';

const columnStyles = css`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export default ({children}) => (
  <div className={columnStyles}>
    {children}
  </div>
);
