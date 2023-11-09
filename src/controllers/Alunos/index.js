import AlunosService from "../../services/AlunosService.js";

const alunosService = new AlunosService();

class AlunosController {
	static async selectAllAlunos(req, res) {
		try {
			const resp = await alunosService.getAll();
			return res.json(resp);
		} catch (err) {
			res.json(err);
			console.log(err);
		}
	}
}

export default AlunosController;
