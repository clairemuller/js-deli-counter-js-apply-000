let ticketNumber = 0;

function takeANumber(line){
  ticketNumber++;
  line.push(ticketNumber);
  return `Welcome! You're ticket number #${ticketNumber}`
}

takeANumber(line) // "Welcome! You're ticket number #1" [1]
takeANumber(line) // "Welcome! You're ticket number #2" [1,2]

nowServing(line) // "Currently serving #1" [2]
nowServing(line) // "Currently serving #2" []

takeANumber(line) // "Welcome! You're ticket number #3" [3]