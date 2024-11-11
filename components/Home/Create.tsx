import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native'
import React from 'react'
const Create: React.FC<any> = ({ createNew, setCreateNew }) => {

    const handleCreatePressed = () => {
        setCreateNew(!createNew)
    }
    return (
        <View>
            <Pressable style={styles.container} onPress={handleCreatePressed}>
                <Text>Create</Text>

            </Pressable>

        </View>
    )
}

export default Create


const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: 70,
        width: 70,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    createContainer: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height / 2,
        backgroundColor: "white",
        position: "absolute",
        bottom: 0
    },
    submitButton: {
        width: "100%",
        paddingVertical: 20,
        backgroundColor: "orange",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    }
})