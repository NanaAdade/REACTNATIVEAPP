import React from 'react';
import { View ,Text, StyleSheet, Button, Image } from 'react-native';
import { Ionicons,FontAwesome, AntDesign, Entypo } from '@expo/vector-icons';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default function Home() {
    return <View  style ={{
        backgroundColor:'white',
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20}}>
            <View style ={{flexDirection:"row",justifyContent:'space-between', alignItems:'center'}}>
            <Ionicons name="menu-outline" size={24} color="black" />
            <FontAwesome name="motorcycle" size={24} color="black" />
            
            <AntDesign name="search1" size={24} color="black" />
            <Ionicons name="notifications-outline" size={24} color="black" />
            </View>

            <Text style ={{color: 'grey', marginTop: 20, fontWeight:"500"}}>The World's <Text style = 
            {{color: 'orange',fontWeight:'bold', fontSize: 20}}>Best Bike</Text> 
            </Text>

            <Text style ={{color: 'black', marginTop: 10, fontWeight: 'bold', fontSize: 20}}> Categories </Text>

            <View
            style={{
            
            borderRadius: 10,
            flexDirection: "row",
            marginTop: 20,
            justifyContent:'space-between'
            }}>
                <TouchableOpacity  style={{
                    backgroundColor: "#f5f5f5",
                    paddingHorizontal:5,
                    paddingVertical: 10,
                    borderRadius :10
                    

                }}>
                    <Text style ={{color:'red', fontSize: 17}}> All </Text>
                     </TouchableOpacity>
                    <TouchableOpacity style={{
                        backgroundColor: "#f5f5f5",
                        paddingHorizontal:5,
                        paddingVertical: 10,
                        borderRadius :10,
                        justifyContent:'space-between'

                    }}>
                        <Text style ={{color:'rgba(0,0,0,0.6)', fontSize: 17}}> RoadBike </Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style ={{
                            backgroundColor: "#f5f5f5",
                            paddingHorizontal:5,
                            paddingVertical: 10,
                            borderRadius :10
                        }}>
                            <Text style ={{color:'rgba(0,0,0,0.6)', fontSize: 17}}> Mountain </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                backgroundColor: "#f5f5f5",
                                paddingHorizontal:5,
                                paddingVertical: 10,
                                borderRadius :10
                         
                            }}>
                                <Text style ={{color:'rgba(0,0,0,0.6)',fontSize: 17}}> Urban </Text> 
                                </TouchableOpacity>
            </View>

            <View style = {{
                     backgroundColor: '#f0f8ff',
                     marginTop: 20,
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     borderRadius: 10,
                     flex: 1
            }}>

                
                
                
            
                
                
            
                    <Image 
                    style ={{ 
                   
                        width: 145,
                        height: 145,
                        borderRadius: 10,
                        marginHorizontal: 10,
                        
                    }}
                    source ={{
                        uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF2asBhlPJvrOKhh-PPCyXDI_xCoFV-IvWwg&usqp=CAU"

                    }}/>
                    

                


                    <Image 
                    style ={{ 
                   
                        width: 145,
                        height: 145,
                        borderRadius: 10,
                        marginHorizontal: 10,
                        
                    }}
                    source ={{
                        uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwTCAC5EtFRh9Yx0sxBgBJI_zV3I9Tf9vdg&usqp=CAU"

                    }}/>
                    
            </View>


                    <View style = {{
                        backgroundColor: '#f0f8ff',
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderRadius: 10,
                        flex: 1
                    }}>

            
                
                
            
                    <Image 
                    style ={{ 
                   
                        width: 145,
                        height: 145,
                        borderRadius: 10,
                        
                        marginTop: 10
        
                    }}
                    source ={{
                        uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL7XKj4rqSIa9g5yJVplQwv8Vba2GPlCXyLA&usqp=CAU"

                    }}/>
                    

                    <Image 
                    style ={{ 
                   
                        width: 145,
                        height: 145,
                        borderRadius: 10,
                
                        marginTop: 10
        
                    }}
                    source ={{
                        uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhtKGysthIdtCIMh3a_CvID40CkUPA_Natw&usqp=CAU"

                    }}/>
                    </View>

                    <View style ={{flexDirection:"row",justifyContent:'space-between', alignItems:'center'}}>
                    <Entypo name="home" size={24} color="orange" />
                    <Ionicons name="mic-circle" size={24} color="black" />
                    <FontAwesome name="shopping-bag" size={24} color="black" />
                    </View>



                

            

            

    </View>;
    
}