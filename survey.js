const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question("What is your favourite music artist? ", (music)=> {
    rl.question("What are you interested in? ", (interest)=> {
      rl.question("What is your favourite dish? ", (dish)=> {
        rl.question("What is your lovest meal type (e.g. breakfast, lunch etc.)? ", (meal)=> {
          rl.question("What is your lovest sport? ", (sport)=> {
            rl.question("What is your superpower? ", (supPow)=> {
              console.log(`${name} loves listening to ${music} while ${interest}, devouring ${dish} for
               ${meal}, prefers ${sport} over any other sport, and is amazing at ${supPow}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});