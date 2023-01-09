import axios from "axios";

const history_of_transaction = async () => {
    const resp = await axios.get(process.env.REACT_APP_API_URL + "/transaction_history")
     return resp.data   
}

const storage = history_of_transaction()

export {storage};