$(function(){
  var input;
  $("#formOne").submit(function(event) {
    event.preventDefault();
   var num =  parseInt($("input#number").val());

if (num > 0){
while (num !== 1){
  if (num%2 === 0 && num !== 1){
    $("ol#next").append("<li> " + num +  "/2 = " + (num/2) + "</li>");
    num = num/2

  };
  if(num%2 !== 0 && num !== 1){
    $('ol#next').append("<li> " + num +  "*3 + 1 = " + ((num * 3) + 1) + "</li>");
    num = (num*3) + 1

  };


  console.log(num);
};
if(num === 1){
    $("#hide1").show();
  }else $("#hide2").show();
    $("#formOne").hide();



} else if (num < 0){
while (num !== -1){
  if (num%2 === 0 && num !== -1){
    $("ol#next").append("<li> " + num +  "/2 = " + (num/2) + "</li>");
    num = num/2

  };
  if(num%2 !== 0 && num !== -1){
    $('ol#next').append("<li> " + num +  "*3 - 1 = " + ((num * 3) - 1) + "</li>");
    num = (num*3) - 1

  };


  console.log(num);
};
if(num === -1){
    $("#hide1").show();
  }else $("#hide2").show();
    $("#formOne").hide();
} else alert("Please enter a valid positive number");


  });
});
