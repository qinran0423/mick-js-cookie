
import { cookieget } from '../index'
describe('cookie', () => {
  it('happy path', () => {
    document.cookie = "name=mick"
    expect(cookieget('name')).toBe('mick')
  })
})

