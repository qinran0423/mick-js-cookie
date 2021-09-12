
import Cookies from '../index'
describe('cookie', () => {
  it('happy path', () => {
    document.cookie = "name=mick"
    expect(Cookies.get('name')).toBe('mick')
  })


  it('set', () => {
    Cookies.set('name', 'randy')
    expect(Cookies.get('name')).toBe('randy')
    Cookies.set('age', 11)
    expect(Cookies.get('age')).toBe('11')
    Cookies.set('%2%3', 1)
    expect(Cookies.get('%2%3')).toBe('1')
  })
})




