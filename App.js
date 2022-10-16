import React, { useState } from 'react';
import { styled } from 'nativewind';
import { StatusBar, Text, View } from 'react-native';
import ButtonNumber from './components/ButtonNumber';
import InputResult from './components/InputResult';
import ButtonOp from './components/ButtonOp';

const AppContainer = styled(View);
const WrapperNum = styled(View);
const WrapperInput = styled(View);

export default function App() {
  const [result, setResult] = useState("+");

  function deleteText() {
    setResult("");
  }

  function exponentiate() {
    setResult(result + "^");
  }

  function parentheses() {
    let left = 0;
    let right = 0;

    result.split("").map(item => item === "(" ? left++ : item === ")" ? right++ : item);

    if (left > right) {
      setResult(result + ")");
    } else if (right >= left) {
      setResult(result + "(");
    }
  }

  function backNum() {
    let mass = result.split("");
    mass.pop()
    setResult(mass.join(""))
  }

  function incrAndDikr() {
    console.log(12);
    // if (result[result.length - 1] === "+") {
    //   let newRes = result;
    //   newRes[newRes.length - 1] = "-"
    //   console.log(newRes.length - 1);
    //   setResult(newRes.join(""))
    // } else if (result[result.length - 1] === "-") {
    //   let newRes = result;
    //   newRes[newRes.length - 1] = "+"
    //   setResult(newRes)
    // } else {
    //   setResult(result + "+")
    // }
  }

  function multiplication() {
    setResult(result + "*")
  }
  function division() {
    setResult(result + "/")
  }

  function one() {
    setResult(result + "1")
  }
  function two() {
    setResult(result + "2")
  }
  function three() {
    setResult(result + "3")
  }
  function four() {
    setResult(result + "4")
  }
  function five() {
    setResult(result + "5")
  }
  function six() {
    setResult(result + "6")
  }
  function seven() {
    setResult(result + "7")
  }
  function eight() {
    setResult(result + "8")
  }
  function nine() {
    setResult(result + "9")
  }
  function zero() {
    setResult(result + "0")
  }

  return (
    <>
      <AppContainer className='flex-[1]'>
        <WrapperInput className='h-1/3 flex flex-col items-end justify-center'>
          <InputResult text={result} />
        </WrapperInput>
        <WrapperNum className='flex flex-row flex-wrap h-2/3'>
          <ButtonOp click={deleteText} op={"C"} />
          <ButtonOp click={exponentiate} op={"^"} />
          <ButtonOp click={parentheses} op={"()"} />
          <ButtonOp click={backNum} op={"⌫"} />
          <ButtonNumber click={one} BtnNum={"1"} />
          <ButtonNumber click={two} BtnNum={"2"} />
          <ButtonNumber click={three} BtnNum={"3"} />
          <ButtonOp click={incrAndDikr} op={"+/-"} />
          <ButtonNumber click={four} BtnNum={"4"} />
          <ButtonNumber click={five} BtnNum={"5"} />
          <ButtonNumber click={six} BtnNum={"6"} />
          <ButtonOp click={multiplication} op={"*"} />
          <ButtonNumber click={seven} BtnNum={"7"} />
          <ButtonNumber click={eight} BtnNum={"8"} />
          <ButtonNumber click={nine} BtnNum={"9"} />
          <ButtonOp click={division} op={"/"} />
          <ButtonNumber click={zero} DopStyles={"w-3/4"} BtnNum={"0"} />
          <ButtonOp click={() => console.log(123)} op={"="} />
        </WrapperNum>
        <StatusBar barStyle={"auto"} />
      </AppContainer>
    </>
  );
}