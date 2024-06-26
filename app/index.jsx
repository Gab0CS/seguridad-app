import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
// import CustomButton from '../components/CustomButton';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View style={styles.viewContainer}>
          <Text style={styles.text}>
            Esta es una aplicación que te permite enviar mensajes de emergencia a contactos seleccionados
            por ti, hacer llamadas a las autoridades e incluso detectará tu ubicación en GPS mientras conduces
            y si tienes un accidente enviará igual un mensaje predeterminado a tus contactos de emergencia y 
          </Text>
          {/* <CustomButton 
            title="continue with email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          /> */}
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622'
      style='light'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#bbbb',
        height: '100%',
    },
    viewContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '85vh',
        padding: '0 1rem'
    },
    text: {
        fontSize: '',
        color: '#7f1',
        margin: '90px 20px',
        textAlign: 'center',
        alignItems: 'center',
    }
})
