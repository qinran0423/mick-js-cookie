
export function cookieget(name) {
  const cookies = document.cookie ? document.cookie.split('; ') : []
  const jar = {}
  for (let index = 0; index < cookies.length; index++) {
    const parts = cookies[index].split('=');
    const value = parts.slice(1).join('=')
    jar[parts[0]] = value
  }
  return jar[name]
}