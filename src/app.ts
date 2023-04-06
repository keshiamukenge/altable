import express from 'express'
import bodyParser from 'body-parser';

import CardController from './controllers/CardController';

const app = express();
const port = 3000;

class App {
	app: express.Application;
	port: number;
	cardController: CardController;

	constructor() {
		this.app = app;
		this.port = port;

		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: true }))

		this.cardController = new CardController();

		this.listen();
		this.setupRouter();
	}

	setupRouter() {
		this.app.get('/api', (req, res) => {
			res.send(`
				<h1>Alt'able api</h1>
				<h2>Endpoints :</h2>
				<ul>
					<li><code>[GET] /card</code></li>
					<li><code>[POST] /card</code></li>
					<li><code>[PUT] /card</code></li>
					<li><code>[GET] /card/available</code></li>
				</ul>
			`)
		})

		this.app.get('/api/card', (req, res) => {
			this.cardController.getCard(req, res);
		})

		this.app.post('/api/card', (req, res) => {
			this.cardController.addPlate(req, res);
		})

		this.app.put('/api/card', (req, res) => {
			this.cardController.setCard(req, res);
		})

		this.app.get('/', (req, res) => {
			res.send('Bienvenue sur Alt\'able !')
		})

		this.app.get('/api/card/available', (req, res) => {
			this.cardController.getAvailablePlates(req, res);
		})
	}

	listen() {
		app.listen(this.port, () => {
			console.log(`App listening on port ${this.port}`);
		})
	}
}

new App();