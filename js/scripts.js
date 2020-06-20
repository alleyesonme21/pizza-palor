//Business Logic
function Pizza(firstTopping, secondTopping, thirdTopping, fourthTopping, small, medium, large) {
  this.firstTopping  = firstTopping,    
  this.secondTopping = secondTopping;
  this.thirdTopping  = thirdTopping ;
  this.fourthTopping = fourthTopping;
  this.large = large; 
  this.medium = medium;
  this.small = small;
  this.cost = "15"; 
} 
Pizza.prototype.pizzaCost = function() {
  if(this.cost > this.firstTopping + this.small >= "2" ) {
    return this.cost = 10;
  } else if (this.cost > this.secondTopping + this.small >="3") {
    return this.cost = 12;
  } else if (this.cost >= this.thirdTopping + this.medium >= "5") {
    return this.cost = 17;
  }else { 
    return this.cost = 25;
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
    $("#pizza-cost").text(newPizza.pizzaCost());
    $("#output").show()
    
    
  })
})









