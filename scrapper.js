const puppeteer = require('puppeteer');

async function scrapeLogs(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('/html/body/div[1]/center/div[1]/h2[1]/a');
    const txt = await el.getProperty('textContent');
    const nombre = await txt.jsonValue();

    const [el2] = await page.$x('/html/body/div[1]/center/div[1]/table[1]/tbody/tr[6]/td');
    const txt1 = await el2.getProperty('textContent');
    const lastLogin = await txt1.jsonValue();

    const [el3] = await page.$x('/html/body/div[1]/center/div[1]/table[1]/tbody/tr[7]/td');
    const txt2 = await el3.getProperty('textContent');
    const status = await txt2.jsonValue();

    const [el4] = await page.$x('/html/body/div[1]/center/div[1]/table[1]/tbody/tr[5]/td');
    const txt3 = await el4.getProperty('textContent');
    const residencia = await txt3.jsonValue();

    const [el5] = await page.$x('/html/body/div[1]/center/div[1]/table[1]/tbody/tr[2]/td');
    const txt4 = await el5.getProperty('textContent');
    const profesion = await txt4.jsonValue();

    const [el6] = await page.$x('/html/body/div[1]/center/div[1]/table[1]/tbody/tr[3]/td');
    const txt5 = await el6.getProperty('textContent');
    const nivel = await txt5.jsonValue();

console.log(nombre,nivel,lastLogin,status,residencia,profesion)

}

scrapeLogs('https://mediviastats.info/characters.php?name=poninas');

scrapeLogs('https://mediviastats.info/characters.php?name=zvvdrak');

