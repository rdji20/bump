const mongoose = require('mongoose');

main().catch(err => console.log(err));

let db = {};

async function main() {
    await mongoose.connect('mongodb+srv://Neema:brainiacs@mycluster.sgj94.mongodb.net/Bump?retryWrites=true&w=majority');

    const userSchema = new mongoose.Schema({
        deviceId: String,
        savedCards: Array,
        myCards: Array,
        dislikedCards: Array
    });

    const cardSchema = new mongoose.Schema({
        index: Number,
        card_id: Number,
        title: String,
        description: String,
        when: String,
        where: String,
        category: String,
        tags: String,
        image: String, //1.png
    })

    db.User = mongoose.model('User', userSchema);
    db.Card = mongoose.model('Card', cardSchema);
}

module.exports = db;