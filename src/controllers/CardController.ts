interface PlateInterface {
	id: number
	name: string
	description: string
	type: 'Apéritif' | 'Entrée' | 'Plat principal' | 'Dessert' | 'Boisson'
	price: number
	quantity: number
}

export default class CardController {
	card: PlateInterface[] = [];

	constructor() {
		this.card = [];
	}

	async getCard(req, res): Promise<void> {
		res.status(200);
		res.send(this.card);
	}

	async addPlate(req, res): Promise<void> {
		const plate = await req.body;

		if (this.card.some(item => item.id === plate.id)) {
			res.status(400)
			res.send()
		} else {
			this.card.push(plate);
			res.status(204);
			res.send()
		}
	}

	async setCard(req, res): Promise<void> {
		const plateId = await req.body.id;
		const modification = await req.body.edit;
		const id = this.card.findIndex(item => item.id === plateId);

		if (id === -1) {
			res.status(400)
			res.send()
		} else {
			const plate = this.card[id];
			plate.quantity += modification;

			if(plate.quantity >= 0) {
				res.status(204);
				res.send()
			} else {
				const idToRemove = this.card.indexOf(plate);
				this.card.splice(idToRemove, 1);
				res.status(204);
				res.send()
			}
		}
	}

	async getAvailablePlates(req, res): Promise<void> {
		const availablePlates = this.card.filter(plate => plate.quantity > 0);
		res.status(200);
		res.send(availablePlates);
	}
}