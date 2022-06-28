import React from "react";
import { View, Text } from 'react-native';
import { Appbar, Button } from "react-native-paper";
import * as helpers from '../../helpers/auth-helper';

export default function Header({ navigation }) {

    const sair = () => {

    }

    return (
        <View>
            <Appbar.Header>
                <Appbar.Content
                    title="Agenda de Contatos"
                    subtitle="COTI Informática"
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
                    onPress={
                        () => sair()
                    }
                />
            </Appbar.Header>
        </View>
    )

}