module.exports = function getZerosCount(number, base) {
  let arr = [];
  if( base > 0 && base != 1){
    for(let i = 2; i <= base; i++){
      while(base % i == 0 && base > 1){
        arr.push(i);
        base = base / i;
      }
        if(base/i == 1){
          arr.push(base);
        }
    }
  } 
    let arrX=[], arrN=[];     //массив множителей и массив степеней множителей соответственно
    let l = arr.length;
    for (let i=0; i<=l; i++) {    
        let n=1;
        let x=arr[0];
          for (let j=1; j<arr.length; j++){
            if (arr[j]==x) {
                n++;
            }
          }
        arrX.push(x);    //добавление множителя в массив
        arrN.push(n);   //добавление степени в массив
        arr=arr.filter(element => element !==x);    //удаление текущего множителя из массива
    }
                                            //Главный цикл
                                            
    let arrFact = [];
    for (let i=0; i<arrX.length; i++) {
        let factoriz = 0;
        let y = number;
          while (y >= 1) {
            y = y/arrX[i];
            factoriz = factoriz + Math.trunc(y);   //функция целой части от числа
          }
        let c = Math.trunc(factoriz/arrN[i]);
        arrFact.push(c);
    }
    let zero=arrFact[0];
    for (let y=1; y<=arrFact.length; y++) {
      if (arrFact[y]<zero) {
        zero=arrFact[y];
      }
    }
  return zero;
}