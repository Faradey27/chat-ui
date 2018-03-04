import React from 'react';
import { css } from 'emotion';

const columnStyles = css`
  margin-left: 0;
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 1px;
`;

export default ({children}) => (
  <div className={columnStyles}>
    {children}
  </div>
);
