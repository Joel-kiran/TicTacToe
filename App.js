import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native';

export default function App() {
  const [ply1, setPly1] = useState(1);
  const [ply2, setPly2] = useState(0);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);
  const [fourth, setFourth] = useState(null);
  const [fifth, setFifth] = useState(null);
  const [sixth, setSixth] = useState(null);
  const [seventh, setSeventh] = useState(null);
  const [eighth, setEighth] = useState(null);
  const [ninth, setninth] = useState(null);

  function resetState(){
    setFirst(null)
    setSecond(null)
    setThird(null)
    setFourth(null)
    setFifth(null)
    setSixth(null)
    setSeventh(null)
    setEighth(null)
    setninth(null)
    setPly1(1)
    setPly2(0)
  }
  useEffect(() => {
    let playerWon = 0
    if (playerWon==0 && first!=null && second!=null && third!=null){
      if (first==second && second==third){
        playerWon = 1
        if (first=='X') {
          alert("Player X Won")
          resetState()
        }
        else{
          alert("Player O Won")
          resetState()
        }
      }
    }
    if (playerWon==0 && first!=null && fourth!=null && seventh!=null){
      if (first==fourth && fourth==seventh){
        playerWon = 1
        if (first=='X') {
          alert("Player X Won")
          resetState()
        }
        else{
          alert("Player O Won")
          resetState()
        }
      }
    }
    if (playerWon ==0 && first!=null && fifth!=null && ninth!=null){      
      if (first==fifth && fifth==ninth){
        playerWon = 1
        if (first=='X') {
          alert("Player X Won")
          resetState()
        }
        else{
          alert("Player O Won")
          resetState()
        }
      }
    }
    if (playerWon ==0 && second!=null && fifth!=null && seventh!=null){
      if (second==fifth && fifth==seventh){
        playerWon = 1
        if (second=='X') {
          alert("Player X Won")
          resetState()
        }
        else{
          alert("Player O Won")
          resetState()
        }
      }
    }
    if (playerWon ==0 && third!=null && sixth!=null && ninth!=null){
      if (third==sixth && sixth==ninth){
        playerWon = 1
        if (third=='X') {
          alert("Player X Won")
          resetState()
        }
        else{
          alert("Player O Won")
          resetState()
        }
      }
    }
    if (playerWon ==0 && third!=null && fifth!=null && seventh!=null){
      if (third==fifth && fifth==seventh){
        playerWon = 1
        if (third=='X') {
          alert("Player X Won")
          resetState()
        }
        else{
          alert("Player O Won")
          resetState()
        }
      }
    }
    if (playerWon ==0 && fourth!=null && fifth!=null && sixth!=null){
      if (fourth==fifth && fifth==sixth){
        playerWon = 1
        if (fourth=='X') {
          alert("Player X Won")
          resetState()
        }
        else{
          alert("Player O Won")
          resetState()
        }
      }
    }
    if (playerWon ==0 && seventh!=null && fifth!=null && third!=null){
      if (seventh==fifth && fifth==third){
        playerWon = 1
        if (seventh=='X') {
          alert("Player X Won")
          resetState()
        }
        else{
          alert("Player O Won")
          resetState()
        }
      }
    }
    if (playerWon ==0 && first!=null && second!=null && third!=null && fourth!=null && fifth!=null && sixth!=null && seventh!=null && eighth!=null && ninth!=null){
      alert("Its A Draw")
      resetState()
    }

  });

  return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
          <TouchableHighlight onPress={()=>{
            if (first==null){
              if (ply1==1){
                setFirst('X')
                setPly1(0)
                setPly2(1)
              }
              else{
                setFirst('O')
                setPly2(0)
                setPly1(1)
              } 
            }
          }}>
            <View style={{width: 100, height: 100, backgroundColor: 'lightgrey', justifyContent: 'center',alignItems: 'center'}} >
              <Text>{first}</Text></View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>{
            if (second==null){
              if (ply1==1){
                setSecond('X')
                setPly1(0)
                setPly2(1)
              }
              else{
                setSecond('O')
                setPly2(0)
                setPly1(1)
              }  
            }
          }}>
            <View style={{width: 100, height: 100, backgroundColor: 'brown' , justifyContent: 'center',alignItems: 'center'}} >
              <Text>{second}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>{
            if (third==null){
              if (ply1==1){
                setThird('X')
                setPly1(0)
                setPly2(1)
              }
              else{
                setThird('O')
                setPly2(0)
                setPly1(1)
              }  
            }
          }}>
            <View style={{width: 100, height: 100, backgroundColor: 'lightgrey', justifyContent: 'center',alignItems: 'center'}}>
              <Text>{third}</Text>
            </View>
          </TouchableHighlight>    
        </View>
        
        <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
          <TouchableHighlight onPress={()=>{
            if (fourth==null){
              if (ply1==1){
                setFourth('X')
                setPly1(0)
                setPly2(1)
              }
              else{
                setFourth('O')
                setPly2(0)
                setPly1(1)
              }  
            }
          }}>
            <View style={{width: 100, height: 100, backgroundColor: 'brown', justifyContent: 'center',alignItems: 'center'}}>
              <Text>{fourth}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>{
            if (fifth==null){
              if (ply1==1){
                setFifth('X')
                setPly1(0)
                setPly2(1)
              }
              else{
                setFifth('O')
                setPly2(0)
                setPly1(1)
              }  
            }
          }}>
            <View style={{width: 100, height: 100, backgroundColor: 'lightgrey', justifyContent: 'center',alignItems: 'center'}}>
              <Text>{fifth}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>{
            if (sixth==null){
              if (ply1==1){
                setSixth('X')
                setPly1(0)
                setPly2(1)
              }
              else{
                setSixth('O')
                setPly2(0)
                setPly1(1)
              }  
            }
          }}>
          
            <View style={{width: 100, height: 100, backgroundColor: 'brown', justifyContent: 'center',alignItems: 'center'}}>
              <Text>{sixth}</Text>
            </View>
          </TouchableHighlight>  
        </View>
        <View style={{
  
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
           <TouchableHighlight onPress={()=>{
            if (seventh==null){
              if (ply1==1){
                setSeventh('X')
                setPly1(0)
                setPly2(1)
              }
              else{
                setSeventh('O')
                setPly2(0)
                setPly1(1)
              }  
            }
          }}>
            <View style={{width: 100, height: 100, backgroundColor: 'lightgrey', justifyContent: 'center',alignItems: 'center'}}>
              <Text>{seventh}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>{
            if (eighth==null){
              if (ply1==1){
                setEighth('X')
                setPly1(0)
                setPly2(1)
              }
              else{
                setEighth('O')
                setPly2(0)
                setPly1(1)
              }  
            }
          }}>
            <View style={{width: 100, height: 100, backgroundColor: 'brown', justifyContent: 'center',alignItems: 'center'}}>
              <Text>{eighth}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>{
            if (ninth==null){
              if (ply1==1){
                setninth('X')
                setPly1(0)
                setPly2(1)
              }
              else{
                setninth('O')
                setPly2(0)
                setPly1(1)
              }  
            }
          }}>
            <View style={{width: 100, height: 100, backgroundColor: 'lightgrey', justifyContent: 'center', alignItems: 'center'}}>
            <Text>{ninth}</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
