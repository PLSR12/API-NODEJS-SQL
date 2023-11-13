import database from "../database/connection.js";
const client = await database();

class AlunosService {
	async getAll() {
		const response = await client.query("SELECT * FROM aluno");
		return response;
	}
}

export default AlunosService;
