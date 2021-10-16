/**
 * Interface for the SMO Api.
 *
 * @class
 */
export declare class SchulmanagerAPI {
    #private;
    /**
* Init the SMO Api
* @exports schulmanager-online-api.default
* @param {string} token - The JWS of your SMO Login.
*/
    constructor(token: string);
    /**
 * Get an overview of all Letters.
 * @return {Object} An Array of the letters
 */
    getLetters(): Promise<{
        title: string;
        createdAt: Date;
        id: number;
        read: Date;
    }[]>;
}
//# sourceMappingURL=main.d.ts.map