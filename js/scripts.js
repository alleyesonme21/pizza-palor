//Business Logic
function Pizza(topping, size) {
  this.topping  = topping,    
  this.size = size;
  this.cost = 15; 
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









