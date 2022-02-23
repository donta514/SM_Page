const axios = require("axios");
const puppeteer = require("puppeteer");
const fs = require("fs");

const scrape = async () => {
  console.log("browser initiated");
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']
    // devtools: true,
  });
  try {

    console.log("getting current tab");
    const [page] = await browser.pages();
    // const page = await browser.newPage()
    console.log("setting user agent");
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36"
    );

    //Instagram

    await page.goto("https://www.instagram.com/mediaresearchcenter/", {
      // waitUntil: "load",
      waitUntil: "networkidle0",
    });

    await page.waitForTimeout(500 + Math.floor((Math.random() * 1000)))
    console.log(await page.content())
    // await page.waitForSelector("header ul li:nth-child(2) span")

    const Instagram = await page.$eval(
      "header ul li:nth-child(2) span",
      (el) => el.innerHTML
    );
    // console.log("Instagram", Instagram);

    // console.log("beep boop - human wait");
    // await page.waitForTimeout(500 + Math.floor(Math.random() * 1000));

    //   Twitter

    await page.goto("https://twitter.com/theMRC", {
      waitUntil: "networkidle0",
    });

    const Twitter = await page.$eval(
      "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-13awgt0.r-18u37iz.r-1w6e6rj > div:nth-child(2) > a > span.css-901oao.css-16my406.r-18jsvk2.r-poiln3.r-b88u0q.r-bcqeeo.r-qvutc0 > span",
      (el) => el.innerHTML
    );
    // console.log("Twitter", Twitter);

    // console.log("beep boop - human wait");
    // await page.waitForTimeout(500 + Math.floor(Math.random() * 1000));

    //   Tiktok

    await page.goto("https://www.tiktok.com/@themrctv", {
      waitUntil: "networkidle0",
    });

    const Tiktok = await page.$eval(
      "strong[data-e2e=followers-count]",
      (el) => el.innerHTML
    );
    // console.log("Tiktok", Tiktok);

    // console.log("beep boop - human wait");
    // await page.waitForTimeout(500 + Math.floor(Math.random() * 1000));

    // YouTube

    await page.goto("https://www.youtube.com/user/MRCTVdotOrg", {
      waitUntil: "networkidle0",
    });

    const YouTube = await page.$eval("#subscriber-count", (el) => el.innerHTML);
    const YT = YouTube.match(/(\d+K)/)[1];

    // console.log("YouTube", YT);
    // await page.waitForTimeout(500 + Math.floor(Math.random() * 1000));

    //   Gettr

    await page.goto("https://gettr.com/user/themrc", {
      waitUntil: "networkidle0",
    });

    const Gettr = await page.$eval(
      "a:nth-child(3) > span.jss101",
      (el) => el.innerHTML
    );
    // console.log("Gettr", Gettr);
    // await page.waitForTimeout(500 + Math.floor(Math.random() * 1000));

    //   Rumble

    await page.goto("https://rumble.com/c/MRCTV", {
      waitUntil: "networkidle0",
    });

    const Rumble = await page.$eval(
      "span.subscribe-button-count",
      (el) => el.innerHTML
    );
    // console.log("Rumble", Rumble);
    // await page.waitForTimeout(500 + Math.floor(Math.random() * 1000));

    // Parler

    await page.goto("https://parler.com/theMRC", {
      waitUntil: "networkidle0",
    });

    const Parler = await page.$eval(
      "#spa > div > div.main > div.main__content > div > div.user-card > div.user-card__content > div.user-card__user-details > p.user-card__follow > span:nth-child(1) > strong",
      (el) => el.innerHTML
    );
    // console.log("Parler", Parler);
    // await page.waitForTimeout(500 + Math.floor(Math.random() * 1000));

    // Facebook

    await page.goto("https://www.facebook.com/mediaresearchcenter", {
      waitUntil: "networkidle0",
    });

    const FB = await page.$eval(
      "div > div:nth-child(1) > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.j83agx80.cbu4d94t.dp1hu0rb > div > div > div.bp9cbjyn.j83agx80.cbu4d94t.d2edcug0 > div.rq0escxv.d2edcug0.ecyo15nh.hv4rvrfc.dati1w0a.tr9rh885 > div > div.rq0escxv.l9j0dhe7.du4w35lb.hpfvmrgz.buofh1pr.g5gj957u.aov4n071.oi9244e8.bi6gxh9e.h676nmdw.aghb5jc5.o387gat7.qmfd67dx.rek2kq2y > div.lpgh02oy > div > div:nth-child(1) > div > div > div > div > div.sej5wr8e > div > div > ul > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.gs1a9yip.owycx6da.btwxx1t3.jb3vyjys.b5q2rw42.lq239pai.mysgfdmx.hddg9phg > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.cbu4d94t.d2edcug0.hpfvmrgz.rj1gh0hx.buofh1pr.g5gj957u.o8rfisnq.p8fzw8mz.pcp91wgn.iuny7tx3.ipjc6fyt > div > div > span",
      (el) => el.innerHTML
    );
    const Facebook = FB.match(/(\d+\.*\d*[MK])/)[0];
    // console.log("Facebook", Facebook);
    // await page.waitForTimeout(500 + Math.floor(Math.random() * 1000));

    // Clapper

    await page.goto("https://clapperapp.com/TheMRCTV", {
      waitUntil: "networkidle0",
    });

    const Clapper = await page.$eval(
      "a.user-stat-group:nth-child(2) > strong:nth-child(1)",
      (el) => el.innerHTML
    );
    // console.log("Clapper", Clapper); 

    // LinkedIn

    // await page.goto("https://www.linkedin.com/company/media-research-center", {
    //   waitUntil: "networkidle0",
    // });

    // const LinkedInScrape = await page.$eval(
    //   ".top-card-layout__first-subline",
    //   (el) => el.innerHTML
    // );
    // const match = LinkedInScrape.trim().match(/(\d,\d{3})\sfollowers$/);

    // const LinkedIn = match[1];

    // console.log("LinkedIn", LinkedIn);
    // await page.waitForTimeout(500 + Math.floor(Math.random() * 1000));

    const objToSave = {
      facebook: Facebook,
      twitter: Twitter,
      youtube: YT,
      instagram: Instagram,
      // linkedin: LinkedIn,
      tiktok: Tiktok,
      clapper: Clapper,
      parler: Parler,
      rumble: Rumble,
      gettr: Gettr,
    };

    console.log(objToSave);

    fs.writeFileSync("socialStats.json", JSON.stringify(objToSave, null, 2));
  }
  catch (e) {
    console.log('error scraping, how sad')
    console.error(e)
  }
  finally {
    await browser.close()
    return
  }
};
const doStuff = async () => {
  const done = await scrape()
  return 1
}
doStuff()

