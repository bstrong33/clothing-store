module.exports = {
    getMenShirts: async (req, res) => {
        const db = req.app.get('db');
        const clothes = await db.get_men_shirts();
        return res.status(200).send({clothes, message: "Got clothes successfully!"})
    }
}