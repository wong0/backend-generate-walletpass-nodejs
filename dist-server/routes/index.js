"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

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
var _default = router;
exports["default"] = _default;