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

var router = _express["default"].Router();
/* GET home page. */


router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'World'
  });
}); // ReferenceError: regeneratorRuntime is not defined

router.post('/wallet-pass',
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, organizationName, description, logoText, serialNumber, body;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //code to perform particular action.
            //To access POST variable use req.body()methods.
            console.log('req.body', req.body); // extract user details

            _req$body = req.body, organizationName = _req$body.organizationName, description = _req$body.description, logoText = _req$body.logoText, serialNumber = _req$body.serialNumber;
            _context.next = 4;
            return (0, _CouponPassCreator.createLoyaltyCardPass)(organizationName, description, logoText, serialNumber);

          case 4:
            _context.next = 6;
            return _context.sent.asBuffer();

          case 6:
            body = _context.sent;
            res.type('application/vnd.apple.pkpass');
            res.send(body);

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
/**
 * Input: CSV
 * Output: Wallet Passes
 */

router.post('/wallet-passes',
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(req, res, next) {
    var data, responseBody;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log('/wallet-passes', 'req.body', req.body);
            data = req.body;
            responseBody = [];
            _context3.next = 5;
            return data.forEach(
            /*#__PURE__*/
            function () {
              var _ref3 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee2(_ref4) {
                var organizationName, description, logoText, serialNumber, fileContent, str;
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        organizationName = _ref4.organizationName, description = _ref4.description, logoText = _ref4.logoText, serialNumber = _ref4.serialNumber;
                        _context2.next = 3;
                        return (0, _CouponPassCreator.createLoyaltyCardPass)(organizationName, description, logoText, serialNumber);

                      case 3:
                        _context2.next = 5;
                        return _context2.sent.asBuffer();

                      case 5:
                        fileContent = _context2.sent;

                        _fs["default"].writeFile("".concat(organizationName, "-").concat(serialNumber, ".pass"), fileContent, function (err) {
                          if (err) return console.log(err);
                        });

                        str = "".concat(organizationName, "-").concat(serialNumber, ".pass");
                        console.log(str);
                        responseBody = [].concat((0, _toConsumableArray2["default"])(responseBody), [str]);

                      case 10:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x7) {
                return _ref3.apply(this, arguments);
              };
            }());

          case 5:
            res.send({
              success: true,
              data: responseBody
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
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