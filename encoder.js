const encodingArray = {
    a: "E",
    b: "B",
    c: "C",
    d: "D",
    e: "A",
    f: "F",
    g: "G",
    h: "D",
    i: "I",
    j: "J",
    k: "K",
    l: "L",
    m: "M",
    n: "N",
    o: "O",
    p: "P",
    q: "Q",
    r: "R",
    s: "S",
    t: "T",
    u: "U",
    v: "V",
    w: "W",
    x: "X",
    y: "Y",
    z: "Z",
}

const encodeText = function(){
    const input = encodeElement.value
    const inputArray = input.split("")
    let output = ""

    for (let index = 0; index < inputArray.length; index++) {
        output += encodingArray[inputArray[index]]
    }

    printOutput(output)
}

const decodeText = function(){
    const input = decodeElement.value
    const inputArray = input.split("")
    let output = ""

    for (let index = 0; index < inputArray.length; index++) {
        output += getKeyByValue(encodingArray, inputArray[index])
    }

    printOutput(output)
}

// Helper function for decodeText function
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
  