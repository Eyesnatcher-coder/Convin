import axios from "axios";

const fetch_logins = async () => {
    const res = await axios.get("http://localhost:3001/yourbuckets")
    return res.data;
}

const logins = fetch_logins()
// console.log(logins);

export { logins };