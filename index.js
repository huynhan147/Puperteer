const puppeteer = require('puppeteer');
describe('My First', () => {
    it('should lauch the browser', async () => {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('https://youtube.com')
        await page.waitForSelector('yt-formatted-string')
        await browser.close();
    })
})