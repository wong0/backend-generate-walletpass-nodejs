import express from 'express';
import { createLoyaltyCardPass } from '../../CouponPassCreator';

var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'World' });
});

// ReferenceError: regeneratorRuntime is not defined

router.get('/wallet-pass', async (req, res, next) => {
  //code to perform particular action.
  //To access POST variable use req.body()methods.
  console.log('req.body', req.body);
  
  // extract user details
  const {
    name,
    email,
    phone,
    policyNumber
  } = req.body;

  const body = await (await createLoyaltyCardPass(name, email, phone, policyNumber)).asBuffer();
  res.type('application/vnd.apple.pkpass');
  res.send(body)
});

export default router;
