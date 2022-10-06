const axios = require("axios")
const { load } = require("cheerio")


const transformResponse = (r) => r

const paramsSerializer = (params) => {
    // Sample implementation of query string building
    let result = '';
    Object.keys(params).forEach(key => {
        result += `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}&`;
    });
    return result.substring(0, result.length - 1);
}

function getOptions(options = {}) {
    const { headers = {} } = options
    const defaultHeaders = {
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
    return { transformResponse, headers: { ...defaultHeaders, ...headers, withCredentials: true } }
}

async function get(url, options = {}) {
    url = `${url}?${paramsSerializer(options.query)}`
    const response = await axios.get(url, getOptions(options))
    return response.data
}

async function getJson(url, options = {}) {
    const data = await get(url, options)
    const json = JSON.parse(data)
    return json
}

async function post(url, data, options = {}) {
    if (typeof data != 'string') {
        data = JSON.stringify(url)
    }
    const defaultHeaders = {
        "x-requested-with": "XMLHttpRequest",
        "accept": "*/*",
        "cache-control": "no-cache",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.0.0 Safari/537.36"
    }
    const headers = { ...defaultHeaders, ...options.headers }
    const response = await axios.post(url, data, { ...options, headers, transformResponse })
    return response
}

async function getHtml(url, options = {}) {
    const data = await get(url, options)
    const $ = load(data)
    return $
}
module.exports = {
    get, getJson, post, getHtml
}