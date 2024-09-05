"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware para analizar los datos del formulario
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/public', express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/', (req, res) => {
    sendFile(res, '../public/index.html');
});
app.get('/profile', (req, res) => {
    sendFile(res, '../public/profile.html');
});
app.get('/styles', (req, res) => {
    sendFile(res, '../public/main.css');
});
app.get('/contact', (req, res) => {
    sendFile(res, '../public/contact.html');
});
app.post('/contact', (req, res) => {
    const { email, comment } = req.body;
    // Guardar los datos en el archivo 'comments.txt'
    const data = `Email: ${email}\nComment: ${comment}\n\n`;
    fs_1.default.appendFile('comments.txt', data, (err) => {
        if (err) {
            console.error('Error al guardar el comentario:', err);
            res.sendStatus(500);
        }
        else {
            res.redirect('/');
        }
    });
});
function sendFile(res, filePath) {
    const fullPath = path_1.default.join(__dirname, filePath);
    const stream = fs_1.default.createReadStream(fullPath, 'utf8');
    stream.on('error', (error) => {
        console.error(error);
        res.sendStatus(500);
    });
    stream.pipe(res);
}
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
