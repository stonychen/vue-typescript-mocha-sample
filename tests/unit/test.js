const MemoryFS = require("memory-fs")
const webpack = require("webpack")
const path = require("path")
const Mocha = require("mocha")

const fs = new MemoryFS()
const mocha = new Mocha()

const testConfig = require('../../build/webpack.test.js')


const compiler = webpack(testConfig)

compiler.outputFileSystem = fs
compiler.run((err, stats) => {
  // 之后读取输出：
  const content = fs.readFileSync("...")

  mocha.addFile(
    path.join(testDir, file)
  )

  // Run the tests.
  mocha.run(function (failures) {
    process.exitCode = failures ? 1 : 0  // exit with non-zero status if there were failures
  })
})
