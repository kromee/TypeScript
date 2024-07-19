interface iAnimal{
    name: string
    caminar(): void
    anomatopeya(): string
}

class Caballo implements iAnimal{
    name: string = "Rocinante"
    caminar(){
        console.log("Caballo caminando")
    }
    anomatopeya(): string{
        return "hin"
    }
}

class Cerdo implements iAnimal{
    name: string = "Marrano"
    caminar(){
        console.log("Puerco caminando")
    }
    anomatopeya(): string{
        return "Oing"
    }
}

class Perro implements iAnimal{
    name: string = "Boby"
    caminar(){
        console.log("Perro caminando")
    }
    anomatopeya(): string{
        return "Guau"
    }
}

class DiccionarioUsuario{
    [id:string]: string
}

let diccionarioUsuarios = new DiccionarioUsuario()
diccionarioUsuarios['a1'] = "Usuario 1"
diccionarioUsuarios['1a'] = "Usuario 2"
diccionarioUsuarios['a3'] = "Usuario 3"

console.log(diccionarioUsuarios)


