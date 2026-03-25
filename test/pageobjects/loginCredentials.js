import pageUrl from './pageUrl.js';


class loginCredentials extends pageUrl {
    
    get typeUsername () {
        return $('#user-name');
    }

    get typePassword () {
        return $('#password');
    }

    get clickbutton () {
        return $('input[type="submit"]');
    }
    
    get hamburger () {
        return $('#react-burger-menu-btn')
    }
    
    get logOutlink () {
        return $('#logout_sidebar_link')
  }


    validUsers = ['standard_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];
    
    invalidUsers = ['standard_use','locked_out_use', 'problem_use', 'perfromance_glitch_use', 'error_use', 'visual_use'];

    
    async loginAndOut (username, password) {
        await this.typeUsername.setValue(username);
        await this.typePassword.setValue(password);
        await this.clickbutton.click();
        await this.hamburger.click();
        await this.logOutlink.click();
        
    }
    async login (username, password) {
        await this.typeUsername.setValue(username);
        await this.typePassword.setValue(password);
        await this.clickbutton.click();
      
        
    }
   

      async loopLogin() {
    for (let i = 0; i < this.validUsers.length; i++) {
        await this.loginAndOut(this.validUsers[i], 'secret_sauce');

        }
    
}
   

      async looplogin2() {
    for (let i = 0; i < this.invalidUsers.length; i++) {
        await this.login(this.invalidUsers[i], 'secret_sauce');

        }
    

}
}

export default new loginCredentials();
