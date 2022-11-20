import react from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

interface SearchBarParams {

}

const SearchBar = ({}: SearchBarParams) => {
    return (
        <View style={styles.container}>
            <Feather name="search" size={24} color="#bbb" />
            <TextInput style={styles.input} placeholder="Search"/>
            <Pressable>
                <MaterialIcons name="cancel" size={24} color="black" />
            </Pressable>
            <Pressable>
                <Text style={styles.cancel}>Cancel</Text>
            </Pressable>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    input: {
        backgroundColor: '#bbb',
        borderRadius: 10,
        marginLeft: 10,
        marginVertical: 5,
    },
    cancel: {
        color: '#1982FC'
    }
})