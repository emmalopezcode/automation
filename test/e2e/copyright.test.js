const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
    await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('Test has Copyright', () => {
    test('copyright', async () => {
        const copyright = await page.$('#copyright');
        const text = await page.evaluate(copyright => copyright.innerText, copyright);
        expect(text).toBe("Copyright ©2021");
    }, timeout);
});