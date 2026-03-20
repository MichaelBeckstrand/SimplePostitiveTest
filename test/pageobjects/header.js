import Page from './pageUrl.js';


class SecurePage extends Page {
  
    get referenceheader() {
        return $('div[class="header_label"]');
    }
}

export default new SecurePage();
