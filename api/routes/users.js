var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const deviceId = getDeviceId(req);
    const User = req.db.User;
    const currentUser = await User.findOne({ deviceId: deviceId }).exec();

    if (currentUser === null) {
      const newUser = new User({
        deviceId: deviceId,
        savedCards: [],
        myCards: [],
        dislikedCards: []
      });
      newUser.save();
      res.json({ status: 'success', payload: newUser });
    }

    res.json({status: 'success', payload: currentUser });

  } catch (err) {
    console.log(JSON.stringify(err));
  }
});

router.patch('/add', async (req, res, next) => {
  try {
   const User = req.db.User; 
   const deviceId = getDeviceId(req);
   const cardId = getCardId(req);
   const collection = getCollection(req);

   let update = {};
   update[collection] = cardId;

   await User.findOneAndUpdate({
    deviceId: deviceId
   }, {
     $push: update
   });
   res.json({ status: 'success'});
  } catch (err) {
    res.json({ status: 'error', error: err});
  }
});

router.patch('/remove', async (req, res, next) => {
  try {
   const User = req.db.User; 
   const deviceId = getDeviceId(req);
   const cardId = getCardId(req);
   const collection = getCollection(req);

   let update = {};
   update[collection] = cardId;

   await User.findOneAndUpdate({
    deviceId: deviceId
   }, {
     $pull: update
   });
   res.json({ status: 'success'});
  } catch (err) {
    res.json({ status: 'error', error: err});
  }
});

const getDeviceId = (req) => {
    const id = req.query.deviceId;
    if (id === undefined)
      throw new Error('Device ID was undefined');

    return id;
}

const getCardId = (req) => {
    const id = req.body.cardId;
    if (id === undefined)
      throw new Error('Card ID was undefined');

    return Number(id);
}

const getCollection = (req) => {
    const collection = req.body.collection;
    if (collection === undefined)
      throw new Error('Collection was undefined');

    return collection;
}

module.exports = router;
