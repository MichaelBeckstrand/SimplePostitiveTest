import { expect } from '@wdio/globals'
import loginCredentials from '../pageobjects/loginCredentials.js'
import homepage from '../pageobjects/homepage.js'



describe('multiple user login positive test', () =>  {                            //postitive login test
    it('should log in with valid and invalid credentials', async () => {
    await loginCredentials.open();
    await loginCredentials.loopLogin();
    })
})

describe('locked out error test', () => {
    it('should show locked out with valid credentials', async () => {             // locked out test 
        await loginCredentials.open()

        await loginCredentials.login('locked_out_user', 'secret_sauce')
        await expect(homepage.referenceError2).toBeExisting()
        await expect(homepage.referenceError2).toHaveText(
            expect.stringContaining('Epic sadface: Sorry, this user has been locked out.'))
    })
})

describe('multiple user login negative test', () =>  {                           //negative login test
    it('should try to log in with invalid credentials', async () => {
    
    
        await loginCredentials.open();
    await loginCredentials.looplogin2();
    await expect(homepage.referenceError).toBeExisting()
        await expect(homepage.referenceError).toHaveText(
            expect.stringContaining('Epic sadface: Username and password do not match any user in this service'))

       })
})









