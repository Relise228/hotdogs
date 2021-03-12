const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

const client = new Client({
    user: 'qzyrccur',
    host: 'ziggy.db.elephantsql.com',
    database: 'qzyrccur',
    password: 'kKDUzbS5vdmTX9Xp8zadK8omuEFTa22X',
    port: 5432,
})
client.connect();

app.get('/', async (req, res) => {
    client.query('SELECT * FROM hotdogs ORDER BY id', (err, resp) => {
        res.send(resp.rows);
    })
});

app.post('/hotdog/update', async (req, res) => {
    try {
        const {id, img, name, price, description} = req.body;
        client.query(`UPDATE hotdogs SET img='${img}', name='${name}', price=${price}, description='${description}' WHERE id=${id}`, (err, resp) => {
            client.query('SELECT * FROM hotdogs ORDER BY id', (err, resp) => {
                res.send(resp.rows);
            })
        })
    } catch (error) {
        res.status(500).send('Server error');
    }
});

app.delete('/hotdog/delete', async (req, res) => {
    try {
        const {id} = req.body;
        console.log(req.body)
        client.query(`DELETE FROM hotdogs WHERE id=${id}`, (err, resp) => {
            client.query('SELECT * FROM hotdogs ORDER BY id', (err, resp) => {
                res.send(resp.rows);
            })
        })
    } catch (error) {
        res.status(500).send('Server error');
    }
});

app.put('/hotdog/add', async (req, res) => {
    try {
        const {img, name, price, description} = req.body;
        console.log(req.body)
        client.query(`INSERT INTO hotdogs(img, name, price, description) VALUES ('${img}', '${name}', ${price}, '${description}')`, (err, resp) => {
            client.query('SELECT * FROM hotdogs ORDER BY id', (err, resp) => {
                res.send(resp.rows);
            })
        })
    } catch (error) {
        res.status(500).send('Server error');
    }
});



app.listen(port, () => console.log(`Listening on port ${port}`));
