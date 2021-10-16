"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getLetters_1 = __importDefault(require("./methods/getLetters"));
/**
 * Interface for the SMO Api.
 */
class SchulmanagerAPI {
    #token;
    /**
* Init the SMO Api
* @param {string} token - The JWS of your SMO Login.
*/
    constructor(token) {
        this.#token = token;
    }
    /**
 * Get an overview of all Letters.
 * @return {{title: string, createdAt: Date, id: number, read: Date}[]} An Array of the letters
 */
    getLetters() {
        return (0, getLetters_1.default)({ token: this.#token });
    }
}
exports.default = SchulmanagerAPI;
//# sourceMappingURL=main.js.map