import AlunosService from "../../services/AlunosService.js";
import Helper from "../../helpers/helper.js";

const alunosService = new AlunosService();

class AlunosController {
	static async getAll(req, res) {
		try {
			const { rows } = await alunosService.getAll();

			return res.status(200).send(Helper.ResponseData(200, null, null, rows));
		} catch (error) {
			return res.status(500).send(Helper.ResponseData(500, null, error, null));
		}
	}

	static async getOneById(req, res) {
		const { id } = req.params;

		try {
			const { rows } = await alunosService.getOneById({ id: id });

			if (rows.length === 0) {
				return res
					.status(404)
					.send(Helper.ResponseData(404, "Aluno not found", null, null));
			}

			return res.status(200).send(Helper.ResponseData(200, null, null, rows));
		} catch (error) {
			return res.status(500).send(Helper.ResponseData(500, null, error, null));
		}
	}

	static async create(req, res) {
		try {
			await alunosService.create(req.body);

			return res.status(204);
		} catch (error) {
			return res.status(500).send(Helper.ResponseData(500, null, error, null));
		}
	}

	static async update(req, res) {
		const { id } = req.params;

		try {
			const { rows } = await alunosService.update({ body: req.body, id: id });

			return res.status(200).send(Helper.ResponseData(200, null, null, rows));
		} catch (error) {
			return res.status(500).send(Helper.ResponseData(500, null, error, null));
		}
	}

	static async delete(req, res) {
		const { id } = req.params;

		try {
			const { rows } = await alunosService.getOneById({ id: id });

			if (rows.length === 0) {
				return res
					.status(404)
					.send(Helper.ResponseData(404, "Aluno not found", null, null));
			} else {
				await alunosService.delete({ id: id });

				return res.status(200).send(Helper.ResponseData(200, null, null, null));
			}
		} catch (error) {
			return res.status(500).send(Helper.ResponseData(500, null, error, null));
		}
	}
}

export default AlunosController;
