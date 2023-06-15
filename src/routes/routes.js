const express = require('express');
const router = express.Router();

const controllerCliente = require('../controllers/clientesController');

router.get('/', controllerCliente.list);
router.post('/addCliente', controllerCliente.save);
router.get('/delete/:id', controllerCliente.delete);
router.get('/upDateCliente/:id', controllerCliente.edit);
router.post('/upDateCliente/:id', controllerCliente.upDate);

// rutas calendario
router.get('/asignarCita/:id', controllerCliente.editCita);

module.exports = router;