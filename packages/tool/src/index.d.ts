interface FetchOptions {
  format: 'svg',
  outputDir: string
  scale: string
  figmaToke: string
  figmaFileUrl: string
  componentTpl: string
}

declare function fetch(params:FetchOptions):Promise<void>