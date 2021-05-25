import React from 'react';
import { StyleSheet,Text, View } from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.bigBlue}>
        Kokot pica u holica {"\n"}spinava ric a chlapata mindza! 🎉
        {"\n"}
        {"\n"}
        Milujem svoje cecky, sú jak dva koláče,
        {"\n"}
        milujem vás všeckých, (kokot) všetci chodte do piče.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
	textAlign:'center',

  },
  red: {
    color: 'red',
  },
});


export default YourApp;

