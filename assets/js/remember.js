/*

███████╗ █████╗  ██████╗████████╗ ██████╗ ██████╗ ██╗   ██╗
██╔════╝██╔══██╗██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗╚██╗ ██╔╝
█████╗  ███████║██║        ██║   ██║   ██║██████╔╝ ╚████╔╝ 
██╔══╝  ██╔══██║██║        ██║   ██║   ██║██╔══██╗  ╚██╔╝  
██║     ██║  ██║╚██████╗   ██║   ╚██████╔╝██║  ██║   ██║   
╚═╝     ╚═╝  ╚═╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝   
                                                           
Factory: é a forma de 'produção', que cria todo o processo
no caso criar uma função para criar a classe
*/ 
class Person {
    age = 0

    constructor(name) {
        this.name = name
    }

}

function createPerson(name, age) {

    let p = new Person(name)
    p.age = age
    // Precisa retornar os valores pra dentro dos parâmetros
    return p

}

// Criando um objeto com a classe por meio da function
let p1 = createPerson("Carlos", 21)
console.log(p1)
console.log(`O ${p1.name} tem ${p1.age} anos`)