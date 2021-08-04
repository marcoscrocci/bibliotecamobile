import { StyleSheet } from 'react-native'
 
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 2,
        marginTop: 4,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        position: 'relative',
        marginBottom: 4
    },
    linha: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 2
    },
    tombo: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },
    rotuloTombo: {
        flex: 1,
        backgroundColor: '#CCC',
        padding: 4,
        fontWeight: 'bold',
        paddingLeft: 6,
        borderRadius: 4
    },
    campoTombo: {
        display: 'flex',
        flex: 1,
        padding: 4,
        textAlign: 'center'
    },
    rotulo: {
        flex: 1,
        backgroundColor: '#CCC',
        padding: 4,
        fontWeight: 'bold',
        paddingLeft: 6,
        borderRadius: 4
    },
    campo: {
        flex: 5,
        padding: 4,
        paddingLeft: 6
    },
    botaoEditar: {
        backgroundColor: '#1548bf',
        borderRadius: 6,
        padding: 8,
        width: 80
    },
    botaoExcluir: {
        backgroundColor: '#ff1100',
        borderRadius: 6,
        padding: 8,
        width: 80,
        marginTop: 6
    },
    textoBotao: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    acoes: {
        position: 'absolute',
        right: 4, bottom: 4
    }
});
 
export default styles