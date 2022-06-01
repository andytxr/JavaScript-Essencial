function size(width, height) {
    let size = width * height;
    if(size>0){
        console.log(`Valor acima do permitido: ${size}m²`);
    }else{
        return size;
    }

}

console.log(size(4,3));
console.log(size(4));
console.log(size())
console.log(size(4,1,2));
console.log(size(5,5));