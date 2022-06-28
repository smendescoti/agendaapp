import React from "react";
import { ScrollView } from "react-native";
import { Card } from "react-native-paper";
import Header from '../shared/Header';

export default function ConsultaContatos({ navigation }) {

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

        </ScrollView>
    )

}