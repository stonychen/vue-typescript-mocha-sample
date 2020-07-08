#!/usr/bin/env node

const { get } = require('lodash')
const _get = get
const parseArgv = require('mochapack/lib/cli/argsParser/parseArgv').default
const { ensureGlob, extensionsToGlob } = require('mochapack/lib/util/glob')
const optionsFromParsedArgs = require('mochapack/lib/cli/argsParser/optionsFromParsedArgs').default
const createMochapack = require('mochapack').default

const exit = (lazy, code) => {
  if (lazy) {
    process.on('exit', () => {
      process.exit(code)
    })
  } else {
    process.exit(code)
  }
}

async function cli() {

  const cliArgs = parseArgv(process.argv.slice(2))

  const cliOptions = await optionsFromParsedArgs(cliArgs)

  const mochaWebpack = createMochapack(cliOptions)

  const extensions = _get(cliOptions.webpack.config, 'resolve.extensions', [
    '.js'
  ])
  const fallbackFileGlob = extensionsToGlob(extensions)
  const fileGlob =
    cliOptions.mochapack.glob != null
      ? cliOptions.mochapack.glob
      : fallbackFileGlob

  cliOptions.mocha.cli.files.forEach((f) =>
    mochaWebpack.addEntry(
      ensureGlob(f, cliOptions.mocha.cli.recursive, fileGlob)
    )
  )

  await Promise.resolve()

    .then(() => {
      if (cliOptions.mocha.cli.watch) {
        return mochaWebpack.watch()
      }
      return mochaWebpack.run()
    })
    .then((failures) => {
      exit(cliOptions.mocha.cli.exit, failures)
    })
    .catch((e) => {
      if (e) console.error(e.stack) // eslint-disable-line

      exit(cliOptions.mocha.cli.exit, 1)
    })
}

cli()
