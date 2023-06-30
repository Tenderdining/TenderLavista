
var borderTitles = document.querySelectorAll('.border_title');


console.log(borderTitles)

// إضافة حدث النقر إلى كل من العناصر
borderTitles.forEach(function(borderTitle) {
	borderTitle.addEventListener('click', function() {
		
		let menus = document.querySelectorAll('.menu') ;
		
		
		menus.forEach(function(menu) {
			menu.classList.remove('open')
		})

		
		// العثور على العنصر الأب وإضافة الكلاس المطلوب
		this.parentNode.classList.add('open');
		window.scrollTo(0, 0) ;
	});
});
