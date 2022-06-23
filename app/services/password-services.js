import * as config from '../config/api-config';
import axios from 'axios';

/*
    Função para realizar a requisição POST
    para o serviço de recuperação de senha de usuário
*/
export const postPassword = (data) => {
    return axios.post(`${config.getApiContatos()}/password`, data)
        .then(
            response => {
                return response.data;
            }
        )
}