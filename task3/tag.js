function Tag(parent) {
	this._parent = parent;
	this.removeSelf = this.removeSelf.bind(this);
}

Tag.prototype._parent;
Tag.prototype.element;
Tag.prototype.removeBtn;

Tag.prototype.attach = function(element, removeBtn) {
	if(!element || !removeBtn) {
		throw new Error("Invalid input parameters.");
	}

	this.removeBtn = removeBtn;
	this.element = element;

	this.removeBtn.addEventListener('click', this.removeSelf);
	this.element.appendChild(this.removeBtn);
};

Tag.prototype.detach = function() {
	this.removeBtn.removeEventListener('click', this.removeSelf);

	this._parent = null;
	this.removeBtn = null;
	this.element = null;
};

Tag.prototype.removeSelf = function() {
	this._parent.removeTag(this);
};