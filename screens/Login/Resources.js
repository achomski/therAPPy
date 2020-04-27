
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Linking,
} from 'react-native';

const links = [
    {
        id: 1,
        title: 'Rutgers CAPS website',
        link: 'http://health.rutgers.edu/medical-counseling-services/counseling/',
        description: 'Offers Counseling, Alcohol and Other Drug Assistance Program & Psychiatric Services',
    },
    {
        id: 2,
        title: 'US SAMHSA website',
        link: 'https://www.samhsa.gov/find-treatment',
        description: 'The US Government Substance Abuse and Mental Health Services Administration.',
    },
    {
        id: 3,
        title: 'US NIMH website',
        link: 'https://www.nimh.nih.gov/health/find-help/index.shtml',
        description: 'The US Government National Institute of Mental Health, guide to finding help.',
    }
];

export default class Resources extends Component {
    render() {
        let resourcesArr;
        resourcesArr = links.map((obj,index) => (
            <View key={index} style={styles.minContainer}>
                <Text
                    style={styles.bigger}
                    onPress={() => Linking.openURL(obj.link)}>
                    {obj.title}
                </Text>
                <Text style={styles.loginText}>
                    {obj.description}
                </Text>
            </View>
        ));
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Resources</Text>
                {resourcesArr}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //therappy1: #707590
        //therappylessblue: #707586
        backgroundColor: '#f2e9e1',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    minContainer: {
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 50,
        //therappy1: #584d9b
        //therappylessblue: #584d9b
        //therappyteal: #20c0b0
        //therappyAIAIAIAI: #fdfdfb
        //lime green: #cbe86b
        color: '#7f58ff',
        marginBottom: 40,
    },
    bigger: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'blue',
        textDecorationLine: 'underline',
    },
    inputView: {
        width: '80%',
        backgroundColor: '#ffffff',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: '#000000',
    },
    forgot: {
        color: 'black',
        fontSize: 14,
    },
    loginText: {
        color: 'black',
        fontSize: 18,
        marginLeft: 10,
        marginRight: 10,
    },
    rightBtn: {
        width: '45%',
        backgroundColor: '#ff666b',
        borderRadius: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightView: {
        flex: 1,
        marginTop: 25,
    },
    leftView: {
        flex: 1,
        marginLeft: 90,
        marginTop: 25,
    },
    leftBtn: {
        width: '45%',
        backgroundColor: '#ff666b',
        borderRadius: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});