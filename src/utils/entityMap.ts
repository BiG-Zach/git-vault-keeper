// Bradford Informed Guidance | src/utils/entityMap.ts
// Centralized mapping of insurance entities to Schema.org standards
// Used to build a shared knowledge graph between our site, carriers, and government entities.

export interface EntityMap {
  name: string;
  id: string; // Persistent ID for Knowledge Graph
  sameAs: string[];
  type: string;
}

export const ENTITY_MAP: Record<string, EntityMap> = {
  'florida-blue': {
    name: 'Florida Blue',
    id: 'https://www.floridablue.com/#organization',
    sameAs: ['https://www.wikidata.org/wiki/Q5462095', 'https://www.floridablue.com/'],
    type: 'InsuranceCompany'
  },
  'ambetter': {
    name: 'Ambetter',
    id: 'https://www.ambetterhealth.com/#organization',
    sameAs: ['https://www.centene.com/'],
    type: 'InsuranceCompany'
  },
  'oscar-health': {
    name: 'Oscar Health',
    id: 'https://www.hioscar.com/#organization',
    sameAs: ['https://www.wikidata.org/wiki/Q25204646'],
    type: 'InsuranceCompany'
  },
  'cms': {
    name: 'Centers for Medicare & Medicaid Services',
    id: 'https://www.cms.gov/#organization',
    sameAs: ['https://www.wikidata.org/wiki/Q5060193'],
    type: 'GovernmentOrganization'
  },
  'nipr': {
    name: 'National Insurance Producer Registry',
    id: 'https://nipr.com/#organization',
    sameAs: ['https://www.wikidata.org/wiki/Q126607067'],
    type: 'Organization'
  }
};

/**
 * Returns a JSON-LD object for a linked entity.
 */
export function getLinkedEntity(key: string) {
  const entity = ENTITY_MAP[key];
  if (!entity) return null;
  return {
    '@type': entity.type,
    '@id': entity.id,
    name: entity.name,
    sameAs: entity.sameAs
  };
}
