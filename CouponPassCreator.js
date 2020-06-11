const Template = require("@walletpass/pass-js");
const fs = require("fs"); 

async function createLoyaltyCardPass(name, email, phone, policyNumber) {
  const template = new Template.Template("storeCard", {
    passTypeIdentifier: "pass.com.example.firstwalletpass",
    serialNumber: "E5982H-I2",
    teamIdentifier: "L8JW59293P",
    webServiceURL: "https://example.com/passes/",
    authenticationToken : "vxwxd7J8AlNNFPS8k0a0FfUFtq0ewzFdc",
    backgroundColor: "red",
    sharingProhibited: true,
    organizationName: "Trove",
    barcode : {
        message : "123456789",
        format : "PKBarcodeFormatPDF417",
        messageEncoding : "iso-8859-1"
    },
    storeCard : {
        // Optional. Fields to be displayed prominently on the front of the pass.
        primaryFields : [
          {
            key : "offer",
            label : "Any premium dog food",
            value : "20% off"
          }
        ],
        auxiliaryFields : [
          {
            key : "expires",
            label : "EXPIRES",
            value : "2020-04-24T10:00-05:00",
            isRelative : true,
            dateStyle : "PKDateStyleShort"
          }
        ],
        backFields : [
          {
            key: "backfield-key",
            label: "backfield-label",
            value: "backfield-value"
          }
        ]
    },
    organizationName : "Paw Planet",
    description : "Paw Planet Coupon",
    logoText : "Paw Planet",
    foregroundColor : "rgb(255, 255, 255)",
    backgroundColor : "rgb(206, 140, 53)",
  }, null, null, null);

  const iconPngFileBuffer = './images/icon.png';
  const pathToLogoPNGfile = './images/logo.png';

  await template.images.add("icon", iconPngFileBuffer);
  await template.images.add("logo", pathToLogoPNGfile);

  const cert = "./certificates/FirstWalletPassCertificate.pem";
  const password = "2!@wdW";
  await template.loadCertificate(
    cert,
    password
  );

  const pass = template.createPass({
    serialNumber: "123456",
    description: "i am a description",
  });

  pass.primaryFields.add({ key: "time", label: "Time", value: "10:00AM" });

  return pass;
}

async function createCouponPass() {
    // console.log('Template', Template);

    // or create it manually
    const template = new Template.Template("coupon", {
        passTypeIdentifier: "pass.com.example.firstwalletpass",
        serialNumber : "E5982H-I2",
        teamIdentifier: "L8JW59293P",
        webServiceURL : "https://example.com/passes/",
        authenticationToken : "vxwxd7J8AlNNFPS8k0a0FfUFtq0ewzFdc",
        backgroundColor: "red",
        sharingProhibited: true,
        organizationName: "Trove",
        barcode : {
            message : "123456789",
            format : "PKBarcodeFormatPDF417",
            messageEncoding : "iso-8859-1"
        },
        coupon : {
            primaryFields : [
              {
                key : "offer",
                label : "Any premium dog food",
                value : "20% off"
              }
            ],
            auxiliaryFields : [
              {
                key : "expires",
                label : "EXPIRES",
                value : "2020-04-24T10:00-05:00",
                isRelative : true,
                dateStyle : "PKDateStyleShort"
              }
            ]
        },
        organizationName : "Paw Planet",
        description : "Paw Planet Coupon",
        logoText : "Paw Planet",
        foregroundColor : "rgb(255, 255, 255)",
        backgroundColor : "rgb(206, 140, 53)",
    }, null, null, null);

    const iconPngFileBuffer = './images/icon.png';
    const pathToLogoPNGfile = './images/logo.png';

    await template.images.add("icon", iconPngFileBuffer);
    await template.images.add("logo", pathToLogoPNGfile);

    const cert = "./certificates/FirstWalletPassCertificate.pem";
    const password = "2!@wdW";
    await template.loadCertificate(
        cert,
        password
    );

    const pass = template.createPass
    ({
        serialNumber: "123456",
        description: "i am a description",
    });

    pass.primaryFields.add({ key: "time", label: "Time", value: "10:00AM" });
}


// To Test
// const pass = createCouponPass();
// const buf = await pass.asBuffer();
// fs.writeFileSync("./pathToPass.pkpass", buf);

exports.createCouponPass = createCouponPass;
exports.createLoyaltyCardPass = createLoyaltyCardPass;