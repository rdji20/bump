var express = require('express');
var router = express.Router();

/* GET cards listing. */
router.get('/', async function(req, res, next) {
  try {
    const cardId = Number(req.query.cardId);
    const Card = req.db.Card;
    const cardData = await Card.findOne({ card_id: cardId }).exec();
    console.log(cardData);

    if (cardId === undefined) {
      throw new Error('CardId was undefined');
    }

    res.json({status: 'success', payload: cardData });
  } catch (err) {
    res.json({ status: 'error', error: err});
  }
});

router.post('/', async (req, res, next) => {
  try {
    const cardData = { ...req.body };
    const Card = req.db.Card;
    const totalCards = await Card.countDocuments();

    cardData.card_id = totalCards;
    cardData.index = totalCards;

    const newCard = new Card(cardData);
    newCard.save();
    res.json({ status: 'success', payload: cardData});
  } catch (err) {
    res.json({ status: 'error', error: err });
  }
});

module.exports = router;
