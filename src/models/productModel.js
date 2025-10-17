import { pool } from "../config/db.js";

export const ProductModel = {
  async getAll() {
    const { rows } = await pool.query(
      "SELECT * FROM productos_servicios ORDER BY id ASC"
    );
    return rows;
  },

  async getById(id) {
    const { rows } = await pool.query(
      "SELECT * FROM productos_servicios WHERE id = $1",
      [id]
    );
    return rows[0] || null;
  },

  async create(product) {
    const { nombre, descripcion, categoria, tipo, precio, stock, proveedor } =
      product;
    const precioNum = parseFloat(precio) || 0;
    const stockNum = parseInt(stock) || 0;
    const { rows } = await pool.query(
      `INSERT INTO productos_servicios
       (nombre, descripcion, categoria, tipo, precio, stock, proveedor)
       VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
      [nombre, descripcion, categoria, tipo, precioNum, stockNum, proveedor]
    );
    return rows[0];
  },

  async update(id, product) {
    const {
      nombre,
      descripcion,
      categoria,
      tipo,
      precio,
      stock,
      proveedor,
      estado,
    } = product;
    const precioNum = parseFloat(precio) || 0;
    const stockNum = parseInt(stock) || 0;
    const { rows } = await pool.query(
      `UPDATE productos_servicios SET
        nombre=$1, descripcion=$2, categoria=$3, tipo=$4, precio=$5, stock=$6, proveedor=$7, estado=$8
       WHERE id=$9 RETURNING *`,
      [
        nombre,
        descripcion,
        categoria,
        tipo,
        precioNum,
        stockNum,
        proveedor,
        estado || "activo",
        id,
      ]
    );
    return rows[0];
  },

  async delete(id) {
    await pool.query("DELETE FROM productos_servicios WHERE id = $1", [id]);
    return { message: "Eliminado" };
  },
};
