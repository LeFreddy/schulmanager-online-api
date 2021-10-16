/**
 * Interface for the SMO Api.
 */
export default class SchulmanagerAPI {
    #private;
    /**
* Init the SMO Api
* @param {string} token - The JWS of your SMO Login.
*/
    constructor(token: string);
    /**
 * Get an overview of all Letters.
 * @return {{title: string, createdAt: Date, id: number, read: Date}[]} An Array of the letters
 */
    getLetters(): Promise<{
        title: string;
        createdAt: Date;
        id: number;
        read: Date;
    }[]>;
}
//# sourceMappingURL=main.d.ts.map