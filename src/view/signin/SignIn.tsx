import { StyleSheet, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AppHeader, HeaderAction } from '../../AppHeader';

const SignIn = () => {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    const headerActions: HeaderAction[] = [
        { label: 'PRIVACY', onPress: () => console.log('Privacy') },
        { label: 'SIGN IN', onPress: () => console.log('Sign In') },
    ];
    return (
        <View style={styles.container}>
            <AppHeader
                logo={require('@assets/icons/ic_netflix.png')}
                actions={headerActions} 
            />
            <TextInput
                placeholder="Enter email"
                placeholderTextColor="#888"
                value={text}
                onChangeText={setText}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter Password"
                placeholderTextColor="#888"
                value={text}
                onChangeText={setText}
                style={styles.input}
            />
            <Button
                mode="contained"
                onPress={() =>
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'DashboardNavigation' as never }],
                    })
                }
                style={styles.button}
                contentStyle={styles.buttonContent}
                labelStyle={styles.buttonLabel}
            >
                GET STARTED
            </Button>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121212',
        flex: 1
    },
    input: {
        height: 50,
        borderWidth: 2,
        borderColor: '#444',
        color: '#fff',
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    button: {
        margin: 16,
        borderRadius: 6,
        backgroundColor: '#E50914', // Netflix red
    },
    buttonContent: {
        height: 50,
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: '600',
    },
    logo: {
        width: 100,
        height: 40,
    },
    header: {
        backgroundColor: 'transparent',
        elevation: 0,
    },
})