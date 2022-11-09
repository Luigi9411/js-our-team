
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!

const eleContainer = document.querySelector('.container');

const arrPeople = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },
]

const eleCards = document.querySelector('.cards');
	
arrPeople.forEach(objPerson => eleCards.innerHTML += generateCard(objPerson));


function generateCard(obj) {
	return `
		<div class="card">
			<div class="content">
				<img src="img/${obj.foto}" alt="${obj.name}">
				<h2 class="fs-5">${obj.name}</h2>
				<h3 class="fs-6">${obj.role}</h3>
			</div>
		</div>
		`;
}


