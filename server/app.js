import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './src/build', 'index.html'));
});

app.listen(PORT, process.env.IP, () => {
  console.log("Server has started " + PORT);
});
