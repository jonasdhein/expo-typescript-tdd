import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#042940',
    },
    container: {
        flex: 1,
        padding: 16
    },
    title: {
        color: '#fff',
        fontSize: 24,
    },
    titleTasks: {
        marginTop: 20,
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    contentTitle: {
        color: '#fff',
        fontSize: 18,
        marginTop: 10
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: Platform.OS === 'ios' ? 12 : 8,
        color: '#042940',
        fontSize: 16,
        marginTop: 24,
    },
    button: {
        width: 'auto',
        backgroundColor: '#005C53',
        borderRadius: 8,
        marginTop: 16,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});