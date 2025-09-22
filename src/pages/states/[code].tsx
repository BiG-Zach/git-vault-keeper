import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../../components/SEO';
import StatePage from '../../components/StatePage'; // Assuming a generic StatePage layout component
import { getStateMetadata, StateMetadata } from '../../utils/stateMetadata';
import NotFoundPage from '../NotFound';

export default function DynamicStatePage() {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  let metadata: StateMetadata | undefined;

  if (code) {
    metadata = getStateMetadata(code);
  }

  useEffect(() => {
    // Redirect if the state code is invalid
    if (!metadata) {
      navigate('/404', { replace: true });
    }
  }, [metadata, navigate]);

  if (!metadata) {
    // Render nothing or a loader while redirecting, or render the 404 page directly
    return <NotFoundPage />;
  }

  return (
    <>
      <SEO
        title={`${metadata.name} | Health & Life Insurance Broker`}
        description={`Get expert insurance guidance in ${metadata.name}. Licensed broker specializing in affordable PPO health and life insurance plans for families and small businesses.`}
        path={`/states/${metadata.code}`}
      />
      <StatePage metadata={metadata} />
    </>
  );
}
