import statesDataset from '../../data/states.json';

export type StateCode =
  | 'AL' | 'AK' | 'AZ' | 'AR' | 'CA' | 'CO' | 'CT' | 'DE' | 'FL' | 'GA'
  | 'HI' | 'ID' | 'IL' | 'IN' | 'IA' | 'KS' | 'KY' | 'LA' | 'ME' | 'MD'
  | 'MA' | 'MI' | 'MN' | 'MS' | 'MO' | 'MT' | 'NE' | 'NV' | 'NH' | 'NJ'
  | 'NM' | 'NY' | 'NC' | 'ND' | 'OH' | 'OK' | 'OR' | 'PA' | 'RI' | 'SC'
  | 'SD' | 'TN' | 'TX' | 'UT' | 'VT' | 'VA' | 'WA' | 'WV' | 'WI' | 'WY' | 'DC';

export type Status = 'available' | 'comingSoon' | 'notAvailable';

type StatesData = {
  available: StateCode[];
  comingSoon: StateCode[];
};

const ALL_STATES: StateCode[] = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC'
];

const parsedStates: StatesData = {
    available: [ 'FL', 'MI', 'NC', 'AZ', 'GA', 'TX' ],
    comingSoon: [ 'OR', 'UT', 'NV', 'IA', 'SC', 'VA', 'OH' ]
};
const availableStates = new Set<StateCode>(parsedStates.available);
const comingSoonStates = new Set<StateCode>(parsedStates.comingSoon);

export const STATE_STATUS: Record<StateCode, Status> = ALL_STATES.reduce((acc, code) => {
  if (availableStates.has(code)) {
    acc[code] = 'available';
  } else if (comingSoonStates.has(code)) {
    acc[code] = 'comingSoon';
  } else {
    acc[code] = 'notAvailable';
  }
  return acc;
}, {} as Record<StateCode, Status>);

export function statusLabel(code: StateCode): string {
  const status = STATE_STATUS[code];
  if (status === 'available') return 'Available now';
  if (status === 'comingSoon') return 'Coming soon';
  return 'Not available';
}

export function statusClasses(status: Status): string {
  switch (status) {
    case 'available':
      return 'fill-emerald-500 hover:fill-emerald-600 shadow-[0_0_0_2px_rgba(16,185,129,0.25)]';
    case 'comingSoon':
      return 'fill-sky-500 hover:fill-sky-600 shadow-[0_0_0_2px_rgba(14,165,233,0.25)] animate-pulse';
    default:
      return 'fill-slate-300 hover:fill-slate-400 shadow-[0_0_0_2px_rgba(203,213,225,0.6)]';
  }
}

type LegendItem = { key: Status; label: string; dotClass: string };

const LEGEND_ITEMS: readonly LegendItem[] = [
  {
    key: 'available',
    label: 'Available now',
    dotClass: 'bg-emerald-500 ring-emerald-300',
  },
  {
    key: 'comingSoon',
    label: 'Coming soon',
    dotClass: 'bg-sky-500 ring-sky-300',
  },
  {
    key: 'notAvailable',
    label: 'Not available',
    dotClass: 'bg-slate-300 ring-slate-200',
  },
];

export function legend(): readonly LegendItem[] {
  return LEGEND_ITEMS;
}
