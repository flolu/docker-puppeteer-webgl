import {createServer} from 'http'
import puppeteer from 'puppeteer'

const url = "https://webglfundamentals.org/webgl/webgl-load-obj-w-extents.html";

async function main() {
  const browser = await puppeteer.launch({
    args: [
      "--no-sandbox",
      "--headless",
      "--no-sandbox",
      "--mute-audio",
      "--hide-scrollbars",
      "--disable-web-security",
      "--use-gl=swiftshader",
      "--enable-webgl",
      "--ignore-gpu-blacklist",
    ],
    headless: true,
    dumpio: true,
    defaultViewport: { width: 400, height: 300 },
  });

  const page = await browser.newPage();

  await page.goto(url);
  await page.waitForNetworkIdle();

  await page.waitForSelector("#canvas");
  await page.waitFor(3000);

  const screenshot = await page.screenshot();
  console.log(screenshot);

  console.log((screenshot as Buffer).toString("base64"));
}

main();

const server = createServer((req, res) => res.end());
server.listen(8081);
