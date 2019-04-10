/**
 * this file contains all the endpoints
 *
 * Created by Tom on 10/3/2019
 */

const endpoints = {

    // dev & prod base URL
    baseUrl: 'https://<api URL>/api/v1',

    // get nonce url
    getExampleURL: function() {
        return this.baseUrl + '/example'
    },

}

export default endpoints
