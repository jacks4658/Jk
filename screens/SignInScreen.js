import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert,
    Image,
    Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import { AuthContext } from '../componentes/context';
import Users from '../model/users';



const SignInScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { colors } = useTheme();

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Senha Incorreta!', 'O campo nome do usuário ou senha não podem estar vazios', [
                {text: 'Sair'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Uduario invalido!', 'Usuario ou senha Incorretos', [
                {text: 'Sair'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#FF6146' barStyle="light-content"/>
        <View style={styles.header}>
            
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="center"
        
            />
         <Text style={styles.text_header}>Bem Vindo!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor:'#000029'
            }]}
        >
            <Text style={[styles.text_footer, {
                color: 'white'
            }]}>Usuario</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Usuario"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: 'white',fontSize:18
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="#FF6146"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Usuario deve conter ao menos 4 caracteres.</Text>
            </Animatable.View>
            }
            

            <Text style={[styles.text_footer, {
                color: 'white',
                marginTop: 35
            }]}>Senha</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Senha"
                    placeholderTextColor="gray"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                    color: 'white',fontSize:18
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="#FF6146"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="#FF6146"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>A senha deve conter ao menos 8 caracteres.</Text>
            </Animatable.View>
            }
            

            <TouchableOpacity>
                <Text style={{color: '#F39A4A', marginTop:15}}>Esqueceu a senha?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {loginHandle( data.username, data.password )}}
                >
                <LinearGradient
                    colors={['#FF6146', '#DB545A']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Entrar</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    
                    style={styles.signIn}
                    onPress={() => navigation.navigate('SignUpScreen')} 
                    
                >
                     <LinearGradient
                    colors={['#DB545A', '#FF6146']}
                    style={styles.signIn}
                    
              >
                    <Text style={[styles.textSign, {
                        color: 'white'
                    }]}>Criar Conta</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SignInScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#262D35'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 100,
        paddingBottom: 50,
        marginTop:70,
      

    },

    
    footer: {
        flex: 3,
        backgroundColor: '#000029',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        paddingHorizontal: 20,
        marginTop:-17
    },
    text_footer: {
        color: 'white',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: 'white',
    },
    errorMsg: {
        color: '#F39A4A',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 10
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 9
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    logo: {
        width: 200,
        height: 200,
        justifyContent:'center',
        
    } 
  });
