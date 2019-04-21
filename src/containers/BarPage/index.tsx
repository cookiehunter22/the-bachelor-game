import React from 'react';

import BarStepsWidget from '../BarStepsWidget';
import Map from '../Map';

interface Props {
  disableTabSwipe: (disable: boolean) => void;
}

const BarPage = ({disableTabSwipe}: Props) => {
  return (
    <React.Fragment>
      <Map disableTabSwipe={disableTabSwipe}/>
      <BarStepsWidget />
    </React.Fragment>
  );
}

export default BarPage;
