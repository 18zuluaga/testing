import { Request, Response } from 'express';
import pool from '../data-access/data';
import { UserRepository } from '../data-access/userModels';

export class Usercontroller {
    static async getAll(_: Request, res: Response){
        const userResposnse =  new UserRepository(pool);
        const allUsers = await userResposnse.getAll();
        res.status(200).json({
          menssage: 'success',
          data: allUsers,
        });
    }
}

// export const getUserById = async (req: Request, res: Response) => {
//   const id = parseInt(req.params.id);
//   try {
//     const [rows]: [QueryResult, FieldPacket[]] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
//     if (rows.length > 0) {
//       res.json(rows[0]);
//     } else {
//       res.status(404).send('User not found');
//     }
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// };

// export const createUser = async (req: Request, res: Response) => {
//   const newUser: User = req.body;
//   try {
//     const [result] = await pool.query('INSERT INTO users SET ?', [newUser]);
//     res.status(201).json({ id: (result as any).insertId, ...newUser });
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// };