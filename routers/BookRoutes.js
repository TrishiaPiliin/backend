import * as BookController from '../controllers/BookController.js';
import express from "express";

const bookRoutes = express.Router();

bookRoutes.get('/all', BookController.fetchBooks);

// bookRouteSRoutes.post('/new', BookController.createBook);
// bookRoutes.put('/edit/:bookId', BookController.editBook);
// bookRoutes.delete('/delete/:bookId', BookController.deleteBook);

export default bookRoutes;