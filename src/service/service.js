import http from "../http-common";

const BASE_API = "/api/book";

class Service {

    createBook(v) {
        return http.post(BASE_API + "/create", v);
    }

    getBook(id) {
        return http.get(BASE_API + `/get/${id}`);
    }

    getAllBook(page, size) {
        return http.get(BASE_API + `/get/all/?page=${page}&size=${size}`);
    }

    updateBook(id, v) {
        return http.put(BASE_API + `/update/${id}`, v);
    }

    deleteBook(id) {
        return http.delete(BASE_API + `/delete/${id}`);
    }

}

export default new Service();