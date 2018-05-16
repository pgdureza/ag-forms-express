var express = require('express');
var router = express.Router();

const db = require('../db');

/* GET forms listing. */

// data fetching
router.get('/:store', (req, res) => {
  db.query('SELECT * FROM forms WHERE store = $1 ORDER BY id DESC', [req.params.store], (qdata) =>{
    res.setHeader('Content-Type', 'application/json');
    res.send(qdata|| {});
  });
})

router.get('/:store/:id', (req, res) => {
  db.query('SELECT * FROM forms WHERE store = $1 and id = $2', [req.params.store, req.params.id], (qdata) =>{
    res.setHeader('Content-Type', 'application/json');
    res.send(qdata[0] || {});
  });
})

router.get('/html/:store/:id', (req, res) => {
  db.query('SELECT * FROM forms WHERE store = $1 and id = $2', [req.params.store, req.params.id], (qdata) =>{
    res.render('form-html', { form: qdata[0] });
  });
})

// data updating
router.put('/:store/:id', (req, res) => {
  const { id, store } = req.params;
  const { title, content, webhook } = req.body;
  
  db.query('UPDATE forms SET title = $3, content = $4, webhook = $5 WHERE store = $1 AND id = $2;', [store, id, title, content, webhook], (qdata) =>{
    res.setHeader('Content-Type', 'application/json');
    res.send({
      "status": "UPDATED"
    });
  });
})

// data inserting
router.post('/', (req, res) => {
  const {
    store,
    title,
    content,
    webhook
  } = req.body;
  db.query('INSERT INTO forms (store, title, content, webhook) VALUES ($1, $2, $3, $4);', [store, title, content, webhook], (qdata) =>{
    res.setHeader('Content-Type', 'application/json');
    res.send({
      "status": "INSERTED"
    });
  });
})

// data deleting
router.delete('/:store/:id', (req, res) => {
  db.query('DELETE FROM forms WHERE store = $1 AND id = $2;', [req.params.store, req.params.id], (qdata) =>{
    res.setHeader('Content-Type', 'application/json');
    res.send({
      "status": "DELETED"
    });
  });
})

module.exports = router;
