import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction} from 'express';

const authenticateToken = (req: Request, res:Response, next: NextFunction) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({message: 'Token não fornecido'});
    }

    jwt.verify(token, 'token', (err, decoded) => {
        if(err) {
            return res.status(403).json({ message: 'Token inválido'});
        }

        req.body._id = (decoded as any)._id;

        next();
    });
};

export default authenticateToken;