var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  getUserInfo: () => getUserInfo
});
function cleanHeader(headerName) {
  return headerName.replace("x-replit-user-", "").replace(/-(.)/g, function(_, group1) {
    return group1.toUpperCase();
  });
}
const getUserInfo = (req) => {
  let { headers } = req;
  let userInfo = {};
  for (let headerName of Object.keys(headers)) {
    const headerValue = headers[headerName];
    if (headerName.startsWith("x-replit-") && headerValue) {
      const cleanHeaderName = cleanHeader(headerName);
      if (cleanHeaderName === "roles" || cleanHeaderName === "teams") {
        userInfo[cleanHeaderName] = headerValue.split(",");
      } else {
        userInfo[cleanHeaderName] = headerValue;
      }
    }
  }
  if (Object.keys(userInfo).length === 0 && userInfo.constructor === Object) {
    return null;
  }
  return userInfo;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getUserInfo
});
//# sourceMappingURL=index.js.map
