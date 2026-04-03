import { useUserState } from '../hooks/useUserState';
import { stateMetadata } from '../utils/stateMetadata';
import type { StateCodeSlug } from '../utils/stateMetadata';

const GENERIC_TEXT = 'Get Your Free Quote';

/**
 * Returns personalized CTA text for the given state code, or the generic
 * fallback if no state is detected or the code is unknown.
 */
function getStateCTAText(stateCode: string | null): string {
  if (!stateCode) return GENERIC_TEXT;
  const entry = stateMetadata[stateCode.toLowerCase() as StateCodeSlug];
  if (!entry) return GENERIC_TEXT;
  return `Get Your Free ${entry.name} Insurance Quote`;
}

/**
 * Renders a personalized CTA string based on the user's detected state.
 * Falls back to the generic text when no state is known.
 *
 * Usage:
 *   <StateCTA className="font-bold text-white" />
 */
interface StateCTAProps {
  className?: string;
}

export default function StateCTA({ className }: StateCTAProps) {
  const stateCode = useUserState();
  const text = getStateCTAText(stateCode);

  return <span className={className}>{text}</span>;
}
