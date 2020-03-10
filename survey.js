const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {
  name: {
    question: "What's your name? Nicknames are also acceptable :)",
    value: "not specified"
  },
  activity:  {
    question: "What's an activity you like doing?",
    value: "not specified"
  },
  music:  {
    question: "What do you listen to while doing that?",
    value: "not specified"
  },
  meal:  {
    question: "Which meal is your favourite (eg: dinner, brunch, etc.)",
    value: "not specified"
  },
  food:  {
    question: "What's your favourite thing to eat for that meal?",
    value: "not specified"
  },
  sport:  {
    question: "Which sport is your absolute favourite?",
    value: "not specified"
  },
  superpower:  {
    question: "What is your superpower? In a few words, tell us what you are amazing at!",
    value: "not specified"
  },

};

const consoler = (data) => {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      console.log(`${key}: ${data[key].value}\n`);
    }
  }
};

const keys = Object.keys(answers);

const prompt = index => {
  if (index < keys.length) {
    const key = keys[index];
    rl.question(`${answers[key].question} `, (answer) => {
      answers[key].value = answer;
      prompt(index + 1);
      if (index === keys.length - 1) {
        consoler(answers);
        rl.close();
      }
    });
  }
};

prompt(0);