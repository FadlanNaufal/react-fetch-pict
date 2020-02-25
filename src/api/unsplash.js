 import axios from 'axios'

 export default axios.create({
    headers: {
        baseUrl : 'https://api.unsplash.com',
        Authorization : 
            'Client-ID R1I0wt-zn35awzq1mSg1T1MSvbKRtXX13CfP1zjyz_c'
    }
 })