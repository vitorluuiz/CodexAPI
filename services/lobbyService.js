const Lobby = require('../models/lobby');

async function getLobbyByCode(code) {
    try {
        // O Mongoose permite consultas encadeadas e muito legíveis
        return await Lobby.find({ code: new RegExp(code, 'i') }).exec();
    } catch (error) {
        throw new Error('Erro ao consultar o banco de dados');
    }
}

async function getLobbys() {
    try {
        return await Lobby.find().exec();
    } catch (error) {
        throw new Error('Erro ao consultar o banco de dados');
    }
}

module.exports = { getLobbyByCode, getLobbys };