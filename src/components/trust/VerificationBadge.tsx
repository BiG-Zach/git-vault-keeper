import { clsx } from 'clsx';

type VerificationBadgeVariant = 'compact' | 'full';

type VerificationBadgeProps = {
  className?: string;
  variant?: VerificationBadgeVariant;
};

const TRUSTMYPRODUCER_URL = 'https://bradfordinformedguidance.trustmyproducer.com';

const variantStyles: Record<VerificationBadgeVariant, {
  container: string;
  iconWrapper: string;
  label: string;
}> = {
  compact: {
    container:
      'inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-emerald-600 hover:border-emerald-500/60 hover:bg-emerald-500/20 focus-visible:ring-emerald-500',
    iconWrapper: 'w-6 h-6',
    label: 'text-xs font-semibold tracking-wide',
  },
  full: {
    container:
      'inline-flex items-center gap-3 rounded-2xl border border-emerald-500/50 bg-white px-4 py-3 text-slate-800 shadow-sm hover:shadow-md hover:border-emerald-400 focus-visible:ring-emerald-500',
    iconWrapper: 'w-8 h-8',
    label: 'text-base font-semibold',
  },
};

export default function VerificationBadge({ className, variant = 'compact' }: VerificationBadgeProps) {
  const { container, iconWrapper, label } = variantStyles[variant];

  return (
    <a
      href={TRUSTMYPRODUCER_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View Bradford Informed Guidance verification details"
      className={clsx(
        'group no-underline transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        container,
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={clsx(
          'flex items-center justify-center rounded-full bg-emerald-500 text-white transition-transform duration-200 group-hover:scale-105',
          iconWrapper,
        )}
      >
        <ShieldCheckIcon className={variant === 'full' ? 'w-5 h-5' : 'w-4 h-4'} />
      </span>
      <span className={label}>Licensed & Verified</span>
    </a>
  );
}

type ShieldCheckIconProps = {
  className?: string;
};

function ShieldCheckIcon({ className }: ShieldCheckIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 3.25c-.2 0-.4.04-.58.12l-6.5 2.71c-.47.2-.77.66-.77 1.17v4.63c0 4.6 3.06 8.94 7.35 10.11.16.04.33.04.49 0 4.29-1.17 7.35-5.5 7.35-10.11V7.25c0-.5-.3-.96-.77-1.16l-6.5-2.72A1.46 1.46 0 0012 3.25z"
        className="fill-current opacity-90"
      />
      <path
        d="M16.22 9.28a.75.75 0 00-1.06 0l-3.45 3.45-1.87-1.87a.75.75 0 10-1.06 1.06l2.4 2.4c.3.3.77.3 1.06 0l3.98-3.98a.75.75 0 000-1.06z"
        className="fill-white"
      />
    </svg>
  );
}
