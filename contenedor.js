const{ promises: fs} = require(`fs`) ;
const { json } = require("stream/consumers");


class Contenedor {
    constructor(archivo){
    this.archivo = archivo;
    }

    async getAll(){ 
        try {
            const objs = await fs.readFile(this.archivo, "utf-8" )
             console.log (objs);
            return JSON.parse(objs) }
            catch (error) {
                    return error
                    }
        }

   async save(obj){
        const objs = await this.getAll()
        console.log(objs)
        let newId = 1
        
        if (objs.length > 0) {
            newId = objs[objs.length - 1].id + 1
        }

        const newObj = {...obj, id: newId}
        objs.push(newObj)

        fs.writeFile(this.archivo, JSON.stringify(objs, null,2), (err) => {
        if (err) {
            console.log("error al crear el archivo", err); }
            else{ 
                console.log("Success");
                return newId
            }
            
        })
        
    }
    async getAll(){ 
    try {
        const objs = await fs.readFile(this.archivo, "utf-8" )
         console.log (objs);
        return JSON.parse(objs) }
        catch (err) {
                return err
                }
    }

   

    async getById(id){
        try{
           const objs = await fs.readFile(this.archivo, "utf-8")
           console.log (id); 
           return JSON.parse(objs , id) }
           catch (err){
               return null (err) 
           }
            
    }

    deletbyId(id) {
        
        const objs = fs.readFile(this.archivo())
        const idSolicitado= objs.id.find (objs => objs.id === id)
        
        fs.unlink(idSolicitado, (err) => {
            if(err) {
                throw new error (`no se pudo eliminar el objs`, err)
            }
            console.log (`elminado correctamente`)
        })
        }
   

     deleteAll(){
        {
            const objs = fs.readFile(this.archivo())
            const idSolicitado= objs.id.find (objs => objs.id)
           
            fs.unlink(idSolicitado, (err) => {
                if(err) {
                    throw new error (`no se pudieron eliminar los objs`, err)
                }
                console.log (`elminados correctamente`)
            })
        }
    }
    
    
}

module.exports = contenedor