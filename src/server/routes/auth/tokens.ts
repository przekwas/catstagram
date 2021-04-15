import { Router } from 'express';
import { checkToken } from '../../middlewares';

const router = Router();

router.get('/validate', checkToken, (req, res) => {
    res.json({ message: 'validated' });
});

export default router;