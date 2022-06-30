import React, { useState, useEffect } from "react";
import { View, Text, Alert } from 'react-native';
import { Appbar, Button, Modal, Portal } from "react-native-paper";
import * as helpers from '../../helpers/auth-helper';

export default function Header({ navigation }) {

    const [usuario, setUsuario] = useState({});
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    useEffect(
        () => {
            helpers.getData()
                .then(
                    result => {
                        const json = JSON.parse(result);
                        setUsuario(json);
                    }
                )
        }, []
    )

    const sair = () => {
        Alert.alert(
            "Encerrar sessão",
            "Deseja realmente encerrar sua sessão do aplicatio?",
            [
                {
                    text: 'Sim',
                    onPress: () => {
                        helpers.signOut()
                            .then(
                                () => {
                                    navigation.navigate('login')
                                }
                            )
                    }
                },
                {
                    text: 'Não',
                    onPress: () => {
                        hideModal();
                    }
                }
            ]
        );
    }

    return (
        <View>
            <Appbar.Header>
                <Appbar.Content
                    title="Agenda de Contatos"
                    subtitle={usuario.nome}
                    titleStyle={{
                        fontSize: 16
                    }}
                    subtitleStyle={{
                        fontSize: 15
                    }}
                />
                <Appbar.Action
                    icon="home-outline"
                    onPress={
                        () => navigation.navigate('consulta-contatos')
                    }
                />
                <Appbar.Action
                    icon="file-outline"
                    onPress={
                        () => navigation.navigate('cadastro-contatos')
                    }
                />
                <Appbar.Action
                    icon="account-circle-outline"
                    onPress={showModal}
                />
            </Appbar.Header>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} style={{ backgroundColor: '#fff', padding: 20, margin: 40, height: 200 }}>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                            {usuario.nome}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14 }}>
                            {usuario.email}
                        </Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Button mode="contained" onPress={() => sair()} icon="check-circle">
                            Encerrar Sessão
                        </Button>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Button mode="outlined" onPress={hideModal}>
                            Cancelar
                        </Button>
                    </View>
                </Modal>
            </Portal>
        </View>
    )

}