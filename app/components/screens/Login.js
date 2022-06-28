import React from "react";
import { ScrollView, View, Text, Alert } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as validations from '../../validations/login-validation';
import * as services from '../../services/login-services';
import * as helpers from '../../helpers/auth-helper';

export default function Login({ navigation }) {

    const {
        control,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm();

    const onSubmit = (data) => {
        services.postLogin(data)
            .then(
                (result) => {
                    reset({ login : '', senha : '' });
                    helpers.signIn(result);
                    Alert.alert('Parabéns', 'Autenticação realizada com sucesso.');

                    navigation.navigate('consulta-contatos');
                }
            )
            .catch(
                (e) => {
                    if (e.response.status == 401) {
                        Alert.alert('Acesso Negado.', e.response.data.message);
                    }
                    else {
                        Alert.alert('Erro.', 'Não foi possível realizar a operação.')
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
                    title="Acessar Conta"
                    subtitle="Entre com as suas credenciais de acesso"
                />
                <Card.Content>

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
                            errors.email && <Text style={{ color: '#BB2124' }}>
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
                            errors.senha && <Text style={{ color: '#BB2124' }}>
                                {errors.senha.message}
                            </Text>
                        }

                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Button mode="contained" onPress={
                            handleSubmit(onSubmit)
                        }>
                            Acessar Conta
                        </Button>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Button mode="outlined" onPress={
                            () => navigation.navigate('register')
                        }>
                            Crie sua Conta
                        </Button>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Button mode="outlined" onPress={
                            () => navigation.navigate('password')
                        }>
                            Esqueci minha senha
                        </Button>
                    </View>

                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                        <Text>
                            Aplicativo agenda v1.0
                        </Text>
                    </View>

                </Card.Content>
            </Card>
        </ScrollView>
    )
}