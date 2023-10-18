// console.log('Our Team');

// - creo un array di oggetti con nome, ruolo e foto
const teamMembers = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },
]

console.log(teamMembers);
// - recupero l'elemento dal DOM
const membersDomElement = document.getElementById('team-members');
console.log(membersDomElement);
// - vado a ciclare l'array per attraversarlo
for (let i = 0; i < teamMembers.length; i++) {
    const currentMembers = teamMembers[i];
// - stampo per ogni membro le informazioni
    console.log(currentMembers);
// - salvo i dati completi di ogni singolo membro in una variabile
  const allData = `${currentMembers.nome} ${currentMembers.ruolo} ${currentMembers.foto}`;
  console.log(allData);
// - vado a stampare le informazioni nel DOM
  membersDomElement.innerHTML += allData
}

