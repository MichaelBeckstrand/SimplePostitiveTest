import { expect } from '@wdio/globals'
import loginCredentials from '../pageobjects/loginCredentials.js'
import header from '../pageobjects/header.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await loginCredentials.open()

        await loginCredentials.login('standard_user', 'secret_sauce')
        await expect(header.referenceheader).toBeExisting()
        await expect(header.referenceheader).toHaveText(
            expect.stringContaining('Swag Labs'))
    })
})

