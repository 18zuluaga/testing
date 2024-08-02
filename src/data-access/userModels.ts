import { Pool } from "mysql2/promise";


export class UserRepository {
    constructor(private pool: Pool) {}
    async getAll() {
        try{
            const [rows] = await this.pool.query('SELECT * FROM users');
            return rows;
        }catch(err){
            console.warn(err);
        }
    }
}