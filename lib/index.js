"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserInfo = void 0;
function cleanHeader(headerName) {
  return headerName.replace("x-replit-user-", "").replace(/-(.)/g, function(_, group1) {
    return group1.toUpperCase();
  });
}
var getUserInfo = function(req) {
  var headers = req.headers;
  var userInfo = {};
  for (var _i = 0, _a = Object.keys(headers); _i < _a.length; _i++) {
    var headerName = _a[_i];
    var headerValue = headers[headerName];
    if (headerName.startsWith("x-replit-") && headerValue) {
      var cleanHeaderName = cleanHeader(headerName);
      //check if property is meant to be an array
      if (cleanHeaderName === 'roles' || cleanHeaderName === 'teams') {
        userInfo[cleanHeaderName] = headerValue.split(',');
      }
      else {
        userInfo[cleanHeaderName] = headerValue;
      }
    }
  }
  //check if userInfo is empty
  if (Object.keys(userInfo).length === 0 && userInfo.constructor === Object) {
    return null;
  }
  return userInfo;
};
exports.getUserInfo = getUserInfo;
