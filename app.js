import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let books = [
  { id: 1, title: "1984", author: "George Orwell", genre: "Dystopian" },
];

// Obtener todos los libros
app.get("/books", (req, res) => {
  res.json(books);
});

// Obtener un libro por ID
app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: "Book not found." });
  res.json(book);
});

// Crear un nuevo libro
app.post("/books", (req, res) => {
  const { title, author, genre } = req.body;
  if (!title || !author || !genre)
    return res.status(400).json({ error: "All fields are required." });

  const newBook = { id: books.length + 1, title, author, genre };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Actualizar un libro
app.put("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ error: "Book not found." });

  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;
  book.genre = req.body.genre || book.genre;

  res.json(book);
});

// Eliminar un libro
app.delete("/books/:id", (req, res) => {
  const index = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Book not found." });

  const deletedBook = books.splice(index, 1);
  res.json(deletedBook);
});

// Middleware de error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error." });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
