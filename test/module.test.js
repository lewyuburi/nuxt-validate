const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')

describe('loading module option', () => {
  describe('default', () => {
    let nuxt

    beforeAll(async () => {
      ({ nuxt } = (await setup(loadConfig(__dirname, 'default'))))
    }, 60000)

    afterAll(async () => {
      await nuxt.close()
    })

    test('response', async () => {
      const html = await get('/')
      expect(html).toContain('It works!')
    })
  })

  describe('set-rules', () => {
    let nuxt

    beforeAll(async () => {
      ({ nuxt } = (await setup(loadConfig(__dirname, 'set-rules'))))
    }, 60000)

    afterAll(async () => {
      await nuxt.close()
    })

    test('response', async () => {
      const html = await get('/')
      expect(html).toContain('It works!')
    })
  })

  describe('configure', () => {
    let nuxt

    beforeAll(async () => {
      ({ nuxt } = (await setup(loadConfig(__dirname, 'configure'))))
    }, 60000)

    afterAll(async () => {
      await nuxt.close()
    })

    test('response', async () => {
      const html = await get('/')
      expect(html).toContain('It works!')
    })
  })
})
