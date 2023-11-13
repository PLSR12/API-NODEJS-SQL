import database from "../database/connection.js";
const client = await database();

class AlunosService {
	async getAll() {
		const response = await client.query("SELECT * FROM aluno");
		return response;
	}

	async getOneById(dto) {
		const response = await client.query(
			`SELECT * FROM aluno WHERE id=${dto.id}`
		);
		return response;
	}

	async create(dto) {
		const {
			name,
			cpf,
			observations,
			age,
			money,
			height,
			active,
			brith_date,
			time_hour,
			registered_in,
		} = dto;

		const response = await client.query(
			`INSERT INTO aluno (name,cpf,observations,age,money,height,active,brith_date,time_hour,registered_in) VALUES ('${name}','${cpf}','${observations}',${age},${money},${height},${active},'${brith_date}','${time_hour}', '${registered_in}')`
		);

		return response;
	}

	async update(dto) {
		const {
			name,
			cpf,
			observations,
			age,
			money,
			height,
			active,
			brith_date,
			time_hour,
			registered_in,
		} = dto.body;

		const response = await client.query(
			`UPDATE  aluno SET (name,cpf,observations,age,money,height,active,brith_date,time_hour,registered_in) = ('${name}','${cpf}','${observations}',${age},${money},${height},${active},'${brith_date}','${time_hour}', '${registered_in}') WHERE id=${dto.id}`
		);

		return response;
	}

	async delete(dto) {
		const response = await client.query(`DELETE FROM aluno WHERE id=${dto.id}`);

		console.log(response);

		return response;
	}
}

export default AlunosService;
