function TagField() {
	this._tags = [];
	this._helper = new TagFieldHelper();

	this.handleTextInput = this.handleTextInput.bind(this);
	this.removeAllTags = this.removeAllTags.bind(this);
}

TagField.prototype._element;
TagField.prototype._input;
TagField.prototype._tags;
TagField.prototype._removeAllBtn;

TagField.prototype._helper;

TagField.prototype.handleTextInput = function(ev) {
	var helper = this._helper;
	
	if(!helper.semicolonBtnPressed(ev)) {
		return;
	}

	var tagElem = helper.createTagElement(this._input);
	var tagBtn = helper.createTagRemoveBtn();
	
	if(tagElem && tagBtn){
		this.addTag(tagElem, tagBtn);
	}

	this._input.value = null;
};

TagField.prototype.addTag = function(tagElem, tagBtn) {
	this._element.insertBefore(tagElem, this._input);

	var tag = new Tag(this);
	tag.attach(tagElem, tagBtn);
	
	this._tags.push(tag);
};

TagField.prototype.removeTag = function(tag) {
	var index = this._tags.indexOf(tag);
	if(index >= 0){
		this._element.removeChild(tag.element);
		this._tags.splice(index, 1);
		
		tag.detach();
	}
};

TagField.prototype.removeAllTags = function(ev) {
	var i = 0;
	var tags = this._tags; 
	var len = tags.length;
	var tag;
	for (; i < len; i++) {
		tag = tags[i];
		this._element.removeChild(tag.element);
		tag.detach();
	}
	
	this._tags.splice(0, len);
};

TagField.prototype.attach = function(element, input, removeBtn) {
	if(!element || !input || !removeBtn) {
		throw new Error("Invalid input parameters.");
	}

	this._element = element;
	this._input = input;
	this._removeAllBtn = removeBtn;
	
	this._input.addEventListener('keyup', this.handleTextInput);
	this._removeAllBtn.addEventListener('click', this.removeAllTags);
};

TagField.prototype.detach = function(ev) {
	this._removeAllBtn.removeEventListener('click', this.removeAllTags);
	this._input.removeEventListener('keyup', this.handleTextInput);

	this._removeAllBtn = null;
	this._input = null;
	this._element = null;
};