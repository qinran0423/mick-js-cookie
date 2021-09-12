let defaultAttributes

function set(name, val, attributes) {
  if (typeof document === 'undefined') {
    return
  }

  attributes = Object.assign(attributes, defaultAttributes)

  name = encodeURIComponent(name)
    .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
    .replace(/[()]/g, escape)

  let stringifiedAttributes = ''
  for (const attributeName in attributes) {
    stringifiedAttributes += '; ' + attributeName

    stringifiedAttributes += '=' + attributes[attributeName].split(';')[0]
  }


  document.cookie = name + '=' + val + stringifiedAttributes
}


function get(name) {
  const cookies = document.cookie ? document.cookie.split('; ') : []
  const jar = {}
  for (let index = 0; index < cookies.length; index++) {
    const parts = cookies[index].split('=');
    const value = parts.slice(1).join('=')
    const found = decodeURIComponent(parts[0])
    jar[found] = value
  }
  return jar[name]
}

function init(converter, defaultAttributes) {
  defaultAttributes = defaultAttributes
  return {
    set,
    get
  }
}


export default init({}, { path: '/' })
