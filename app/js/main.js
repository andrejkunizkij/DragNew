/*$(document).ready(function() {

	var butn = document.getElementById('draggable-btn');

butn.onmousedown = function(e) { // 1. отследить нажатие

  // подготовить к перемещению
  // 2. разместить на том же месте, но в абсолютных координатах
  butn.style.position = 'absolute';
  moveAt(e);
  // переместим в body, чтобы мяч был точно не внутри position:relative
  document.body.appendChild(butn);

  butn.style.zIndex = 2; // показывать мяч над другими элементами

  // передвинуть мяч под координаты курсора
  // и сдвинуть на половину ширины/высоты для центрирования
  function moveAt(e) {
    butn.style.left = e.pageX - butn.offsetWidth / 2 + 'px';
    butn.style.top = e.pageY - butn.offsetHeight / 2 + 'px';
  }

  // 3, перемещать по экрану
  document.onmousemove = function(e) {
    moveAt(e);
  }

  // 4. отследить окончание переноса
  butn.onmouseup = function() {
    document.onmousemove = null;
    butn.onmouseup = null;
  }
}
	// for (var i = 0; i < 3; i++) {
	// 	$(".header-description").fadeOut(3000).fadeIn(3000);
	// }

});
// 	var butn = document.getElementById('draggable');

// butn.onmousedown = function(e) { // 1. отследить нажатие

//   // подготовить к перемещению
//   // 2. разместить на том же месте, но в абсолютных координатах
//   butn.style.position = 'absolute';
//   moveAt(e);
//   // переместим в body, чтобы мяч был точно не внутри position:relative
//   document.body.appendChild(butn);

//   butn.style.zIndex = 1000; // показывать мяч над другими элементами

//   // передвинуть мяч под координаты курсора
//   // и сдвинуть на половину ширины/высоты для центрирования
//   function moveAt(e) {
//     butn.style.left = e.pageX - butn.offsetWidth / 2 + 'px';
//     butn.style.top = e.pageY - butn.offsetHeight / 2 + 'px';
//   }

//   // 3, перемещать по экрану
//   document.onmousemove = function(e) {
//     moveAt(e);
//   }

//   // 4. отследить окончание переноса
//   butn.onmouseup = function() {
//     document.onmousemove = null;
//     butn.onmouseup = null;
//   }
// }
  */
// Для модального окна





let elem = document.querySelector('#draggable-btn');
let parent = document.querySelector('#screen-phone');

elem.addEventListener('dragend', function(event) {
  elem.style.top = event.pageY +'px';
  elem.style.left = event.pageX +'px';
});

parent.addEventListener('dragenter', function(event) {
   var dialog = document.getElementById('window');
    document.getElementById('show').onclick = function() {
        dialog.show();
    };
    document.getElementById('exit').onclick = function() {
        dialog.close();
    };
});



/*parent.addEventListener('dragover', function(event){
  event.preventDefault();
});

  parent.addEventListener('drop', function(event){
    this.appendChild(elem);
  })
*/
















