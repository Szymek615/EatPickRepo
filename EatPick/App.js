import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, Alert, Image, SafeAreaView, TouchableHighlight, Button, View, TextInput } from 'react-native';

export default function App() {
  //console.log(Dimensions.get("screen"));

  const handlePress = () => console.log("Text clicked!");
  const changedText = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World</Text>
      <TextInput
        placeholder='Type some text'
        //onChangeText={}
      ></TextInput>
      <Button
        title="Press me!"
        onPress={handlePress}
      />
      {/* <View style={{
        width: '50%',
        backgroundColor: "dodgerblue",
        height: 70
      }}></View> */}
      {/* <Text numberOfLines={1} onPress={handlePress}>Hello React Native, this is a very very long text, and I wanna make it even longer!</Text>
      <TouchableHighlight onPress={() => console.log("Image tapped")}>
        <Image source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"
          }} onLoadStart={() => console.log("Image is loading...")}/>
      </TouchableHighlight>
      <Button
        color="black"
        title='Click me'
        onPress={
          () => Alert.prompt("My title", "Podaj dane", text => alert(text))
          () => Alert.alert("My title", "Message", [
          {text: "Yes", onPress: () => alert("You clicked yes")},
          {text: "No", onPress: () => alert("You clicked no")},
        ])
        }/> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
});
