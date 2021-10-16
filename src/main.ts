import getLetters from "./methods/getLetters"

/**
 * Interface for the SMO Api.
 */
export default class SchulmanagerAPI {

	#token: string

	/**
* Init the SMO Api
* @param {string} token - The JWS of your SMO Login.
*/

	constructor(token: string) {
		this.#token = token
	}

	/**
 * Get an overview of all Letters.
 * @return {{title: string, createdAt: Date, id: number, read: Date}[]} An Array of the letters
 */

	getLetters() {
		return getLetters({ token: this.#token })
	}

}