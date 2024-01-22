const tickets = {
  '0H2AZ123': null,
  '23LA9T41': 'Verena Nardi',
  'something': {
    name: 'andres'
  }
};

const tickets2 = {
  '0H2AZ123': null,
  '23LA9T41': 'Verena Nardi',
};


function main(tickets, ticketId) {
  return tickets.something?.name
}


console.log(main(tickets, 'RE90VAW7'));
console.log(main(tickets2, '0H2AZ123'));
console.log(main(tickets, '23LA9T41'));
