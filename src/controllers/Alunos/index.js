import AlunosService from "../../services/AlunosService.js";

const alunosService = new AlunosService();

class AlunosController {
	static async selectAllAlunos(req, res) {
		try {
			const { rows } = await alunosService.getAll();
			return res.json(rows);
		} catch (err) {
			res.json(err);
			console.log(err);
		}
	}
}

export default AlunosController;
