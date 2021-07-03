(() => {
  // iife to not pollute global scope
  const logos = document.querySelectorAll('.js-team-logo');
  const heroImg = document.querySelector('.js-hero-img');
  const teamNames = document.querySelectorAll('.js-team-name');
  const heroYear = document.querySelector('.js-year');
  const teamDescription = document.querySelector('.js-team-desc');
  const stadiumImg = document.querySelector('.js-stadium-img');
  const teamManager = document.querySelector('.js-manager');
  const teamStadium = document.querySelector('.js-stadium');
  const teamCapacity = document.querySelector('.js-stadium-cap');
  const facebookLink = document.querySelector('.js-facebook');
  const twitterLink = document.querySelector('.js-twitter');
  const instagramLink = document.querySelector('.js-instagram');

  fetch(
    'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=miami_marlins'
  )
    .then((response) => response.json())
    .then((data) => {
      const teamObj = data.teams[0];

      logos.forEach((node) => (node.src = teamObj.strTeamLogo));
      heroImg.style.backgroundImage = `url(${teamObj.strTeamFanart4})`;
      teamNames.forEach((node) => (node.innerText = teamObj.strTeam));
      heroYear.innerText = teamObj.intFormedYear;
      teamDescription.innerText = teamObj.strDescriptionEN;
      stadiumImg.style.backgroundImage = `url(${teamObj.strStadiumThumb})`;
      teamManager.innerText = teamObj.strManager;
      teamStadium.innerText = teamObj.strStadium;
      teamCapacity.innerText = teamObj.intStadiumCapacity;
      facebookLink.href = `https://${teamObj.strFacebook}`;
      twitterLink.href = `https://${teamObj.strTwitter}`;
      instagramLink.href = `https://${teamObj.strInstagram}`;
    });
})();
