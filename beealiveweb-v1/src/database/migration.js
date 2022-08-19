import { conn } from "db.js";

async function up() {
    const sql = `
    CREATE TABLE meliponario (
        codmeliponario INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        descricao TEXT,
        rua TEXT,
        bairro TEXT,
        numero INTEGER,
        caixas INTEGER,
    )
    `;
    
    const db = await conn();

    await db.run(sql);
}

async function down() {
    const sql = `DROP TABLE meliponario`;

    const db = await conn();

    await db.run(sql);
}

module.exports = { up, down };


