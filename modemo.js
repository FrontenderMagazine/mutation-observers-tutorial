(function(d){
	var thismany = 2500,
	btn = d.querySelector('button'),
	demo = d.getElementById('demo'),
	clickhandler = function(){
		var i = 0,
		docfrag = d.createDocumentFragment(),
		n = thismany, p,
		sentence = 'Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития.';

		while( i < n ){
			p = (p !== undefined) ? p = p.cloneNode(false) : p = d.createElement('p');
			if(!p.textContent){ p.textContent = sentence; }
			docfrag.appendChild(p);
			i++;
		}
		demo.appendChild(docfrag);
	}
	btn.addEventListener('click',clickhandler,false);
})(document)