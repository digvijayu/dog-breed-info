function Grid(containerEl) {
	this._gridEl = document.createElement('div');
	this._gridEl.classList.add('my-grid');
	this._breedItems = [];
	containerEl.append(this._gridEl);
}

Grid.prototype = {
	populate: function (breeds) {
		this._breedItems = breeds.map((breed) => {
			return new BreedItem(this._gridEl, breed);
		})
	}
}