document.querySelectorAll(".card").forEach((card) => {
  // console.log(card)
  card.addEventListener("click", (e) => {
    console.log(card.children);
    const front = card.children[0];
    const back = card.children[1];
    console.log(gsap);
    console.log("hey");
    card.classList.toggle("active");

    // const duration = 1;
    // //create gsap timeline
    // let tlfwd = gsap.timeline();
    // tlfwd.to(front, { opacity: 0, duration });
    // tlfwd.to(back, { opacity: 1, duration }, `-=${duration}`);

    // let tlback = gsap.timeline();
    // tlback.to(front, { opacity: 0, duration });
    // tlback.to(back, { opacity: 1, duration }, `-=${duration}`);

    // if (card.classList.contains("active")) {
    //   console.log("deactivate");
    //   tlfwd.play();
    // } else {
    //   console.log("activate");
    //   tlback.play();
    // }
    const duration = .5
    if(card.classList.contains('active')){
        console.log('deactivate')
        gsap.to(front, {
            duration,
            opacity: 0
        })
        gsap.to(back, {
            duration,
            opacity: 1
        })
    }
    else{
        console.log('activate')
        gsap.to(back, {
            duration,
            opacity: 0
        })
        gsap.to(front, {
            duration,
            opacity: 1
        })

    }
  });
});

const getAndSetStats = async () => {
    const response = await fetch('/socialstats')
    const socialStats = await response.json()
    console.log(socialStats)
    document.getElementById('facebookCount').innerHTML = socialStats.facebook
    document.getElementById('twitterCount').innerHTML = socialStats.twitter
    document.getElementById('ytCount').innerHTML = socialStats.youtube
    document.getElementById('igCount').innerHTML = socialStats.instagram
    document.getElementById('linkedinCount').innerHTML = socialStats.linkedin
    document.getElementById('tiktokCount').innerHTML = socialStats.tiktok
    document.getElementById('parlerCount').innerHTML = socialStats.parler
    document.getElementById('rumbleCount').innerHTML = socialStats.rumble
    document.getElementById('gettrCount').innerHTML = socialStats.gettr
    document.getElementById('clapperCount').innerHTML = socialStats.clapper
}

getAndSetStats()
      
              