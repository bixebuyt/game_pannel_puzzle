// RANDOM NUMBER //
function randomNumber() {
  var numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, '']
  ];  
  for(var i = 0; i < numbers.length; i++){
      for(var j = 0; j < numbers[i].length; j++){
           $('.list-numbers').append('<div class="item-number" id='+i+'>'+numbers[i][j]+'</div>');
      }
  }
}
// IMPORT NUMBER TO DIV //
function randAnswer() {
    var parent = $(".list-numbers");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}
function clickNumber() {
  setTimeout(function() {
   $('.item-number').click(function() {
      $('.list-numbers').find('#4').addClass('valuenull');
      var number_order_null = $('.valuenull').index();
      console.log(parseInt(number_order_null));

      var number_order = '';    
      var number_order = $(this).index();
      var number_this = parseInt($(this).text());
      console.log(number_this);
      if ( number_order === number_order_null - 1 || number_order === number_order_null + 1 || 
           number_order === number_order_null - 3 || number_order === number_order_null + 3 ) {
            //--------------------------------------//
            $('.valuenull').text(number_this);
            $('.valuenull').removeClass('valuenull');
            $(this).text('').addClass('valuenull');
            //--------------------------------------//
      }
   })
  
  },200)
}
// READY //
$(document).ready(function() {
  randomNumber();
  // randAnswer();
  clickNumber();
})