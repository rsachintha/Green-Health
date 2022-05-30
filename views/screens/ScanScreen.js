import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, Linking } from 'react-native';
import COLORS from '../../consts/colors';
import { BarCodeScanner } from 'expo-barcode-scanner';
// import axios from 'axios';

const ScanScreen = () => {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true)
        alert(`Barcode With Type ${type} and data ${Linking.openURL(`${data}`)} Has Been Scanned!`)
    }

    if (hasPermission === null) {
        return <Text>Requesting for Camera Permission</Text>
    }
    if (hasPermission === false) {
        return <Text>No Access to Camera</Text>
    }

    return (
        <View style={style.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title='Tap to Scan Again' onPress={() => setScanned(false)} color={COLORS.white} />}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    }
})

export default ScanScreen;
