function TagFieldHelper() { }

TagFieldHelper.prototype.Constants = {
	SEPARATOR: ';', //semicolon btn code
	WEBKIT_SEPARATOR: 'º'
};

TagFieldHelper.prototype.Elements = {
	TAG: 'span',
	BTN: 'span'
};

TagFieldHelper.prototype.Css = {
	TAG: 'tag',
	CLEAR: 'clear'
};

TagFieldHelper.prototype.semicolonBtnPressed = function (ev) {
	var keyCode = ev.keyCode || ev.which;
	var symbol = String.fromCharCode(keyCode); 

	return (symbol === this.Constants.SEPARATOR) || (symbol === this.Constants.WEBKIT_SEPARATOR); 
};

TagFieldHelper.prototype.createTagElement = function(input) {
	var value = input.value;
	var len = value.length;

	if(len <= 1) {
		return null;
	}

	var tagText = value.substring(0, len - 1);

	var tag = document.createElement(this.Elements.TAG);
	tag.classList.add(this.Css.TAG);
	tag.textContent = tagText;

	return tag;
};

TagFieldHelper.prototype.createTagRemoveBtn = function () {
	var removeBtn = document.createElement(this.Elements.BTN);
	removeBtn.classList.add(this.Css.CLEAR);

	return removeBtn;
};