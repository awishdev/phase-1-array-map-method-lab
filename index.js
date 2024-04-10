const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
const titleCased = () => {
  
  const newTutorials = tutorials.map((phrase) =>  {
    debugger;
    const words = phrase.split(" ");
    const newPhrase = words.map((word) => {
      debugger;
      word = word[0].toUpperCase() + word.substring(1);
      return word;
    });
    const resultPhrase = newPhrase.join(" ");
    debugger;
    return resultPhrase;
  });
  return newTutorials
}
