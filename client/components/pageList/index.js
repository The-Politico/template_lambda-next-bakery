import React from 'react';

import { component } from './styles.scss';

const PageList = (props) => (
  <div className={component}>
    <ul>
      {props.children}
    </ul>
  </div>
);

export default PageList;
