var clubs = {
	'leo_lagrange': {
		'position': [50.68821, 2.88919],
		'popup': 'Club de Loisirs Léo Lagrange, 82, Rue des Chauffours, Armentières, Lille, Nord, Hauts-de-France, Metropolitan France, 59280, France'
	},
	'littoral': {
		'position': [51.04552, 2.37975],
		'popup': 'Gymnase du Grand Large, Rue Le Montsoreau, Le Grand Large, Dunkerque, Dunkirk, Nord, Hauts-de-France, Metropolitan France, 59140, France'
	},
	'gravelines': {
		'position': [50.98342, 2.14206],
		'popup': 'Salle Frédéric Petit, 59820 Gravelines'
	},
	'sac_a_pof': {
		'position': [50.64076, 3.11522],
		'popup': 'Le Polyèdre, Avenue Rhin et Danube, Mons-en-Barœul, Lille, Nord, Hauts-de-France, Metropolitan France, 59370, France'
	},
	'deule': {
		'position': [50.63830, 3.03500],
		'popup': '108, Quai Géry Legrand, Bois Blancs, Lille, Nord, Hauts-de-France, Metropolitan France, 59000, France'
	},
	'conde': {
		'position': [50.45931, 3.58318],
		'popup': 'Salle Henri Bois, 103 Rue de la Chaussiette, 59163 Condé-sur-l\'Escaut, France'
	},
	'escalp': {
		'position': [50.26193, 3.95788],
		'popup': '1 Rue Camille Guérin, 59720 Louvroil, France'
	},
	'bou_d_brousse': {
		'position': [50.69158, 3.17827],
		'popup': 'Maison des associations, 24, Place de la Liberté, Roubaix, Lille, Nord, Hauts-de-France, Metropolitan France, 59100, France'
	},
	'escalamandinoise': {
		'position': [50.45094, 3.43414],
		'popup': 'Salle Maurice Hugot, Avenue des Platanes, Faubourg de Tournai, Saint-Amand-les-Eaux, Valenciennes, Nord, Hauts-de-France, Metropolitan France, 59230, France'
	},	
	'escapade': {
		'position': [50.58630, 3.11400],
		'popup': 'Espace sportif Teddy Riner, Rue d\'Iena, Zone Activités Les Tertiales, Lesquin, Lille, Nord, Hauts-de-France, Metropolitan France, 59810, France'
	},
	'vuc': {
		'position': [50.36609, 3.52574],
		'popup': 'Salle des Tertiales, Boulevard des Alliés, Valenciennes, Nord, Hauts-de-France, Metropolitan France, 59300, France'
	},
	'gravite': {
		'position': [50.62307, 3.13606],
		'popup': 'Climb Up, 51, Rue Trémière, Hôtel-de-Ville, Saint-Sauveur, Villeneuve-d\'Ascq, Lille, Nord, Hauts-de-France, Metropolitan France, 59650, France'
	}
};

var map = L.map('mapid').setView([50.64076, 3.11522], 8);
var marker = L.marker([50.64076, 3.11522]).addTo(map);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function openClub(evt, clubName) {
	var i, tabcontent, tablinks, resized;

	tabcontent = document.getElementsByClassName("card_club");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	if (document.getElementById("mapid").style.display != "flex"){
		document.getElementById("mapid").style.display = "flex";
		document.getElementById("base_presentation").style.display = "none";
		document.getElementById("base_logos").style.display = "none";
		resized = true;
	}

	document.getElementById(clubName).style.display = "flex";
	map.flyTo(clubs[clubName].position, 12);
	map.removeLayer(marker);
	marker = L.marker(clubs[clubName].position).addTo(map)
	if (resized){
		map.invalidateSize();
	}
//	.bindPopup(clubs[clubName].popup)
//	.openPopup();
}

function home (evt) {
	var i, tabcontent, tablinks, resized;

	tabcontent = document.getElementsByClassName("card_club");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	document.getElementById("mapid").style.display = "none";
	document.getElementById("base_presentation").style.display = "block";
	document.getElementById("base_logos").style.display = "flex";
}