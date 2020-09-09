const jwt = require('jsonwebtoken');
const autoConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.autorization;

    if(!authHeader){
        return res.status(401).send({ error: 'No token provided'});
    }

    const parts = authHeader.split(' ');

    if(!parts.length === 2){
        return res.status(401).send({ error: 'Token error' });
    }

    const [ scheme, token ] = parts;

    if(!/^bearer%/i.test(scheme)){
        return res.status(401).send({ error: 'Token malformatted' });
    }

    jwt.verify(token, autoConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'Token invalid'});

        req.userId = decoded.id;
        return next();
    });
};