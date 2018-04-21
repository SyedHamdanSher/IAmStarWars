
async function fetchStarship() {
	try{
  		const response = await fetch('https://swapi.co/api/people/')
  		const data = await response.json();
  		return data;
  	} catch (err) {
  		console.log("CAN'T Fetch", err);
  	}
}
 
const extractData = (promise) => Promise.resolve(promise).then(value => useData(value.results))
extractData(window.fetchStarship());

const useData = (value) => {
	people=value.filter(person => person.gender == 'female');
	createPage(people);
}

const createPage = (people) => {
	for (var i = 0; i < people.length; i++) {
		createBlock(people[i]);
	}

}
var bodyDiv = document.getElementById("parent");

const createBlock = (person) => {
		var div1 = document.createElement("div");
		div1.setAttribute("class",'bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5');
		var img1 = document.createElement("img");
		img1.setAttribute("alt","photo");
		img1.setAttribute("src",`https://robohash.org/${person.name}?200x200`);
		div1.appendChild(img1);
		var div2 = document.createElement("div");
		var h = document.createElement("h2");
		h.appendChild(document.createTextNode(`${person.name}`));
		var p = document.createElement("p");
		p.appendChild(document.createTextNode(`Height : ${person.height}`));
		var p1 = document.createElement("p");
		p1.appendChild(document.createTextNode(`Type : ${person.gender}`));
		div2.appendChild(h);
		div2.appendChild(p);
		div2.appendChild(p1);
		div1.appendChild(div2);
		bodyDiv.appendChild(div1);
}

