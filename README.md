# Postman-saberqes-

Node.js (versión 14 o superior)
npm (viene incluido con Node.js)

en code sandbox, simplemente en la terminal instalar el nmp 
debería detectar automáticamente un server.js o index.js y ejecutarlo. 
verificar si tenemos la dependencias de extres que podriamos instalarla tmb el json 

sino es en sandbox clonar el repo 
git clone https://github.com/Sabi-0/Postman-saberqes.git
cd Postman-saberqes

tmb instalamos las dependencias 
npm install
npm start

 Obtener todos los libros

GET /books

curl -X GET http://localhost:3000/books

🔹 Obtener un libro por ID

GET /books/:id

curl -X GET http://localhost:3000/books/1

🔹 Agregar un nuevo libro

POST /books

curl -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -d '{"title": "El Principito", "author": "Antoine de Saint-Exupéry", "genre": "Ficción"}'

🔹 Actualizar un libro existente

PUT /books/:id

curl -X PUT http://localhost:3000/books/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "1984", "author": "George Orwell", "genre": "Distopía"}'

🔹 Eliminar un libro

DELETE /books/:id

curl -X DELETE http://localhost:3000/books/1

📝 Notas Adicionales

El servidor utiliza express.json() para procesar datos JSON en las solicitudes.
