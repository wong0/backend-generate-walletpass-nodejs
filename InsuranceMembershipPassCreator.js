const Template = require("@walletpass/pass-js");
const fs = require("fs");

async function createInsuranceMembershipPass(
    familyName,
    givenNames,
    sex,
    nationality,
    idDocType,
    policyNumber,
  
    organizationName,
    description,
    logoText,
    serialNumber,
  ) {
  
    // TODO customize.
    const template = new Template.Template("storeCard", {
      passTypeIdentifier: "pass.com.example.firstwalletpass",
      serialNumber,
      teamIdentifier: "L8JW59293P",
      webServiceURL: "https://example.com/passes/",
      authenticationToken: "vxwxd7J8AlNNFPS8k0a0FfUFtq0ewzFdc",
      backgroundColor: "red",
      sharingProhibited: true,
      organizationName,
      barcode: {
        message: "123456789",
        format: "PKBarcodeFormatPDF417",
        messageEncoding : "iso-8859-1"
      },
      storeCard: {
        primaryFields: [
          {
            key: "familyName",
            label: "Family Name",
            value: "Test Family Name"
          },
          {
            key: "givenNames",
            label: "Given Name",
            value: "Test Given Name",
          },
          {
            key: "sex",
            label: "Sex",
            value: "Test Sex",
          },
          {
            key: "nationality",
            label: "Nationality",
            value: "Test Nationality"
          },
          {
            key: "idDocType",
            label: "Id Document Type",
            value: "343-343-343-343-fsd",
          },
          {
            key: "policyNumber",
            label: "Policy Number",
            value: "9129312-abciskdnxz",
          },
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
      organizationName,
      description,
      logoText,
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
  
  exports.createInsuranceMembershipPass = createInsuranceMembershipPass;