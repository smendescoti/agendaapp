import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Card, TextInput, Button } from "react-native-paper";

export default function Login({ navigation }) {

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
                        <TextInput
                            label="Email de acesso:"
                            keyboardType="email-address"
                            mode="flat"
                            placeholder="Ex: joaocarlos@gmail.com"
                        />
                    </View>

                    <View style={{ marginBottom: 20 }}>
                        <TextInput
                            label="Senha de acesso:"
                            keyboardType="default"
                            mode="flat"
                            placeholder="Digite aqui"
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={{ marginBottom: 10 }}>
                        <Button mode="contained">
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