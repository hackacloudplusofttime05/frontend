import axios from "axios"

const apiUrl = 'https://prod-oic-axhfa7gww692-px.integration.us-phoenix-1.ocp.oraclecloud.com/ic/api/integration'
const apiV1 = '/v1/flows/rest'
const token = "aGFja2FjbG91ZHBsdXNvZnR0aW1lMDVAZ21haWwuY29tOkhhY2thY2xvdWRwbHVzb2Z0MDUq"

const api = axios.create({
    baseURL: apiUrl + apiV1
})

const options = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Basic ${token}`
    }
}

export { api, options }