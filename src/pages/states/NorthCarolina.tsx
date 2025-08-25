import React from 'react';
import StatePage, { US_STATES } from '../../components/StatePage';

const NorthCarolinaHealthInsurance: React.FC = () => {
  const northCarolinaInfo = US_STATES['NC'];
  
  return <StatePage stateInfo={northCarolinaInfo} />;
};

export default NorthCarolinaHealthInsurance;