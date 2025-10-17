import { ProductModel } from '../models/productModel.js';

export const ProductController = {
  // Mostrar listado (GET)
  async index(req, res) {
    try {
      const productos = await ProductModel.getAll();
      res.render('index', { productos });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al listar productos');
    }
  },

  // Formulario nuevo (GET)
  newForm(req, res) {
    res.render('new');
  },

  // Crear (POST)
  async create(req, res) {
    try {
      await ProductModel.create(req.body);
      res.redirect('/productos');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al crear producto');
    }
  },

  // Mostrar detalle (GET)
  async show(req, res) {
    try {
      const producto = await ProductModel.getById(req.params.id);
      if (!producto) return res.status(404).send('No encontrado');
      res.render('show', { producto });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al obtener producto');
    }
  },

  // Formulario editar (GET)
  async editForm(req, res) {
    try {
      const producto = await ProductModel.getById(req.params.id);
      if (!producto) return res.status(404).send('No encontrado');
      res.render('edit', { producto });
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al obtener producto para editar');
    }
  },

  // Actualizar (PUT via method-override)
  async update(req, res) {
    try {
      await ProductModel.update(req.params.id, req.body);
      res.redirect('/productos');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al actualizar producto');
    }
  },

  // Eliminar (DELETE via method-override)
  async remove(req, res) {
    try {
      await ProductModel.delete(req.params.id);
      res.redirect('/productos');
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al eliminar producto');
    }
  }
};
