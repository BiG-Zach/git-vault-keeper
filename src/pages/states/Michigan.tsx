import React from 'react';
import StatePage, { US_STATES } from '../../components/StatePage';

const MichiganHealthInsurance: React.FC = () => {
  const michiganInfo = US_STATES['MI'];
  
  return <StatePage stateInfo={michiganInfo} />;
};

export default MichiganHealthInsurance;