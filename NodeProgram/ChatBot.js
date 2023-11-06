greetings = ["greetings", "hi", "hello", "hey", "hola"]
ynResponses = ["Yes!", "No!", "Maybe"]
qResponses = ["Because thats how the world worlds", "I dont know :("]

process.stdout.write('Hello! Nice to talk to you!\n')


process.stdout.write('Your Message:')
process.stdin.on('data', (data) => {

    const userInput = data.toString().trim();
    const samples = userInput.toLowerCase().split(/\s+/g)
    if (userInput.toLowerCase() === 'exit') {
        console.log('Goodbye!');
        process.exit(0);
    }
    else if (greetings.some((i) => samples.includes(i.trim().toLowerCase()))) {
        console.log('Hello there!');
      }
    else if (userInput.toLowerCase().includes("do you think")) {
        console.log(ynResponses[Math.round(Math.random()*2)]);
    }
    else if (userInput.toLowerCase().startsWith("why")){
        console.log(qResponses[Math.round(Math.random()*1)]);
    }
    process.stdout.write(`Your Message:`)

});