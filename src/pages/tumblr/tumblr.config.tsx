import tumblr from 'tumblr.js';
import * as React from 'react';

// interface clientProps {
//     credentials: {
//         consumer_key: string,
//         consumer_secret: string,
//         token: string,
//         token_secret: string
//     },
//     returnPromises: boolean
// }

// const client = tumblr.createClient({
//     credentials: {
//         consumer_key: '',
//         consumer_secret: '',
//         token: '',
//         token_secret: ''
//     },
//     returnPromises: true,
// });

// Authenticate via OAuth
var client = tumblr.createClient({
  consumer_key: 'GVHbLL7yAG1gfZdOwvO6s5IVMgePLkiK9YtovnRyLCqXXrKcLz',
  consumer_secret: 'Ao4HEcNMUPDZUZ6nZvWk4pem2Qfjt9ZcVuSue91DYMchl6AhBT',
  token: '3e6UGdXNV6ozNAxsgpZc4gTTobqsTmCYu8G291j4CmfQw5TM2b',
  token_secret: '7gajdBiOvOcpPpitw63pnyt4ABeRFfTS5jPj8vwy3knanBBsQa'
});

// Make the request
const request = client.userDashboard(function (err, data) {
    // ...
});

const Tumblr: React.FC = () => {
    console.log(request);
    return (
        <div className='box p-4'>
            tumblr
        </div>
    )
}

export default Tumblr;