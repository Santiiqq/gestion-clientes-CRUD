import axios from "axios";

const CLIENTE_BASE_REST_API = "http://localhost:8080/api/v1/clientes";


class ClienteService{

getALlClientes(){
    return axios.get(CLIENTE_BASE_REST_API)
}

createCliente(cliente){
    return axios.post(CLIENTE_BASE_REST_API, cliente)
}

getClienteById(clienteId){
    return axios.get(CLIENTE_BASE_REST_API +  '/' + clienteId)
}

updateCliente(clienteId,cliente){
    return axios.put(CLIENTE_BASE_REST_API+ '/' + clienteId,cliente)
}

deleteCliente(clienteId){
    return axios.delete(CLIENTE_BASE_REST_API + '/' + clienteId);
}

}

export default new ClienteService();