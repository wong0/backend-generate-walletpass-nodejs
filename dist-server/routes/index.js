"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

var _CouponPassCreator = require("../../CouponPassCreator");

var _InsuranceMembershipPassCreator = require("../../InsuranceMembershipPassCreator");

var router = _express["default"].Router();
/* GET home page. */


router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'World'
  });
}); // ReferenceError: regeneratorRuntime is not defined

router.post('/insurance-membership-pass',
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, familyName, givenNames, sex, nationality, idDocType, policyNumber, organizationName, description, logoText, serialNumber, body;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // code to perform particular action
            // To access POST variable use req.body() methods.
            console.log('req.body', req.body); // extract user details

            _req$body = req.body, familyName = _req$body.familyName, givenNames = _req$body.givenNames, sex = _req$body.sex, nationality = _req$body.nationality, idDocType = _req$body.idDocType, policyNumber = _req$body.policyNumber, organizationName = _req$body.organizationName, description = _req$body.description, logoText = _req$body.logoText, serialNumber = _req$body.serialNumber;
            console.log('familyName', familyName, 'givenNames', givenNames, 'sex', sex, 'nationality', nationality, 'idDocType', idDocType, 'policyNumber', policyNumber, 'organizationName', organizationName, 'description', description, 'logoText', logoText, 'serialNumber', serialNumber);
            _context.next = 5;
            return (0, _InsuranceMembershipPassCreator.createInsuranceMembershipPass)(familyName, givenNames, sex, nationality, idDocType, policyNumber, organizationName, description, logoText, serialNumber);

          case 5:
            _context.next = 7;
            return _context.sent.asBuffer();

          case 7:
            body = _context.sent;
            res.json({
              success: true
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/wallet-pass',
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res, next) {
    var _req$body2, organizationName, description, logoText, serialNumber, body;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //code to perform particular action.
            //To access POST variable use req.body()methods.
            console.log('req.body', req.body); // extract user details

            _req$body2 = req.body, organizationName = _req$body2.organizationName, description = _req$body2.description, logoText = _req$body2.logoText, serialNumber = _req$body2.serialNumber;
            _context2.next = 4;
            return (0, _CouponPassCreator.createLoyaltyCardPass)(organizationName, description, logoText, serialNumber);

          case 4:
            _context2.next = 6;
            return _context2.sent.asBuffer();

          case 6:
            body = _context2.sent;
            // res.type('application/vnd.apple.pkpass');
            // res.type('application/json');
            res.json({
              success: true
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
/**
 * Input: CSV
 * Output: Wallet Passes
 */

router.post('/wallet-passes',
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(req, res, next) {
    var data, responseBody;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log('/wallet-passes', 'req.body', req.body);
            data = req.body;
            responseBody = [];
            data.forEach(
            /*#__PURE__*/
            function () {
              var _ref4 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee3(_ref5) {
                var organizationName, description, logoText, serialNumber, fileContent, filename;
                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        organizationName = _ref5.organizationName, description = _ref5.description, logoText = _ref5.logoText, serialNumber = _ref5.serialNumber;
                        _context3.next = 3;
                        return (0, _CouponPassCreator.createLoyaltyCardPass)(organizationName, description, logoText, serialNumber);

                      case 3:
                        _context3.next = 5;
                        return _context3.sent.asBuffer();

                      case 5:
                        fileContent = _context3.sent;
                        filename = "".concat(organizationName, "-").concat(serialNumber, ".pkpass");
                        console.log('filename', filename);
                        responseBody = [].concat((0, _toConsumableArray2["default"])(responseBody), [filename]);
                        _context3.next = 11;
                        return _fs["default"].writeFile(filename, fileContent, function (err) {
                          if (err) return console.log(err);
                        });

                      case 11:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x10) {
                return _ref4.apply(this, arguments);
              };
            }());
            res.send({
              success: true,
              data: responseBody
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}()); // router.post('/wallet-passes', async (req, res, next) => {
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

var _default = router;
exports["default"] = _default;