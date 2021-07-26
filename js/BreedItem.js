function BreedItem(containerEl, breedData) {
	this._outerDiv = document.createElement('div'); 
	
	this._image = document.createElement('img'); 
	this._image.src = breedData.image.url;
	this._image.height = 50;
	this._outerDiv.append(this._image);
	
	console.log('breedData.name', breedData.name);
	this._title = document.createElement('div'); 
	this._title.innerText = breedData.name;
	this._outerDiv.append(this._title);
	
	this._subTitle = document.createElement('div'); 
	this._subTitle.innerText = breedData.temperament;
	this._outerDiv.append(this._subTitle);

	containerEl.append(this._outerDiv);
}