let archivo1 = new Contenedor(`./productos.txt`)

let productos =[{name:"gabinete", price:2000 , thumbnail: "Placeholder"}, {name:"mouse", price:200 , thumbnail: "Placeholder"} ]

async function createProductos(prods){
    for (const prod of prods) {
        await archivo1.save(prod)
    }
}


createProductos(productos);

archivo1.getAll()