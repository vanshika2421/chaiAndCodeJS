const mynums = [1,2,3,4];

const intialValue = 0;
const sumWithIntial = mynums.reduce(
    (accumlator,currentValue)   => accumlator + currentValue, intialValue
);

console.log(sumWithIntial);