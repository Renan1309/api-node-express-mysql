const Atendimento = require('../models/Atendimentos'); 

module.exports = app => {
 
    app.get('atendimentos', (req , res) => res.send('rota de atendimentos'));

    app.post('atendimentos', (req , res) => {
        const atendimento = req.body;  
        Atendimento.adiciona(atendimento, res);
    });

}