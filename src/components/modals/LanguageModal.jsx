import {
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
  } from "react-native";
  import React from "react";
  import {
    MaterialCommunityIcons,
    Ionicons,
    MaterialIcons,
    AntDesign,
  } from "@expo/vector-icons";
  import tw from "twrnc";
  
  const LangaugeModal = ({ modalVisible, setModalVisible }) => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent={true}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            padding: 5,
            backgroundColor: "rgba(100,115,139,0.5)",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <TouchableWithoutFeedback onPress={() => console.log("do nothing")}>
            <View style={styles.centeredView}>
              <View style={tw`bg-slate-100 p-2 rounded-lg w-full flex flex-col`}>
                <View
                  style={tw`flex flex-row bg-white items-center p-4 rounded-lg border-b justify-around border-slate-100 mb-2`}
                >
                  
                 
                  <Text style={tw`text-lg`}>Select Language</Text>
                </View>
                <View>
                  <View
                    style={tw`flex flex-row items-center w-full p-2 bg-white p-2 rounded-t-lg border-b border-slate-100 w-full`}
                  >
                    
                    <View style={tw`flex flex-col ml-2`}>
                      <Text style={tw` text-slate-700 `}>
                        Shona
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <View
                    style={tw`flex flex-row items-center w-full p-2 bg-white p-2 border-b border-slate-100 w-full`}
                  >
                    
                    <View style={tw`flex flex-col ml-2`}>
                      <Text style={tw` text-slate-700 `}>
                        Spanish
                      </Text>
                    </View>
                  </View>
                </View>
  
                <View>
                  <View
                    style={tw`flex flex-row items-center w-full mb-2 p-2 bg-white p-2 rounded-b-lg w-full`}
                  >
                    
                    <View style={tw`flex flex-col ml-2`}>
                      <Text style={tw` text-slate-700 `}>
                        English
                      </Text>
                   
                    </View>
                  </View>
                </View>
  
                <View>
                  <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={tw`flex flex-row items-center w-full p-2 bg-white rounded-lg w-full`}
                  >
                    
                    <View style={tw`flex flex-col w-full`}>
                      <Text style={tw`text-lg text-red-600 text-center`}>Close</Text>
                     
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    );
  };
  
  const styles = StyleSheet.create({
    centeredView: {
      justifyContent: "center",
      marginTop: 22,
      width: "90%",
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      width: "100%",
    },
  });
  
  export default LangaugeModal;