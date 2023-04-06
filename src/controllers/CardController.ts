type PlateInterface = {
	id: number;
	name: string;
	description: string;
	price: number;
	quantity: number;
}

export default class CardController {
	card: PlateInterface[] = [];

	constructor() {
		this.card = [];
	}

	async getCard(req, res): Promise<void> {
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
}