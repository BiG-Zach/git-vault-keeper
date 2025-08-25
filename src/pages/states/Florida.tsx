import React from 'react';
import StatePage, { US_STATES } from '../../components/StatePage';

const FloridaHealthInsurance: React.FC = () => {
  const floridaInfo = US_STATES['FL'];
  
  return <StatePage stateInfo={floridaInfo} />;
};

export default FloridaHealthInsurance;