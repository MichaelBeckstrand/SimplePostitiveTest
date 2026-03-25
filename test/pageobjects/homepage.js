import pageUrl from './pageUrl.js';


class Homepage extends pageUrl {
  
    get referenceheader() {
        return $('div[class="header_label"]'); //"swag labs"
    }

     get referenceError() {
        return $('h3[data-test="error"]'); //"Epic sadface: Username and password do not match any user in this service"
    }
   get referenceError2() {
        return $('div[class="error-message-container error"]'); //"Epic sadface: Sorry, this user has been locked out."
    }
}


export default new Homepage();
 
