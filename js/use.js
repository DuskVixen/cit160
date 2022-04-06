function makeFullName(firstName, lastName) {
    return `${firstName}, ${lastName}`;
}

function depreciation(startValue, endValue, months) {
    let d = (startValue - endValue) / months;
    return d.toFixed(2);
}

function getLast(list) {

    let last = list[list.length - 1];
    if (last > 0) {
        return last;
    } else {
        return list[list.length - 2];
    }
}

function averageBig(list) {
    let average = 0;
    let count = 0;
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i] > 1000) {
            average = average + list[i];
            count = count + 1;
        }
    }
    average = average / count;
    return average;
}