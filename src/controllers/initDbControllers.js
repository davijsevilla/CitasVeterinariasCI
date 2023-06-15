const initDbController = {};

initDbController.run = (req, res) => {
    const sqlInit = 'CREATE TABLE IF NOT EXISTS cliente (id int(30) AUTO_INCREMENT, fechacita Date DEFAULT NULL, nombre varchar(100) NOT NULL, direccion varchar(100) NOT NULL, telefono varchar(30) NOT NULL, nombreMascota varchar(30) DEFAULT NULL, PRIMARY KEY(id))';
    req.getConnection(sqlInit, (err) => {
        if (err) throw err;

        res.send('Tabla creada!');

    });

};
module.exports = initDbController;