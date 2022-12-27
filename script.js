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
    let initialText = "Mi opinion es: "
    let option1 = "Eso suena basado!"
    let option2 = "Diegotastico!"
    let option3 = "Eso no es muy basado que digamos..."
    const randomize = randomNumber(1,3)
    if (randomize == 1) {
        console.log(initialText+option1)
    } else if (randomize == 2) {
        console.log(initialText+option2)
    } else if (randomize == 3) {
        console.log(initialText+option3)
    } else {
        console.log("error!")
    }
}

generateText()