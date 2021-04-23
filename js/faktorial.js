function faktorial(n){
  if(n > 170)  {
      return 'infinity';
  }
  let hasil = 1;
  for(let i = 1; i <= n; i++){
  	hasil *= i;    
  }
  
  function convertToString(nomer){
  	return BigInt(nomer).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  return convertToString(hasil);
}