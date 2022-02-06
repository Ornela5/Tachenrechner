const output = document.querySelector('.output')
let operationArray = []
let resultArray = []

const displayBtn = (i) => {
    operationArray.push(i)
    output.textContent = operationArray.join('')
    resultArray.push(i)

}

const result = () => {
    let save
    save = resultAray.join('')
    outputResult.textContent = eval(save)
    operationArray = []
    resultArray = []
}