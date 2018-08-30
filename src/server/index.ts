import setGlobalVariable from './setGlobalVariable'
setGlobalVariable()

import { spawn } from 'child_process'
import PATHS from './constants/paths'
import runRendererServer from './server/runRendererServer'
import { PORT } from '../../config'
import * as electron from 'electron'
import compileMain from './compileMain'
import { __DEV__ } from './store/global'

const { MAIN_OUTPUT_FILE } = PATHS

const electronPath: any = electron




console.log( '__DEV__', __DEV__ )
// runRendererServer()

// boolean `true` or `false` is used for debugging
// compileMain( () => true && spawn( electronPath, [ `--inspect=${ PORT }`, MAIN_OUTPUT_FILE ] ) )
