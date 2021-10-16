"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const generateStandartConfig_1 = __importDefault(require("../generateStandartConfig"));
async function getLetters({ token }) {
    const data = JSON.stringify({
        "bundleVersion": `c2a60433dcd7c3fc6ee1`,
        "requests": [
            {
                "moduleName": `letters`,
                "endpointName": `get-letters`
            }
        ]
    });
    const config = (0, generateStandartConfig_1.default)({ token, data });
    const res = await axios_1.default.request(config);
    const resData = res.data;
    return resData.results[0].data.map(e => { return { title: e.title, createdAt: e.createdAt, id: e.id, read: e.studentStatuses[0].readTimestamp }; });
}
exports.default = getLetters;
//# sourceMappingURL=getLetters.js.map