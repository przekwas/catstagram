import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { users } from '../../db';
import { generateHash, signToken } from '../../utils';
import type { IRegisterBody } from '../../types/express';

const router = Router();

router.post('/', async (req, res, next) => {
	try {
		const newUser: IRegisterBody = req.body;
		newUser.id = uuidv4();
		newUser.password = await generateHash(newUser.password);
		await users.insert(newUser);
		const token = signToken({ userid: newUser.id, role: 1, email: newUser.email });
		res.json(token);
	} catch (err) {
		next(err);
	}
});

export default router;
