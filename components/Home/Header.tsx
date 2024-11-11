import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Dispatch, SetStateAction, useState } from 'react'
type HeaderProps = {
    title: string,
    searchText?: string,
    setSearchText?: Dispatch<SetStateAction<string>>
}
const Header: React.FC<HeaderProps> = ({ title, searchText, setSearchText }) => {
    const [search, setSearch] = useState<boolean>(false)
    const handleSearchPressed = () => {
        setSearch(!search)
    }
    if (search && searchText !== undefined && setSearchText !== undefined) {
        return <View style={styles.container}>
            <TextInput
                value={searchText}
                onChangeText={setSearchText}
                placeholder='SEARCH....'
                placeholderTextColor="grey"
            />
            <Pressable onPress={handleSearchPressed}>
                <Text>{'CLose'}</Text>
            </Pressable>
        </View>
    }
    return (
        <View style={styles.container}>
            <Text>{'Nav'}</Text>
            <Text>{title}</Text>
            <Pressable onPress={handleSearchPressed}>
                <Text>{'Search'}</Text>
            </Pressable>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20
    }
})