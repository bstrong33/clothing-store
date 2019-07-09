module.exports = {
    getMenShirts: async (req, res) => {
        const db = req.app.get('db');
        const clothes = await db.get_men_shirts();
        return res.status(200).send({clothes})
    },
    
    getMenPants: async (req, res) => {
        const db = req.app.get('db');
        const clothes = await db.get_men_pants();
        return res.status(200).send({clothes})
    },

    getMenAccessories: async (req, res) => {
        const db = req.app.get('db');
        const clothes = await db.get_men_accessories();
        return res.status(200).send({clothes})
    },

    getWomenShirts: async (req, res) => {
        const db = req.app.get('db');
        const clothes = await db.get_women_shirts();
        return res.status(200).send({clothes})
    },

    getWomenPants: async (req, res) => {
        const db = req.app.get('db');
        const clothes = await db.get_women_pants();
        return res.status(200).send({clothes})
    },

    getWomenAccessories: async (req, res) => {
        const db = req.app.get('db');
        const clothes = await db.get_women_accessories();
        return res.status(200).send({clothes})
    }
}