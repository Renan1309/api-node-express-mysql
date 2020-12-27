const moment = require('moment');
const connection = require('../infrastructure/connection');

class Atendimentos {

    adiciona(atendimento , res) {

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        
        const sql = 'INSERT INTO Atendimentos SET ?';
        connection.query(sql , atendimentoDatado, (erro , result)=>{
            if(erro){
                res.status(400).json(erro);
            }else{
               res.status(201).json(result);
            }
        })
    }

}

module.exports = new Atendimentos;