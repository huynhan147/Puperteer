const puppeteer =  require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

describe('My First', () => {
    it('should lauch the browser', async () => {
        const browser = await puppeteer.launch({executablePath: '/usr/bin/google-chrome-stable', headless: false, slowMo: 10, devtools: false});
        const page = await browser.newPage();
        await page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36');
        await page.goto('https://accounts.google.com/');
        await page.type('#identifierId', 'huynhanx6', {delay: 100});
        await page.waitFor(1000);
        await page.keyboard.press('Enter');
        await page.waitFor(5000);
        await page.type('input', 'huyyeunhan147', {delay: 100});
        await page.waitFor(1000);
        await page.keyboard.press('Enter');
        await page.waitFor(10000);
        await page.goto('http://youtube.com');
        await page.waitForSelector('#avatar-btn');
        await page.click('#avatar-btn');

       
        await page.keyboard.press('Enter');
    })
})