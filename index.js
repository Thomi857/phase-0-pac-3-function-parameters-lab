function introduction(name){
    return `Hi, my name is ${name}.`;
}

file = introduction("ian");

console.log(file);

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

parameter = introductionWithLanguage("Aki", "Ember.js.");
console.log(parameter);

function introductionWithLanguageOptional(name, language = "JavaScript" ){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}