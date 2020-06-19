//Business Logic
function Pizza(firstTopping, secondTopping, thirdTopping, fourthTopping, large, medium, small) {
this.firstTopping  = firstTopping,    
this.secondTopping = secondTopping;
this.thirdTopping  = thirdTopping ;
this.fourthTopping = fourthTopping;
this.large = large; 
this.medium = medium;
this.small = small;
 this.cost = 0; 

} 

Pizza.prototype.pizzaCost = function() {
  if( this.cost <  this.firstTopping == "1"  && this.cost < this.small == "1" ) {
    return this.cost = 10;
  }  
  }






// User Interface Logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    const inputtedTopping = $("#topping").val();
    const inputtedSize = $("#size").val();
    let newPizza = new Pizza(inputtedTopping, inputtedSize);
    console.log(newPizza);
    $("#pizza-cost").text(newPizza.pizzaCost);
    $("#output").show()
    
    
  })
})









