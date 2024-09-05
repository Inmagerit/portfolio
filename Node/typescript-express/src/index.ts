import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

// Middleware para analizar los datos del formulario
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', (req: Request, res: Response) => {
  sendFile(res, '../public/index.html');
});

app.get('/profile', (req: Request, res: Response) => {
  sendFile(res, '../public/profile.html');
});

app.get('/styles', (req: Request, res: Response) => {
  sendFile(res, '../public/main.css');
});

app.get('/contact', (req: Request, res: Response) => {
  sendFile(res, '../public/contact.html');
});

app.post('/contact', (req: Request, res: Response) => {
  const { email, comment } = req.body;

  // Guardar los datos en el archivo 'comments.txt'
  const data = `Email: ${email}\nComment: ${comment}\n\n`;
  fs.appendFile('comments.txt', data, (err) => {
    if (err) {
      console.error('Error al guardar el comentario:', err);
      res.sendStatus(500);
    } else {
      res.redirect('/');
      
      
    }
  });
});

function sendFile(res: Response<any>, filePath: string) {
  const fullPath = path.join(__dirname, filePath);

  const stream = fs.createReadStream(fullPath, 'utf8');
  stream.on('error', (error) => {
    console.error(error);
    res.sendStatus(500);
  });
  stream.pipe(res);
}

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
