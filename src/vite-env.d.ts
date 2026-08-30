interface ImportMetaEnv {
  readonly VITE_ORDERING_MODE?: 'mock' | 'square-sandbox'
  readonly VITE_ORDER_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
