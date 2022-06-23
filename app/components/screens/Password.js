import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";

export default function Password({ navigation }) {

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <Card>
                <Card.Cover
                    source={{
                        uri: 'https://cdn.consumidormoderno.com.br/wp-content/uploads/2021/06/Business-Performance.jpg'
                    }}
                />
                <Card.Title
                    title="Esqueci minha Senha"
                    subtitle="Preencha os campos para recuperar sua senha de acesso."
                />
                <Card.Content>

                    <View style={{ marginBottom: 20 }}>
                        <TextInput
                            label="Email de acesso:"
                            keyboardType="email-address"
                            mode="flat"
                            placeholder="Ex: joaocarlos@gmail.com"
                        />
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Button mode="contained">
                            Recuperar Senha
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