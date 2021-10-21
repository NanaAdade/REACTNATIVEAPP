import React from 'react';
import { View , Text, Image, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons'

export default function Login() {
    return(
         <View style ={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
             <Image
             style = {{
                 width: 200,
                 height: 200,
                 borderRadius: 20,
                 marginBottom: 50,
                 transform:[{rotate: "45deg"}]
             }}
              source={{
                 uri:"https://images.unsplash.com/photo-1551895738-6d0216165381?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
                 }} />
             <Text style ={{color : 'rgba(0,0,0,0.6)', fontSize: 24}}>Welcome to</Text>
             <Text style = {{color: "black", fontSize: 30, fontWeight: "bold", }}>
                 Power Bike Shop
                 </Text>
                 <TouchableOpacity style ={{
                     backgroundColor: "#e3e3e3",
                     padding: 10,
                     flexDirection: "row",
                     alignItems: "center",
                     borderRadius: 10,
                     paddingHorizontal: 60,
                     marginTop: 20,
                 }}>
                      <AntDesign name="google" size={24} color="rgb(256,100,10)" />
                     <Text style ={{fontSize: 17, marginLeft: 15 }}>Login with Gmail</Text>

                 </TouchableOpacity>
                 <TouchableOpacity style ={{
                     backgroundColor: "black",
                     borderRadius: 10,
                     flexDirection: "row",
                     alignItems: "center",
                     padding: 10,
                     paddingHorizontal: 60,
                     marginTop: 20,

                 }}>
                    <AntDesign name="apple1" size={24} color="white" />
                    
                     <Text style ={{fontSize: 17, color: "white", marginLeft: 15}}>Login with Apple</Text>


                 </TouchableOpacity>
                 <TouchableOpacity>
                 <Text style ={{ marginTop: 10, fontWeight: "500", color:"grey"}}>
                     Not a member? <Text style ={{  color: "orange", fontWeight: "bold"
                 }}>Signup</Text> 

                 </Text>
                 </TouchableOpacity>
                
                 

         </View>
    );
    
}