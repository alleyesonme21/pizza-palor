//Business Logic
function Pizza(topping, size) {
  this.topping  = topping,    
  this.size = size;
  this.cost = 15; 
} 
Pizza.prototype.pizzaCost = function() {
  if((this.topping + this.size) == 2) {
    this.cost = 10;
  } else if ((this.topping + this.size) == 3) {
    this.cost = 12;
  } else if ((this.topping + this.size) == 5 ) {
    this.cost = 17;
  } else { 
    this.cost = 25;
  }
    return this.cost;
  }
// User Interface Logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    // let newPizza = new pizza();
    const inputtedTopping = parseInt($("#topping").val());
    const inputtedSize = parseInt($("#size").val());
    let newPizza = new Pizza(inputtedTopping, inputtedSize);
    $("#pizza-cost").text(newPizza.pizzaCost());
    $("#output").show()
   
  })
})









