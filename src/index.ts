import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'
import { PLUGIN_NAME } from './constant'

export const unpluginFactory: UnpluginFactory<Options | undefined> = options => ({
  name: PLUGIN_NAME,
  transformInclude(id) {
    return id.endsWith('main.ts')
  },
  transform(code) {
    return code.replace('__UNPLUGIN__', `Hello Unplugin! ${options}`)
  },
})

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
