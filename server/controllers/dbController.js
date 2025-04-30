const pool = require('../db');

const checkDbConnection = async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ success: true, time: result.rows[0].now });
    } catch (error) {
        console.error('Error con la base de datos:',error);
        res.status(500).json({ success: false, error: 'Error con la base de datos' });
    }
};

module.exports = { checkDbConnection };