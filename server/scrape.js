const axios = require("axios");
const puppeteer = require("puppeteer");

const scrape = async () => {
  const browser = await puppeteer.launch({
    devtools: true,
  });
  const page = await browser.newPage();

  //Instagram 

/* 
  await page.goto("https://www.instagram.com/mediaresearchcenter/", {
    waitUntil: "networkidle0",
  });

  const followers = await page.$eval(
    "#react-root > section > main > div > header > section > ul > li:nth-child(2) > a > span",
    (el) => el.innerHTML
  );
  console.log(followers);

//   Twitter

  await page.goto("https://twitter.com/theMRC", {
    waitUntil: "networkidle0",
  });

  const followers = await page.$eval(
    "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div.css-1dbjc4n.r-13awgt0.r-18u37iz.r-1w6e6rj > div:nth-child(2) > a > span.css-901oao.css-16my406.r-18jsvk2.r-poiln3.r-b88u0q.r-bcqeeo.r-qvutc0 > span",
    (el) => el.innerHTML
  );
  console.log(followers);

//   Tiktok

  await page.goto("https://www.tiktok.com/@themrctv", {
    waitUntil: "networkidle0",
  });

  const followers = await page.$eval(
    "strong[data-e2e=followers-count]",
    (el) => el.innerHTML
  );
  console.log(followers);

//   Clapper

  await page.goto("https://clapperapp.com/TheMRCTV", {
    waitUntil: "networkidle0",
  });

  const followers = await page.$eval(
    "#__layout > div > div > div.container > div.user-stats > a:nth-child(2) > strong",
    (el) => el.innerHTML
  );
  console.log(followers);

  // YouTube

  await page.goto("https://www.youtube.com/user/MRCTVdotOrg", {
    waitUntil: "networkidle0",
  });

  const followers = await page.$eval("#subscriber-count", (el) => el.innerHTML);
  const match = followers.match(/(\d+K)/);

  console.log(match[1]);

  //   Gettr

  await page.goto("https://gettr.com/user/themrc", {
    waitUntil: "networkidle0",
  });

  const followers = await page.$eval(
    "#root > main > div > div > div > div > div > div > div.jss84 > div.jss83 > div.jss86 > div.jss95 > div.jss98 > a:nth-child(2) > span.tooltiptext",
    (el) => el.innerHTML
  );
  console.log(followers);

  //   Rumble

  await page.goto("https://rumble.com/c/MRCTV", {
    waitUntil: "networkidle0",
  });

  const followers = await page.$eval(
    "span.subscribe-button-count",
    (el) => el.innerHTML
  );
  console.log(followers);*/


//   Facebook

//   await page.goto("https://www.facebook.com/mediaresearchcenter", {
//     waitUntil: "networkidle0",
//   });

//   const followers = await page.$eval(
//     "div > div:nth-child(1) > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.j83agx80.cbu4d94t.dp1hu0rb > div > div > div.bp9cbjyn.j83agx80.cbu4d94t.d2edcug0 > div.rq0escxv.d2edcug0.ecyo15nh.hv4rvrfc.dati1w0a.tr9rh885 > div > div.rq0escxv.l9j0dhe7.du4w35lb.hpfvmrgz.buofh1pr.g5gj957u.aov4n071.oi9244e8.bi6gxh9e.h676nmdw.aghb5jc5.o387gat7.qmfd67dx.rek2kq2y > div.lpgh02oy > div > div:nth-child(1) > div > div > div > div > div.sej5wr8e > div > div > ul > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.gs1a9yip.owycx6da.btwxx1t3.jb3vyjys.b5q2rw42.lq239pai.mysgfdmx.hddg9phg > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.cbu4d94t.d2edcug0.hpfvmrgz.rj1gh0hx.buofh1pr.g5gj957u.o8rfisnq.p8fzw8mz.pcp91wgn.iuny7tx3.ipjc6fyt > div > div > span",
//     (el) => el.innerHTML
//   );
//   console.log(followers);
//   const match = followers.match(/(\d+K)/);

// 

  await page.goto("https://www.facebook.com/mediaresearchcenter", {
    waitUntil: "networkidle0",
  });

  const followers = await page.$eval(
    "div > div:nth-child(1) > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.j83agx80.cbu4d94t.dp1hu0rb > div > div > div.bp9cbjyn.j83agx80.cbu4d94t.d2edcug0 > div.rq0escxv.d2edcug0.ecyo15nh.hv4rvrfc.dati1w0a.tr9rh885 > div > div.rq0escxv.l9j0dhe7.du4w35lb.hpfvmrgz.buofh1pr.g5gj957u.aov4n071.oi9244e8.bi6gxh9e.h676nmdw.aghb5jc5.o387gat7.qmfd67dx.rek2kq2y > div.lpgh02oy > div > div:nth-child(1) > div > div > div > div > div.sej5wr8e > div > div > ul > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.gs1a9yip.owycx6da.btwxx1t3.jb3vyjys.b5q2rw42.lq239pai.mysgfdmx.hddg9phg > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.cbu4d94t.d2edcug0.hpfvmrgz.rj1gh0hx.buofh1pr.g5gj957u.o8rfisnq.p8fzw8mz.pcp91wgn.iuny7tx3.ipjc6fyt > div > div > span",
    (el) => el.innerHTML
  );
  console.log(followers);
  const match = followers.match(/(\d+K)/);

};

scrape();
