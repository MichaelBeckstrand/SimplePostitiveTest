import Page from './pageUrl.js';


class LoginPage extends Page {
    
    get typeUsername () {
        return $('#user-name');
    }

    get typePassword () {
        return $('#password');
    }

    get clickbutton () {
        return $('input[type="submit"]');
    }

    
    async login (username, password) {
        await this.typeUsername.setValue(username);
        await this.typePassword.setValue(password);
        await this.clickbutton.click();
    }

    
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
