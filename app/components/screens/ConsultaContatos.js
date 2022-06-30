import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Linking } from "react-native";
import { Card, Button } from "react-native-paper";
import Header from '../shared/Header';
import * as services from '../../services/contatos-services';

export default function ConsultaContatos({ navigation }) {

    const [contatos, setContatos] = useState([]);

    //função para obter os contatos da API
    const consultarContatos = () => {
        services.getAllContatos()
            .then(
                (result) => {
                    setContatos(result);
                }
            )
            .catch(
                (e) => {
                    console.log(e);
                }
            )
    }

    useEffect(
        () => {
            consultarContatos();

            const result = navigation.addListener('focus',
                () => {
                    consultarContatos();
                }
            );

            return result;

        }, [navigation]
    )

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>

            {/* componente de menu */}
            <Header navigation={navigation} />

            <Card style={{ backgroundColor: '#eee' }}>
                <Card.Title
                    title="Consulta de contatos"
                    titleStyle={{ fontSize: 14 }}
                    subtitle="Listagem de contatos cadastrados em sua Agenda."
                />
            </Card>

            {/* exibindo a lista de contatos */}
            {
                contatos.map(
                    function (contato, i) {
                        return (
                            <Card key={i}>
                                <Card.Content>
                                    <View>
                                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                                            {contato.nome}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text>
                                            {contato.email}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text>
                                            Fone: {contato.telefone}
                                        </Text>
                                    </View>
                                </Card.Content>
                                <Card.Actions>
                                    <Button icon="pencil-outline" mode="text"
                                        onPress={
                                            () => {
                                                navigation.navigate('edicao-contatos', {
                                                    idContato: contato.idContato
                                                })
                                            }
                                        }>
                                        Editar
                                    </Button>
                                    <Button icon="delete-outline" mode="text"
                                        onPress={
                                            () => {
                                                navigation.navigate('exclusao-contatos', {
                                                    idContato: contato.idContato
                                                })
                                            }
                                        }>
                                        Excluir
                                    </Button>
                                    <Button icon="phone-outline" mode="text"
                                        onPress={
                                            () => {
                                                Linking.openURL(`tel:${contato.telefone}`)
                                            }
                                        }>
                                        Ligar
                                    </Button>
                                </Card.Actions>
                            </Card>
                        )
                    }
                )
            }

        </ScrollView>
    )

}