const knex = require('knex');
const {configMySQL, configSQLite} = require('../src/config');


(async () => {
try {
    const dbClient = knex(configMySQL.config);
    await dbClient.schema.dropTableIfExists(configMySQL.table)
    await dbClient.schema.createTable(configMySQL.table, table => {
        table.increments('id').primary();
        table.string('title');
        table.string('price');
        table.string('thumbnail');
    });
  await   dbClient.destroy();
    console.log('Tabla creada correctamente Productos');
} catch (error) {
    console.log(error);
}


 try {
     const dbClient = knex(configSQLite.config);
     await dbClient.schema.dropTableIfExists(configSQLite.table)
     await dbClient.schema.createTable(configSQLite.table, table => {
         table.increments('id').primary();
         table.string('autor');
         table.string('texto');
         table.string('fyh');
     });
     dbClient.destroy();
     console.log('Tabla creada correctamente Mensajes');
 } catch (error) {
     console.log("Mensajes no se pudo crear" + error);
 }
})();