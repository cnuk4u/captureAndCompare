
const puppeteer = require('puppeteer');

function delay(timeout){
    return new Promise((resolve) => {
        setTimeout(resolve,timeout);
    });
}

(async () => {
        browser = await puppeteer.launch({
            headless: false
        });
        let prefix = 'master';
        page = await browser.newPage();
        await page.setViewport({ width: 1366, height: 768 });
        //await browser.resize({height: 768, width: 1366});

        let url = "http://localhost:8888/adminConsole/kdw";

        await page.goto(url);

        //await page.waitForSelector('#frmLogin_main_btnLogin');

        await delay(60000);

        let screenshotPath = './screenshots/'+prefix+'4c.png'

        await page.screenshot({path: screenshotPath});

        await page.close();
})();