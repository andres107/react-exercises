import React, { useMemo } from "react";

function fibo(n) {
  if( n <= 1 ){
    return n;
  }
  return  fibo(n-1) + fibo(n-2);
}

export function FibonacciMemo(props){
  const { number } = props;
  
  let fibo1 = useMemo(() => fibo(number-1), [number-1]);
  let fibo2 = useMemo(() => fibo(number-2), [number-2]);
  const result = fibo1 + fibo2;
  return <b><br/>El número {number} de fibonacci es: {result}<br/></b>

}

export default FibonacciMemo;
