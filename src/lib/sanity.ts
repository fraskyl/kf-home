import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'g06xwn4w', // Paste your project ID
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Fast, cached responses
})

// TypeScript type for your homepage content
export interface HomepageContent {
  introText: string
  currentEmployer: string
  employerUrl: string
}