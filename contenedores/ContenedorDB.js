const knex = require('knex');


// Creamos el modulo de Knex para MySQL
class ContenedorDb {
    constructor(config, tabla){
        this.knex = knex(config);
        this.tabla= tabla;
        }

    // Creamos las funciones de consulta

       async listar(id) {
         try {
        return await this.knex.select().from(this.tabla).where('id', id);
           
         } catch (error) {
            throw new Error("error al listar ");
         }
         
        }
    
       async listarAll() {
        try{
        let productos = await this.knex.select().from(this.tabla);
        return productos;           
        } catch (error) {
            throw new Error( error);
        }
        }
    
       async guardar(obj) {
        try{
            return await this.knex(this.tabla).insert(obj);
        } catch (error) {
            throw new Error("error al guardar");
        }
     
        }
    
        async actualizar(elem, id) {
           try{
            return await this.knex(this.tabla).where('id', id).update(elem);
              } catch (error) {
            throw new Error("error al actualizar");
        }
           }

            
        
    
       async borrar(id) {
          try{
            return await this.knex(this.tabla).where('id', id).del();
            } catch (error) {
            throw new Error("error al borrar");
        }
        
            
        }
    
       async borrarAll() {
     try{
            return await this.knex(this.tabla).del();
            }
        catch (error) {
            throw new Error("error al borrar todos");
        }


    }}
        
module.exports = ContenedorDb ;