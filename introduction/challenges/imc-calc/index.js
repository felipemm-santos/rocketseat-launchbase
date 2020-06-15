const name = 'Carlos';
const weight = 107;
const height = 1.88;

const imc = weight / (height * height);

if (imc >= 30) {
    console.log(`${name} você está acima do peso`);    
} else {
    console.log(`${name} você não está acima do peso`);    
}
