import http from "../http-common";
import httpCommon from "../http-common";

const create = data =>{
    return http.post("/usuarios", data)
}

export default{
    create
};