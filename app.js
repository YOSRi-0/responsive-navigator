const puppeteer = require("puppeteer");

(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		ignoreHTTPSErrors: true,
		args: ["--windo-size=320,667"],
	});
	const browser2 = await puppeteer.launch({
		headless: false,
		ignoreHTTPSErrors: true,
		args: ["--windo-size=768,1024"],
	});

	const mobilePage = await browser.newPage();
	const ipadPage = await browser2.newPage();

	const iPhone = puppeteer.devices["iPhone 5"];
	const iPad = puppeteer.devices["iPad"];

	await mobilePage.emulate(iPhone);
	await ipadPage.emulate(iPad);

	await mobilePage.goto();
	await ipadPage.goto();
})();
