const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const GalleryPage = require('../pageobjects/gallery.page');
const galleryPage = new GalleryPage();

describe.only('Menu Button Tests', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('should navigate to the gallery page', () => {
        galleryPage.open();

    })

    it('should verify image is present', () => {

    });

    it
});


