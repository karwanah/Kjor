'use strict';
import { StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4361EE',
    alignItems: 'center',
    justifyContent: "space-evenly",
  },
  kjor:{
    bottom: 0, 
    fontSize:32, 
    textAlign:"center",
    fontFamily: 'Calibre,sans-serif', 
    fontWeight:'500',
    color:"#0FFF95",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:0,
    borderRadius: 40,
    elevation: 4,
    width: 270,
    height: 85,
    backgroundColor: '#001A23',
    bottom:25,  
  },
  text: {
    textAlign:'center',
    fontSize:22,
    fontWeight: 'bold',
    color: 'white',
  },
  input:{
    textAlign:"left",
    backgroundColor: 'white', 
    height: 75,
    width: 300,
    marginTop: 30,
    borderWidth: 2,
    padding: 10,
    borderRadius:20
  },
  logintext: {
    textAlign:'center',
    fontSize:22,
    marginTop: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  registertext: {
    textAlign:'center',
    fontSize:22,
    marginTop: 30,
    fontWeight: 'bold',
    color: '',
  },
  
});
