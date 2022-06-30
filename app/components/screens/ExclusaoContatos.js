import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, Alert } from "react-native";
import { Card, Button } from "react-native-paper";
import Header from '../shared/Header';
import * as services from '../../services/contatos-services';

export default function ExclusaoContatos({ route, navigation }) {

    const [contato, setContato] = useState({});

    const { idContato } = route.params;

    useEffect(
        () => {
            obterContato(idContato);
        }, []
    );

    const obterContato = (idContato) => {
        services.getContatoById(idContato)
            .then(
                result => {
                    setContato(result);
                }
            )
            .catch(
                e => {
                    console.log(e);
                }
            )
    }

    const excluirContato = () => {
        services.deleteContato(contato.idContato)
            .then(
                (result) => {
                    Alert.alert('Sucesso!',
                        `O contato ${result.nome} foi excluído com sucesso.`);
                    navigation.navigate('consulta-contatos');
                }
            )
            .catch(
                (e) => {
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
                    title="Exclusão de contatos"
                    titleStyle={{ fontSize: 16 }}
                    subtitle="Exclua o registro do contato em sua agenda."
                />
                <Card.Content>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
                            {contato.nome}
                        </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text>
                            {contato.email}
                        </Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text>
                            {contato.telefone}
                        </Text>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Button mode="contained"
                            icon="check-circle"
                            onPress={() => excluirContato()}>
                            Confirmar Exclusão
                        </Button>
                    </View>

                    <View style={{ marginTop: 10 }}>
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