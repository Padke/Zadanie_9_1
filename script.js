
var triangle1Area = getTriangleArea(2, 1);
var triangle2Area = getTriangleArea(3, 8);
var triangle3Area = getTriangleArea(5, 4);

function getTriangleArea(a, h) {
    if (isNaN(a) || isNaN(h) || a <= 0 || h <= 0) {
    console.log('Dane nieprawidłowe');
    return false;
}
    else {
     return a*h/2;
}
}

console.log(getTriangleArea(prompt('Base'), prompt('height')))