import React, { useMemo } from "react";

function fibo(n) {
  if( n <= 1 ){
    return n;
  }
  return  fibo(n-1) + fibo(n-2);
}

export function FibonacciMemo(props){
  const { number } = props;
  const fibo1 = number - 1;
  const fibo2 = number - 2;
  
  const result = useMemo(() => fibo(fibo1), [fibo1]) +
   useMemo(() => fibo(fibo2), [fibo2]);

  return <b><br/>El número {number} de fibonacci es: {result}<br/></b>

}

export default FibonacciMemo;
