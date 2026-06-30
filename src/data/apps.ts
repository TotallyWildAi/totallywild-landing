export interface App {
  name: string
  tagline: string
  description: string
  /** Screenshot in /public/showcase — rendered 16:9, anchored to the top. */
  image: string
  tags: string[]
  /** Hosted live demo, if one is available. */
  liveUrl?: string
  /** Public source repository, if one is available. */
  source?: string
  /** No live demo yet — show a "Coming soon" badge in place of the live link. */
  comingSoon?: boolean
}

// Applications the build factory has produced. Append new entries here —
// the grid and cards scale automatically.
export const apps: App[] = [
  {
    name: 'Buyer Outreach',
    tagline: 'Strategic buyer outreach for sell-side M&A.',
    description:
      'A multi-mandate platform that enriches buyer data, sequences outreach, runs NDAs and tracks the pipeline — with a human-in-the-loop checkpoint at every send and every client-facing decision.',
    image: '/showcase/buyer-outreach.png',
    tags: ['M&A', 'Outreach', 'Human-in-the-loop'],
    liveUrl: 'https://buyer-outreach.eqr.vc/',
  },
  {
    name: 'xBullRadar',
    tagline: 'An AI-native investment analytics terminal.',
    description:
      'Real-time X sentiment, technical indicators and fundamentals fused into clear buy, sell and neutral verdicts — with a Grok-powered co-pilot that analyses holdings and rebalances by voice.',
    image: '/showcase/xbullradar.png',
    tags: ['FinTech', 'Analytics', 'AI co-pilot'],
    liveUrl: 'https://app.xbullradar.com',
  },
  {
    name: 'Graph Query Agent',
    tagline: 'Plain English to auditable graph queries.',
    description:
      'Turns plain-English questions into reviewed, parameterised Cypher over a Neo4j knowledge graph. Every value traces back to its source, and write operations wait for explicit approval.',
    image: '/showcase/graph-query-agent.png',
    tags: ['Knowledge graph', 'Neo4j', 'Auditable'],
    liveUrl: 'https://graphagent.eqr.vc/',
    source: 'https://github.com/TotallyWildAi/graph-query-agent',
  },
]
