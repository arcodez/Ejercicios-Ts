let text = "Hola que tal bienvenidos a Arcodez. tal si os esta gustando este ejercicio, dale estrellita y sigueme para que algun dia puedan contratarme";

function normalize(word:string) {
  return word.toLowerCase().replace(/[.,!]/g, "")
}

function wordRepetitions(text: string) {
  let dict: {[key: string]: number} = {};
  let separateWords = text.split(" ");
  for (let word of separateWords) {
    if (normalize(word) in dict) {
      ++dict[normalize(word)];
    } else {
        dict[normalize(word)] = 1; 
    }
  }
  console.log(dict);
}

wordRepetitions(text);
