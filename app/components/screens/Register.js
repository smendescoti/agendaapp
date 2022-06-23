import React from "react";
import { ScrollView, View, Text, Alert } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as validations from '../../validations/register-validation';
import * as services from '../../services/register-services';

export default function Register({ navigation }) {

    //estrutura do formulário
    const {
        control,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm();

    //função executada no SUBMIT do formulário
    const onSubmit = (data) => {

        services.postRegister(data)
            .then(
                result => {

                    reset({
                        nome: '',
                        email: '',
                        senha: '',
                        senhaConfirmacao: ''
                    })

                    Alert.alert('Sucesso!', `Parabéns ${result.nome}, sua conta foi criada com sucesso!`);
                }
            )
            .catch(
                e => {
                    if (e.response.status == 422) {
                        Alert.alert('Erro.', e.response.data.message);
                    }
                    else {
                        Alert.alert('Erro.', 'Não possível realizar a operação.')
                    }
                }
            )
    }

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <Card>
                <Card.Cover
                    source={{
                        uri: 'https://cdn.consumidormoderno.com.br/wp-content/uploads/2021/06/Business-Performance.jpg'
                    }}
                />
                <Card.Title
                    title="Crie sua Conta"
                    subtitle="Preencha os campos para criar uma conta"
                />
                <Card.Content>

                    <View style={{ marginBottom: 20 }}>

                        <Controller
                            control={control}
                            name="nome"
                            defaultValue=""
                            rules={{
                                validate: validations.nomeValidation
                            }}
                            render={
                                ({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        label="Informe seu nome:"
                                        keyboardType="default"
                                        mode="flat"
                                        placeholder="Ex: João Carlos"
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                    />
                                )
                            }
                        />

                        {
                            errors.nome && <Text style={{ color: '#bb2124' }}>
                                {errors.nome.message}
                            </Text>
                        }

                    </View>

                    <View style={{ marginBottom: 20 }}>

                        <Controller
                            control={control}
                            name="email"
                            defaultValue=""
                            rules={{
                                validate: validations.emailValidation
                            }}
                            render={
                                ({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        label="Email de acesso:"
                                        keyboardType="email-address"
                                        mode="flat"
                                        placeholder="Ex: joaocarlos@gmail.com"
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                    />
                                )
                            }
                        />

                        {
                            errors.email && <Text style={{ color: '#bb2124' }}>
                                {errors.email.message}
                            </Text>
                        }

                    </View>

                    <View style={{ marginBottom: 20 }}>

                        <Controller
                            control={control}
                            name="senha"
                            defaultValue=""
                            rules={{
                                validate: validations.senhaValidation
                            }}
                            render={
                                ({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        label="Senha de acesso:"
                                        keyboardType="default"
                                        mode="flat"
                                        placeholder="Digite aqui"
                                        secureTextEntry={true}
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                    />
                                )
                            }
                        />

                        {
                            errors.senha && <Text style={{ color: '#bb2124' }}>
                                {errors.senha.message}
                            </Text>
                        }

                    </View>

                    <View style={{ marginBottom: 20 }}>

                        <Controller
                            control={control}
                            name="senhaConfirmacao"
                            defaultValue=""
                            rules={{
                                validate: validations.senhaConfirmacaoValidation
                            }}
                            render={
                                ({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        label="Confirme sua senha:"
                                        keyboardType="default"
                                        mode="flat"
                                        placeholder="Digite aqui"
                                        secureTextEntry={true}
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                    />
                                )
                            }
                        />

                        {
                            errors.senhaConfirmacao && <Text style={{ color: '#bb2124' }}>
                                {errors.senhaConfirmacao.message}
                            </Text>
                        }

                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Button mode="contained" onPress={
                            handleSubmit(onSubmit)
                        }>
                            Realizar Cadastro
                        </Button>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Button mode="outlined" onPress={
                            () => navigation.navigate('login')
                        }>
                            Acesse sua Conta
                        </Button>
                    </View>

                </Card.Content>
            </Card>
        </ScrollView>
    )
}