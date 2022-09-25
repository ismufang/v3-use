import metadata from './index.json'

export const hookNames = metadata.map(i => i.name)
export { metadata }
