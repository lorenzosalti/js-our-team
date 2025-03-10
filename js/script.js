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

// invocazione della funzione generante
renderObjHTML(gridElement, teamMembers);


// FUNZIONI
// rendering di un array di oggetti
function renderObjHTML(container, elements) {

  let elementsHTML = '';

  // iterazione sugli elementi dell'array
  for (let i = 0; i < elements.length; i++) {

    const currentElement = elements[i];

    elementsHTML += createCardHTML(currentElement);

  }

  container.innerHTML = elementsHTML;

}

// html di un singolo oggetto
function createCardHTML(obj) {
  return `<div class="team-member">
        <img src="./${obj.img}" alt="${obj.name}">
        <div class="infos">
          <div class="name"><strong>${obj.name}</strong></div>
          <div class="role">${obj.role}</div>
          <a href="mailto: ${obj.email}" class="mail-address">${obj.email}</a>
        </div>
      </div>`
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