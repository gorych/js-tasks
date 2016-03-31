(function() {

	function attachComponnets(elementSelector, elementInputSelector, elementBtnSelector, elementConstructor) {
		var elements = document.querySelectorAll(elementSelector);

		var i = 0;
		var len = elements.length;
		var currentElement;
		var element;
		var input;
		var btn;
		for ( ; i < len; i++) {
			currentElement = elements[i];

			input = currentElement.querySelector(elementInputSelector);
			btn = currentElement.querySelector(elementBtnSelector);
			
			element = new elementConstructor();
			element.attach(currentElement, input, btn);
		}
	}

	attachComponnets(".tag-field",".input-place",".clear-all", TagField);
		
}());