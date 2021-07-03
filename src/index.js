(() => {
  // iife to not pollute global scope
  const headerLogo = document.querySelector('.js-team-logo');
  const heroImg = document.querySelector('.js-hero-img');
  const teamName = document.querySelectorAll('.js-team-name');
  const heroYear = document.querySelector('.js-year');
  const teamDescription = document.querySelector('.js-team-desc');
  const stadiumImg = document.querySelector('.js-stadium-img');
  const teamManager = document.querySelector('.js-manager');
  const teamStadium = document.querySelector('.js-stadium');
  const teamCapacity = document.querySelector('.js-stadium-cap');

  fetch(
    'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=miami_marlins'
  )
    .then((response) => response.json())
    .then((data) => {
      const teamObj = data.teams[0];

      headerLogo.src = teamObj.strTeamLogo;
      heroImg.style.backgroundImage = `url(${teamObj.strTeamFanart4})`;
      teamName.forEach((node) => (node.innerText = teamObj.strTeam));
      heroYear.innerText = teamObj.intFormedYear;
      teamDescription.innerText = teamObj.strDescriptionEN;
      stadiumImg.style.backgroundImage = `url(${teamObj.strStadiumThumb})`;
      teamManager.innerText = teamObj.strManager;
      teamStadium.innerText = teamObj.strStadium;
      teamCapacity.innerText = teamObj.intStadiumCapacity;
    });
})();
