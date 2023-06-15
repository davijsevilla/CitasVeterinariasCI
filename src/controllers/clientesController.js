const controllerCliente = {};


controllerCliente.upDate = (req, res) => {
  const { id } = req.params;
  const newCliente = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE cliente set ? WHERE id = ?",
      [newCliente, id],
      (err, rows) => {
        res.redirect("/");
      }
    );
  });
};

controllerCliente.editCita = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM cliente WHERE id = ?", [id], (err, rows) => {
      if (err) {
        res.json(err);
      }
      res.render("asignarCitas", {
        data: rows[0],
      });
    });
  });
};

controllerCliente.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM cliente WHERE id = ?", [id], (err, rows) => {
      if (err) {
        res.json(err);
      }
      res.render("editar_cliente", {
        data: rows[0],
      });
    });
  });
};
controllerCliente.delete = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("DELETE FROM cliente WHERE id = ?", [id], (err, rows) => {
      res.redirect("/");
    });
  });
};
controllerCliente.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO cliente set ?", [data], (err, rows) => {
      if (err) {
        res.json(err);
      }
      console.log(rows);
      res.redirect("/");
    });
  });
};

controllerCliente.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM cliente", (err, cliente) => {
      if (err) {
        res.json(err);
      }

      console.log(cliente);
      res.render("clientes", {
        data: cliente,
      });
    });
  });
};

module.exports = controllerCliente