import  Express  from "express";
import {dirname, join} from "path";
import {fileURLToPath} from "url";

import indexRoutes from './routes/index.js'; //esto se debe de colocar simepre que las rutas esten en otro archivo

const app = Express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views',join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(indexRoutes); //la forma de uso de la rutas en otro archivo

app.use(Express.static(join(__dirname,'public')));


app.listen(4000);
console.log('el servidor se esta ejecutanto en el puesto ', 4000);
