import express from 'express';
import { ProductController } from '../controllers/productController.js';

const router = express.Router();

router.get('/', ProductController.index);          // GET /productos
router.get('/new', ProductController.newForm);     // GET /productos/new (form)
router.post('/', ProductController.create);        // POST /productos

router.get('/:id', ProductController.show);        // GET /productos/:id
router.get('/:id/edit', ProductController.editForm);// GET /productos/:id/edit
router.put('/:id', ProductController.update);      // PUT /productos/:id
router.delete('/:id', ProductController.remove);   // DELETE /productos/:id

export default router;
