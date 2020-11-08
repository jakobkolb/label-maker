import { assert } from 'chai'
import request from 'supertest'

import { createApp } from './index'

describe('Integration', () => {
    test('Hello world test', async () => {
        const response = await request(createApp()).get('/').send()
        assert.equal(response.text, 'Hello world')
    })
})
