const cache = new Set<string>()
const map: Record<string, () => Promise<unknown>> = {
  '/about': () => import('@/pages/About'),
  '/services': () => import('@/pages/Services'),
  '/projects': () => import('@/pages/Projects'),
  '/team': () => import('@/pages/Team'),
  '/contact': () => import('@/pages/Contact'),
  '/soon': () => import('@/pages/Soon'),
}
export function prefetchRoute(path: string) {
  if (cache.has(path)) return
  map[path]?.().then(() => cache.add(path)).catch(() => {})
}
