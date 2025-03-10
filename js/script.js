const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// definizione elementi
const gridElement = document.querySelector('.team-grid');

renderObjHTML(gridElement, teamMembers);



function renderObjHTML(container, elements) {

  console.log(container);

  for (let i = 0; i < elements.length; i++) {

    const currentElement = elements[i];

    console.log(currentElement);

    container.innerHTML += `<div class="team-member">
        <img src="./${currentElement.img}" alt="${currentElement.name}">
        <div class="infos">
          <div class="name"><strong>${currentElement.name}</strong></div>
          <div class="role">${currentElement.role}</div>
          <a href="mailto: ${currentElement.email}" class="mail-address">${currentElement.email}</a>
        </div>
      </div>`
  }

}


// elemento HTML di riferimento
/* <div class="team-member">
        <img src="./img/female1.png" alt="Female">
        <div class="infos">
          <div class="name"><strong>Nome Cognome</strong></div>
          <div class="role">Ruolo</div>
          <a href="mailto: indirizzo@mail.com" class="mail-address">indirizzo@mail.com</a>
        </div>
      </div> */

// console.log(teamMembers);