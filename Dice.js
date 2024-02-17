export default function d6() {
    let number = getRandomInt(7);
    if (number === 0) {
        return number = d6();
    }
    return number;
}

export default function d3() {
    let number = getRandomInt(4);
    if (number === 0) {
        return number = d3();
    }
    return number;
}

export default function d2() {
    let number = getRandomInt(3);
    if (number === 0) {
        return number = d2();
    }
    return number;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}