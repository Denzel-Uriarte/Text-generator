/*
topic: Nivel de basades
message 1: Mi opinion es: Eso suena basado!
message 2: Mi opinion es: Diegotastico!
message 3: Mi opinion es: Eso no es muy basado que digamos...
*/
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateText = () => {
    const textObjects = {
        initialText: ["Mi opinion es: ", "Yo considero que: ", "Entiendo, "],
        option: ["Eso suena basado! ", "Diegotastico! ", "Eso no es muy basado que digamos... "],
        endText: ["Hay que implementarlo.", "Piensa en otra cosa.", "Aunque habria otra manera de implementarlo."]
    }
        console.log(textObjects.initialText[randomNumber(0,2)]+textObjects.option[randomNumber(0,2)]+textObjects.endText[randomNumber(0,2)])
}

generateText()