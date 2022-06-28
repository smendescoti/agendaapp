import React from "react";
import { ScrollView, View, Text, Alert } from "react-native";
import { Card, Button, TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import Header from '../shared/Header';
import * as validations from '../../validations/contato-validation';
import * as services from '../../services/contatos-services';

export default function CadastroContatos({ navigation }) {

    const {
        control,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm();

    const onSubmit = (data) => {
        services.postContato(data)
            .then(
                result => {
                    Alert.alert('Sucesso!',
                        `O contato ${result.nome} foi cadastrado com sucesso.`);
                    reset({
                        nome: '',
                        email: '',
                        telefone: ''
                    });
                }
            )
            .catch(
                e => {
                    console.log(e);
                    Alert.alert('Erro', 'Ocorreu um erro, tente novamente.');
                }
            )
    }

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>

            {/* componente de menu */}
            <Header navigation={navigation} />

            <Card style={{ backgroundColor: '#fff' }}>
                <Card.Cover
                    source={{
                        uri: 'https://cdn3.invitereferrals.com/blog/wp-content/uploads/2020/08/04051246/Marketing-Helps-to-B-Build-a-Relationshipetween-a-Business-and-Its-Consumers-min-1.jpg'
                    }}
                />
                <Card.Title
                    title="Cadastro de contatos"
                    titleStyle={{ fontSize: 16 }}
                    subtitle="Inclua um contato em sua agenda."
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
                                        label="Nome do contato"
                                        keyboardType="default"
                                        autoComplete="name"
                                        mode="outlined"
                                        placeholder="Digite aqui"
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                    />
                                )
                            }
                        />

                        {
                            errors.nome && <Text style={{ color: '#BB2124' }}>
                                {errors.nome.message}
                            </Text>
                        }

                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <Controller
                            control={control}
                            name="telefone"
                            defaultValue=""
                            rules={{
                                validate: validations.telefoneValidation
                            }}
                            render={
                                ({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        label="Telefone do contato"
                                        keyboardType="phone-pad"
                                        autoComplete="tel"
                                        mode="outlined"
                                        placeholder="Digite aqui"
                                        onBlur={onBlur}
                                        onChangeText={value => onChange(value)}
                                        value={value}
                                    />
                                )
                            }
                        />

                        {
                            errors.telefone && <Text style={{ color: '#BB2124' }}>
                                {errors.telefone.message}
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
                                        label="Email do contato"
                                        keyboardType="email-address"
                                        autoComplete="email"
                                        mode="outlined"
                                        placeholder="Digite aqui"
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

                    <View style={{ marginBottom: 10 }}>
                        <Button mode="contained"
                            icon="check-circle"
                            onPress={handleSubmit(onSubmit)}>
                            Realizar Cadastro
                        </Button>
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Button mode="outlined"
                            icon="chevron-left-circle"
                            onPress={() => navigation.navigate('consulta-contatos')}>
                            Cancelar
                        </Button>
                    </View>

                </Card.Content>
            </Card>

        </ScrollView>
    )

}