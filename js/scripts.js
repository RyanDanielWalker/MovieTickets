
function Ticket(age, time, name, price) {
  this.age = age
  this.time = time
  this.name = name
  this.price = price
}
// let newTicket = new Ticket("child", "Before 5", "Fargo")


// Ticket.prototype.addTicketPrice = function (newTicketPrice) {
//   this.price = (newTicketPrice).toString()
// }


Ticket.prototype.ticketPrice = function (newTicket) {
  let newTicketPrice = 0
  if (newTicket.time === "Before 5") {
    if (newTicket.age === "senior") {
      newTicketPrice += 3;
    } else if (newTicket.age === "child") {
      newTicketPrice += 4;
    } else if (newTicket.age === "adult") {
      newTicketPrice += 6;
    }
    // return newTicketPrice
  } else if (newTicket.time === "After 5") {
    if (newTicket.age === "senior") {
      newTicketPrice += 5;
    } else if (newTicket.age === "child") {
      newTicketPrice += 6;
    } else if (newTicket.age === "adult") {
      newTicketPrice += 8;
    } // return newTicketPrice
  }

  // (newTicketPrice).toString(this.price)
  // newTicketPrice = newTicketPrice
  newTicket.price = newTicketPrice.toString();
  return newTicket
}


//inputtedAge
//inputtedTime
//inputtedMovieName
// let newTicket = new Ticket(inputtedAge, inputtedTime, inputtedMovieName)
let variable = ticketPrice(newTicket)




// user will select movie name.
// " "              time of day
// " "              age
// will return ticket price

///////// Time: Pre- 5:00\\\\\\\
// Senior: $3
// Child: $4
// Regular: $6

//////////Time: Post- 5:00\\\\\\\\
// Senior: $5
// Child: $6
// Regular: $8
////////////////All 3-D movies: add $2

///////////movie name inputted
//time inputted
//age inputted
//choice for 3D

