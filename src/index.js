(() => {
  // iife to not pollute global scope
  const headerLogo = document.querySelector('.js-team-logo');
  const heroImg = document.querySelector('.js-hero-img');
  const heroTeamName = document.querySelector('.js-team-name');
  const heroYear = document.querySelector('.js-year');

  fetch(
    'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=miami_marlins'
  )
    .then((response) => response.json())
    .then((data) => {
      const teamObj = data.teams[0];
      headerLogo.src = teamObj.strTeamLogo;
      heroImg.style.backgroundImage = `url(${teamObj.strTeamFanart4})`;
      heroTeamName.innerText = teamObj.strTeam;
      heroYear.innerText = teamObj.intFormedYear;
    });
})();
