const { NodeVM } = require("vm2");
const log4js = require("log4js")
const util = require("../util/util")

const logger = log4js.getLogger("quote-engine")

const vm = new NodeVM({
    console: 'inherit',
    sandbox: {},
    require: {
        external: true,
        builtin: ['fs', 'path'],
        root: './',
        mock: {
            fs: {
                readFileSync: () => 'Nice try!'
            }
        }
    }
});

const cache = {}

function execute(script) {
    let source = script
    if (typeof script == "object") {
        const { language } = script
        if (language == "js") source = script.source
        else throw new Error(`Script type not executable: ${language}`)
    }
    //TODO: cache code execution
    if (typeof source != "string") {
        throw new Error(`Invalid source code type ${typeof source}`)
    }
    const hash = util.md5(source)
    const cached = cache[hash]
    if (cached) return cached
    const result = vm.run(source)
    cache[hash] = result
    return result
}

module.exports = { execute }