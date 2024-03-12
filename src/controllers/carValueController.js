function calculateCarValue(req, res) {
    try {
        const { model, year } = req.body;

        if (!model || typeof model !== 'string' || !year || typeof year !== 'number') {
            return res.status(400).json({ error: 'Invalid input values' });
        }

        const formattedModel = model.replace(/[^a-zA-Z]/g, '').toLowerCase();
        let carValue = 0;
        for (let i = 0; i < formattedModel.length; i++) {
            carValue += formattedModel.charCodeAt(i) - 96;
        }
        carValue = (carValue * 100) + year;

        

        return res.json({ car_value: carValue });
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred while processing the request' });
    }
}


module.exports = calculateCarValue