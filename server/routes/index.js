import express from 'express';
import fs from 'fs';

import { createLoyaltyCardPass } from '../../CouponPassCreator';
import { createInsuranceMembershipPass } from '../../InsuranceMembershipPassCreator';

var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'World' });
});

// ReferenceError: regeneratorRuntime is not defined

router.post('/insurance-membership-pass', async (req, res, next) => {
  // code to perform particular action
  // To access POST variable use req.body() methods.
  console.log('req.body', req.body);

  // extract user details
  const {
    familyName,
    givenNames,
    sex,
    nationality,
    idDocType,
    policyNumber,

    organizationName,
    description,
    logoText,
    serialNumber
  } = req.body;

  console.log(
    'familyName', familyName,
    'givenNames', givenNames,
    'sex', sex,
    'nationality', nationality,
    'idDocType', idDocType,
    'policyNumber', policyNumber,

    'organizationName', organizationName,
    'description', description,
    'logoText', logoText,
    'serialNumber', serialNumber
  )

  const body = await (await createInsuranceMembershipPass(
    familyName,
    givenNames,
    sex,
    nationality,
    idDocType,
    policyNumber,

    organizationName,
    description,
    logoText,
    serialNumber
  )).asBuffer();

  res.json({
    success: true,
  });

});

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

  const body = await (await createLoyaltyCardPass(
    organizationName, 
    description, 
    logoText, 
    serialNumber
  )).asBuffer();
  // res.type('application/vnd.apple.pkpass');
  // res.type('application/json');

  res.json({
    success: true,
  });
});

/**
 * Input: CSV
 * Output: Wallet Passes
 */
router.post('/wallet-passes', async (req, res, next) => {
  console.log('/wallet-passes', 'req.body', req.body);

  const data = req.body;

  let responseBody = [];

  data.forEach(async ({organizationName, description, logoText, serialNumber}) => {
    // write pass to files
    // each file is named with "serialNumber"

    const fileContent = await (await createLoyaltyCardPass(organizationName, description, logoText, serialNumber)).asBuffer();

    const filename = `${organizationName}-${serialNumber}.pkpass`;
    console.log('filename', filename);
    responseBody = [
      ...responseBody,
      filename,
    ];

    await fs.writeFile(
      filename, 
      fileContent, 
      function (err) {
        if (err) return console.log(err);
      }
    );
  });

  res.send({
    success: true, 
    data: responseBody,
  });
});

// router.post('/wallet-passes', async (req, res, next) => {
  // console.log('/wallet-passes', 'req.body', req.body);

  // // the buffer here containes your file data in a byte array 
  // if (!req.file) {
  //   console.log('req.file missing');
  //   return;
  // }

  // var csvBuffer = req.body;

  // console.log('csv', csvBuffer);

  // console.log('Transform CSV to JSON array');

  // const csv = require('csvtojson');

  // csv({
  //   noheader:true,
  //   output: "csv"
  // })
  // .fromString(csvBuffer)
  // .then((csvRow)=>{ 
  //   console.log('csvRow', csvRow);
  // });

// });

export default router;
