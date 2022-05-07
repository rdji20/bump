var express = require('express');
var router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, req.body.cardId + '-' + file.originalname);
  }
})

const upload = multer({storage: storage});


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

router.post('/image', upload.single('cardImage'), (req, res, next) => {
  res.send('Success');
});

module.exports = router;
