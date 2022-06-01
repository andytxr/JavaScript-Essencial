const sum = (a,b) => a + b;
console.log(sum(1,2));

const lex1 = () => console.log(this===exports);
const lex2 = () => lex1.bind({});

lex1();
lex2();

function log(text = 'node'){

    console.log(text);

}

log();
log('javascript');

function total(...numbers){

    let total = 0;
    numbers.forEach(n => total += n);
    return total

}

console.log(total(1,2,8,7,10));