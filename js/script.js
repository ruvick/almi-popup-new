// $(document).ready(function() {
//   $('#popup__btn').click( function(event){
//     event.preventDefault();
//     $('#popup__body').fadeIn(297,	function(){
//       $('#popup') 
//       .css('display', 'block')
//       .animate({opacity: 1}, 500);
//     });
//   });

//   $('#close, #popup').click( function(){
//     $('#popup').animate({opacity: 0}, 500, function(){
//       $(this).css('display', 'none');
//       $('#popup__body').fadeOut(297);
//     });
//   });
// });


// $(document).ready(function() {
//   $('#popup__btnS').click( function(event){
//     event.preventDefault();
//     $('#popup__bodyS').fadeIn(297,	function(){
//       $('#popupS') 
//       .css('display', 'block')
//       .animate({opacity: 1}, 198);
//     });
//   });

//   $('#close, #popupS').click( function(){
//     $('#popupS').animate({opacity: 0}, 198, function(){
//       $(this).css('display', 'none');
//       $('#popup__bodyS').fadeOut(297);
//     });
//   });
// });


function getFileName() {
    var file = document.getElementById('myfile').value;
    file = file.replace(/\\/g, '/').split('/').pop();
    document.getElementById('file-name').innerHTML = '' + file;

    var file = document.getElementById('myfiles').value;
    file = file.replace(/\\/g, '/').split('/').pop();
    document.getElementById('file-names').innerHTML = '' + file;
}













