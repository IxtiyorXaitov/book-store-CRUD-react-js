import axios from "axios";

export default axios.create({
    // baseURL: "http://localhost:8080/api",
    baseURL: "https://book-store-crud.herokuapp.com",
    headers: {
        "Content-type": "application/json"
    }
});