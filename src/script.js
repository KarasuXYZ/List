document.addEventListener('DOMContentLoaded', function () {
	// Toggle expand/collapse, ensure only one expanded at a time
	const cards = document.querySelectorAll('.card');
	cards.forEach(card=>{
		card.addEventListener('click', ()=>{
			if(card.classList.contains('expanded')){
				card.classList.remove('expanded');
				return;
			}
			cards.forEach(c=>c.classList.remove('expanded'));
			card.classList.add('expanded');
			card.scrollIntoView({behavior:'smooth', block:'center'});
		});
	});
});
