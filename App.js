import { use } from 'ast-types';
import React, {useState} from 'react'
import { 
ScrollView,
Text,
View,
SafeAreaView,
StyleSheet,
TextInput,
TouchableOpacity
}  from 'react-native'
import Snackbar from "react-native-snackbar"

const currencyPerRupee ={
  DOLLAR: 0.014,
  EURO: 0.0112,
  POUND: 0.011,
  RUBEL: 0.99,
  AUSDOLLER: 0.018,
  CANDOLLER: 0.017,
  YEN: 1.50,
  DINAR: 0.0041,
  BITCOIN: 0.00000035,
}

const App = () => {
const [inputValue, setInputValue] = useState(0);
const [resultValue, setResultValue] = useState(0)

const ButtomPressed = (currency) => {
  if (!inputValue) {
    return Snackbar.show({
      text: "pleace enter a value",
      backgroundColor: "#EA7773",
      textColor: "#000000",

    })
  }
let result = parseFloat(inputValue) * currencyPerRupee[currency]

setResultValue(result.toFixed(3));

}

  return(
<>
<ScrollView backgroundColor="#1b262c"
keyboardShouldPersistTaps="handled"
contentInsetAdjustmentBehavior="automatic"
>
<SafeAreaView style={styles.container}>
<View style={styles.resultcontainer}>
  <Text style={styles.resultValue}>{resultValue}</Text>
</View>
<View style={styles.inputContainer}>
  <TextInput
  style={styles.input}
  keyboardType="numeric"
  placeholder="Enter Value"
  placeholderTextColor="#c1c1c1"
  value={inputValue}
  onChangeText={(inputValue) => setInputValue(inputValue)}
  ></TextInput>
</View>
<View style={styles.convertButtonContainer}>
{Object.keys(currencyPerRupee).map((currency) => (
  <TouchableOpacity
  onPress={() => ButtomPressed(currency)}
  key={currency}
  style={styles.converterButtom}
  >
    <Text style={styles.temp}>{currency}</Text>
  </TouchableOpacity>
))}
</View>
</SafeAreaView>
</ScrollView>
</>
  )
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b262c"
  },
  resultcontainer: {
height: 70,
marginTop: 80,
justifyContent: 'center',
borderColor: "#bbe1fa",
borderWidth: 2,
alignItems: 'center'
  },
  resultValue: {
fontSize:30,
color: "#fff",
fontWeight: "bold"
  },
  inputContainer: {
 height: 70,
 marginTop: 10,
 justifyContent:"center",
alignItems: "center",
borderWidth: 2,
borderColor: "#bbe1fa",

}, 
  input:{
fontSize: 30,
textAlign: "center",
color: "#FFFFFF"
  },
  convertButtonContainer:{
    flexDirection: 'row',
    flexWrap: "wrap",
    margin: 10,
  },
  temp:{
    color: "white",
    fontSize: 20,

  },
  converterButtom:{
    alignItems:'center',
    justifyContent: "center",
    height: 100,
    width: "33.%",
    borderWidth: 2,
    borderColor:"#bbe1fa",
marginTop: 10,
marginLeft: 1,
backgroundColor: "green"
  }
})
