
//Push al frente
const pushAlFrente= (arr,valor)=>{
    console.log('\n---Push al frente---')
    console.log(`matriz:[${arr}] valor:${valor}`)
    for (let i=0;i<arr.length; i++){
        arr[arr.length-i]=arr[arr.length-i-1]
    }
    arr[0]=valor
    console.log(arr)
}

const popAlFrente= (arr)=>{
    console.log('\n---Pop al frente---')
    console.log(`matriz:[${arr}]`)
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i+1];
    }
    arr.pop();
    console.log(arr)
}

const popFront= (arr,indice)=>{
    console.log('\n---Eliminar en---')
    console.log(`matriz:[${arr}] indice: ${indice}`)
    for(let i=indice;i<arr.length;i++){
        arr[i]=arr[i+1];
    }
    arr.pop()
    console.log(arr)
}

const pushFront= (arr,val,indice)=>{
    console.log('\n---Insertar en---')
    console.log(`matriz:[${arr}] valor:${val} indice: ${indice}`)
    for(let i=arr.length;i>indice;i--){
        arr[i]=arr[i-1];
    }
    arr[indice]=val;
    console.log(arr)
}

const paresIntercambio= (arr)=>{
    console.log('\n---Pares de intercambio---')
    console.log(`matriz:[${arr}]`)
    for(let i=0;i<arr.length;i=i+2){
        if(arr[i+1]!=null){
            let aux = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = aux;
        }
    }
    console.log(arr)
}

const eliminarDuplicados= (arr)=>{
    console.log('\n---Eliminar Duplicados---')
    console.log(`matriz:[${arr}]`)
    let arr2=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=arr[i+1]){
            arr2.push(arr[i]);
        }
    }
    console.log(arr2)
}

let matriz=[1,2,3,4,5,6,7];
let valor=10;
let indice=3;

pushAlFrente(matriz,valor)

popAlFrente(matriz)

pushFront(matriz,valor,indice)

popFront(matriz,indice)

paresIntercambio(matriz)
let matriz2=["Brendan", true, 42];
paresIntercambio(matriz2)

matriz=[1,2,2,2,3,3,4,4,4,4,4,5,6,6,7];
eliminarDuplicados(matriz)