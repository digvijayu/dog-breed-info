(function (){
	const grid = new Grid(document.getElementById('grid-container'));

	fetch('https://api.thedogapi.com/v1/breeds')
	.then((response) => response.json())
	.then((breeds) => {
		const first10 = breeds.slice(0, 10);
		console.log(first10);
		grid.populate(first10);
	})
	.catch((error) => {
		alert('error occurred!')
	})
})()