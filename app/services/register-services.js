import * as config from '../config/api-config';
import axios from 'axios';

/*
    Função para realizar a requisição POST
    para o serviço de cadastro de usuário
*/
export const postRegister = (data) => {
    return axios.post(`${config.getApiContatos()}/account`, data)
        .then(
            response => {
                return response.data;
            }
        )
}