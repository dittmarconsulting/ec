/**
 * this file contains all the endpoints
 *
 * Created by Tom on xx/xx/xx
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
