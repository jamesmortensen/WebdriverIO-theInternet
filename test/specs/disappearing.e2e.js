const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const DisappearingPage = require('../pageobjects/disappearing.page');

describe('Menu Button Tests', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('should count 4 buttons', () => {
        DisappearingPage.open();
        expect(DisappearingPage.homeElem).toBeExisting();
        expect(DisappearingPage.aboutElem).toBeExisting();
        expect(DisappearingPage.contactUsElem).toBeExisting();
        expect(DisappearingPage.portfolioElem).toBeExisting();
        expect(DisappearingPage.galleryElem).toBeExisting();
    });

    it
});


