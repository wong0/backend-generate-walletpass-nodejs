import express from 'express';
import { createLoyaltyCardPass } from '../../CouponPassCreator';

var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'World' });
});

// ReferenceError: regeneratorRuntime is not defined

router.post('/wallet-pass', async (req, res, next) => {
  //code to perform particular action.
  //To access POST variable use req.body()methods.
  console.log('req.body', req.body);
  
  // extract user details
  const {
    organizationName,
    description,
    logoText,
    serialNumber
  } = req.body;

  const body = await (await createLoyaltyCardPass(organizationName, description, logoText, serialNumber)).asBuffer();
  res.type('application/vnd.apple.pkpass');
  res.send(body)
});

export default router;
