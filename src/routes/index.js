import {Router} from 'express';

const router = Router();

router.get('/',(req, res)=>res.render('index', {title: 'My first page with Node', x: 30}));
router.get('/About',(req, res)=>res.render('About', {title: 'Sobre mi'}));
router.get('/Contac',(req, res)=>res.render('Contac', {title: 'contactame'}));

export default router;//esto se debe a que exportamos el contenido al index.js principal