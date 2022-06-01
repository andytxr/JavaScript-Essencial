const worker = { name: 'Deco', wage: 5000}
const clone = { active: true, ...worker}

console.log(clone);

const A = ['Deco', 'Jhenne', 'Julia', 'Bia'];
const aFinal = ['Gab', ...A, 'Drigo', 'Victor'];
console.log(aFinal);