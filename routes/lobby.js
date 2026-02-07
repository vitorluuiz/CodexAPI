const express = require("express");

const router = express.Router();

const { getLobbys, getLobbyByCode } = require("../services/lobbyService");

router.get("/", async (req, res) => {
    res.json(await getLobbys());
});

router.get("/:code", async (req, res) => {
    const { code } = req.params;
    res.json(await getLobbyByCode(code));
});

module.exports = router;