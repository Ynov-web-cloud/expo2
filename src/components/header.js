//
//
//
//
//

import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Link } from "expo-router"

export default Header = () => {

    return (
        <>
            <View style={styles.container}>
                <Link href="/authentication">Auth</Link>
                <Link href="/home">Home</Link>
                <a href="/home">Logout</a>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})

