import React from 'react';
import { css } from 'emotion';

const columnStyles = css`
  margin-left: 0;
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;

export default ({children}) => (
  <div className={columnStyles}>
    {children}
  </div>
);
