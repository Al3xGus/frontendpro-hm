function generateList(array) {
    let result = '';

    function generateInnerList(innerArray) {
        let innerResult = '';
        innerResult += '<ul>';
        innerArray.forEach(item => {
            if (Array.isArray(item)) {
                innerResult += generateInnerList(item);
            } else {
                innerResult += `<li>${item}</li>`;
            }
        });
        innerResult += '</ul>';
        return innerResult;
    }

    array.forEach(item => {
        if (Array.isArray(item)) {
            result += generateInnerList(item);
        } else {
            result += `<ul><li>${item}</li></ul>`;
        }
    });

    return result;
}

const array = [
    [1, 2, 3],
    [1, 2, [1.1, 1.2, 1.3]],
    3
];

const htmlList = generateList(array);
console.log(htmlList);
