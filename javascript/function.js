

// 1. 두 수를 입력받아 큰 수를 반환하는 함수
function max1(num1, num2) {
    if(num1 === num2){
        return "다시 입력하세요";
    } else if( num1 > num2){
        return num1;
    } else{
        return num2;
    }
}
// 삼항 연산자
// a > b ? a : b

console.log('max 함수 결과 : ' , max1(1,2) );
console.log('max 함수 결과 : ' , max1(3,2) );
console.log('max 함수 결과 : ' , max1(2,2) );
console.log('max 함수 결과 : ' , max1(1,-2) );




// 2. 숫자를 입력하면 요일을 반환하는 함수
function day(num) {
    if(num > 7 || num > 31){
        return "다시입력하세요";
    } else if( num%7 == 0){
        return "일요일";
    } else if( num%7 == 1){
        return "월요일";
    } else if( num%7 == 2){
        return "화요일";
    } else if( num%7 == 3){
        return "수요일";
    } else if( num%7 == 4){
        return "목요일";
    } else if( num%7 == 5){
        return "금요일";
    } else{
        return "토요일";
    }
}
function name(params) {
    var week = "일월화수목금토"; // 문자열인데도 배열처럼 접근 할 수 있다. 하지만 값을 변경 할 수 없다. readonly
    return week[num%7];

}
console.log('day 함수 결과 : ' , day(0) );
console.log('day 함수 결과 : ' , day(1) );
console.log('day 함수 결과 : ' , day(2) );
console.log('day 함수 결과 : ' , day(3) );
console.log('day 함수 결과 : ' , day(4) );
console.log('day 함수 결과 : ' , day(5) );
console.log('day 함수 결과 : ' , day(6) );
console.log('day 함수 결과 : ' , day(7) );
console.log('day 함수 결과 : ' , day(31) );
console.log('day 함수 결과 : ' , day(32) );
console.log('day 함수 결과 : ' , day(-32) );

// 3. 짝수 홀수 판단하는 함수
function evenOdd(num) {
    if ( num === 0 ){
        return "다시 입력하세요"
    }else if ( num%2 == 1){
        return "홀수"
    } else{
        return "짝수"
    } 
    // return num%2 === 0 ? '짝수' : '홀수';  
}
console.log('evenOdd 함수 결과 : ' , evenOdd(-8) );
console.log('evenOdd 함수 결과 : ' , evenOdd(0) );
console.log('evenOdd 함수 결과 : ' , evenOdd(19) );

// 4. 숫자를 배열로 전달받아 숫자들의 평균을 반환하는 함수
function average(arr) {
    var result = 0;
    for(var i = 0; i < (arr.length); i++){
        result += arr[i]
    }
    return result / (arr.length);
}
// function average(arr) {
//     var result = 0;
//     arr.forEach(function(item) {
//         result += item;
//     });
//     return result / (arr.length);
// }

console.log('average 함수 결과 : ', average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));

// 5. 문자를 배열로 전달 받아 문자열 하나로 반환하는 함수
function arrSting(arr) {
    var result = '';
    for(var i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}

function arrSting(arr) {
    return arr.join('');
}
console.log('arrString 함수 결과: ', arrSting(['a', 'b', 'c', 'd']) );

// 6. 세 수를 입력받아 큰 수를 반환하는 함수
function max2(num1, num2, num3) {
    if(num1 === num2 === num3){
        return "다시 입력하세요";
    }else if(num1 > num2 && num1 > num3){
        return num1;
    } else if(num2 > num1 && num2 > num3){
        return num2;
    } else if(num3 > num2 && num3 > num1){
        return num3;
    } 
}
function max2(a, b, c) {
    return max1( max1(a,b), max1(b,c) );
}
function max2(a, b, c) {
    return Math.max(a,b,c);
}

console.log('max 함수 결과 : ' , max2(1, 1, 1) );
console.log('max 함수 결과 : ' , max2(1, -1, 1) );
console.log('max 함수 결과 : ' , max2(1, 2, 3) );
console.log('max 함수 결과 : ' , max2(3, 1, 2) );
console.log('max 함수 결과 : ' , max2(3, 2, 1) );
console.log('max 함수 결과 : ' , max2(-1, -2, -3) );


// n개의 숫자중 에 제일 큰 수 
function max2(...n) {
    console.log('n : ', Array.isArray(n));
    var max = n[0];
    for(var i = 0; i < n.length; i++){
        if (max < n[i]){
            max = n[i]
        }
    }
    return max;
}

// 7. 전화번호를 입력하면 뒤에 4자리를 제외하고 *로 바꾸는 함수
var phone1 = "010-1234-1234";
var phone2 = "01012341234";

function phone(phoneNumber) {
    if(phoneNumber.length === 13){
       return phoneNumber.substring(0, 9) + "****";
    }
    return phoneNumber.substring(0, 7) + "****";
}

function phone(phoneNumber) {
    var result = '';
    for(var i = 0, l = phoneNumbe.length; i < l; i++){
        if(l - i > 4){
            result += '*';
        } else{
            result += phoneNumber[i];
        }
    }
    return result;
}
function phone(phoneNumber) {
    return phoneNumber.replace(/[0-9](?=[0-9]{4})/g, "*");
    // return phoneNumber.replace(/[0-9](?=[0-9]{4})$/g, "*");

}


console.log('phone 함수 : ', phone("01023451212") );
console.log('phone 함수 : ', phone("010-2345-1212") );

// 8. Email Validation
function emailValid(emailinput) {
    if ( emailinput.indexOf("@") === (-1) || emailinput.indexOf(".") === (-1)){
        // @ 또는 . 이 없을때
        return "@ 혹은 . 이 생략"
    } else if(emailinput.length < 5 ){
        // 5글자 이하일때 
       return "5글자 이하"
    } else if(emailinput.charAt(1) === "@" || emailinput.charAt(1) === "."){
        // @아이디@이메일.com
       return "@아이디@이메일.com"
    } else if(emailinput.indexOf("@.")  > 0 || emailinput.indexOf(".@") > 0){
        // @. 혹은 .@ 사용
       return "@ 다음 . 혹은   . 다음 @가 바로 연다라 사용"
    } else if(emailinput.indexOf("@") > emailinput.lastIndexOf(".")){
        // @ 다음에 . 이 없는지 있는지 확인
       return "@ 다음에 . 이 없는지 있는지"
    } else if(emailinput.indexOf(" ") > 0 ){
        // 공백
       return "공백"
    }else if(emailinput.indexOf("@", (emailinput.indexOf("@")+ 1) ) > emailinput.indexOf("@")){
        // @를 2번 사용
       return "@를 2번 사용"
    } 
    return "email 주소 유효합니다."
}
function emailValid(emailinput) {
    return emailinput.indexOf('@') !== -1;
}


console.log('emailValid 함수 seromkim1005@nate.com : ', emailValid("seromkim1005@nate.com") );
console.log('emailValid 함수 seromkim1005natecom : ', emailValid("seromkim1005natecom") );
console.log('emailValid 함수 seromkim1005nate.com : ', emailValid("seromkim1005nate.com") );
console.log('emailValid 함수 seromkim1005@natecom : ', emailValid("seromkim1005@natecom") );
console.log('emailValid 함수 seromkim1005.nate@com : ', emailValid("seromkim1005.nate@com") );
console.log('emailValid 함수 seromkim1005.@natecom : ', emailValid("seromkim1005.@natecom") );
console.log('emailValid 함수 serom.kim.1005@nate.com : ', emailValid("serom.kim.1005@nate.com") );
console.log('emailValid 함수 seromkim1005.nate@com : ', emailValid("seromkim1005.nate@com") );
console.log('emailValid 함수 seromkim@1005@nate.com : ', emailValid("seromkim@1005@nate.com") );
console.log('emailValid 함수 seromkim 1005@nate.com : ', emailValid("seromkim 1005@nate.com") );
console.log('emailValid 함수 @. : ', emailValid("@.") );

// 9. 비밀번호 문자열 Validation 영어문자 숫자 포함
// 1) 영어인지
// 2) 숫자포함인지
// 3) 8글자 이상인지
// function passwordValid(password) {
//     if(영문이 아니면){
//         return "영문으로만 작성해 주세요."
//     } else if(숫자가 포함이지 않으면){
//         return "숫자가 포함이어야 합니다."
//     } else if( password.length <= 8){
//         return "8글자 이상이어야 합니다."
//     }
// }


function ValidatePassword(pw) {
    var lowCase = 'abcdefghijklmnopqrstuvwxyz';
    var upCase = low.toUpperCase();
    var numCase = '0123456789';
    var lowCheck = false;
    var upCheck = false;
    var numCheck = false;
    for(var i = 0, l = (lowCase.length); i < l; i++){
       if( pw.indexOf(lowCase[i]) !== -1){
           lowCheck = true;
       }
       if( pw.indexOf(upCase[i]) !== -1){
           upCheck = true;
       }
       if( pw.indexOf(numCase[i]) !== -1){
           numCheck = true;
       }
    }

    for(var i = 0, l = (upCase.length); i < l; i++){
       if( pw.indexOf(lowCase[i]) !== -1){
           lowCheck = true;
       }
       if( pw.indexOf(upCase[i]) !== -1){
           upCheck = true;
       }
       if( pw.indexOf(numCase[i]) !== -1){
           numCheck = true;
       }
    }

    for(var i = 0, l = (numCase.length); i < l; i++){
       if( pw.indexOf(lowCase[i]) !== -1){
           lowCheck = true;
       }
       if( pw.indexOf(upCase[i]) !== -1){
           upCheck = true;
       }
       if( pw.indexOf(numCase[i]) !== -1){
           numCheck = true;
       }
    }
}


function ValidatePassword(pw) {
    return /^.(?={8,}).*(?=[0-9].*(?=[a-zA-z])$/.test(pw);
}



/**
 * JavaScript 데이터 유형을 완벽하게 문자열로 반환하는 유틸리티 함수
 *
 * @global
 * @func    type
 * @param   {any} data - JavaScript 모든 데이터 유형
 * @returns {string}   - 소문자로 데이터 유형 이름을 문자열로 반환
 */
function type(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
}

/**
 * JavaScript 데이터 유형을 검증하여 참/거짓을 반환하는 유틸리티 함수
 *
 * @global
 * @func    isType
 * @param   {any}     data - JavaScript 모든 데이터 유형
 * @param   {string}  kind - 데이터 유형 이름(소문자)
 * @returns {boolean}      - 데이터 일치 검증 결과를 참/거짓으로 반환
 */
function isType(data, kind) {
  // validateError()를 사용하여 오류 조건을 발생시킴:
  // kind 데이터 유형이 'string'이 아니면(!), 오류를 발생시킨다. (설정 메시지 출력)
  validateError(kind, '!string', '2번째 전달인자는 문자열이어야 합니다');
  return type(data) === kind;
}

/**
 * 오류 조건을 발생시키는 문장을 만들어 내는 유틸리티 함수
 *
 * @global
 * @func    validateError
 * @param   {any}    data          - JavaScript 모든 데이터
 * @param   {string} kind          - 오류 검증을 위한 문자열 e.g) 'string', '!string'
 * @param   {string} error_message - 출력할 오류 메시지(옵션)
 * @returns {string}               - 유효한 경우 출력되는 메시지
 */
function validateError(data, kind, error_message) {
  data = type(data);
  if ( kind.indexOf('!') === 0 ) {
    if ( data !== kind.slice(1) ) { throw error_message || '두 값이 다르기에 오류입니다.'; }
  } else {
    if ( data === kind ) { throw error_message || '두 값은 동일하기에 오류입니다.'; }
  }
  return '오류는 발생하지 않았습니다';
}
// 1. 두 수를 입력받아 큰 수를 반환하는 함수 function
function max (a, b){
  // if(a > b){
  //   return a;
  // } else {
  //   return b;
  // }
  return a > b ? a : b;
}
console.log('max(20, 25) 함수 결과:', max(20, 25));
// 결과값 25
// 2. 숫자를 입력하면 요일을 반환하는 함수
function day(num){
  var week = "일월화수목금토";
  return week[num%7];
}
console.log('day(2): ', day(2));

// 3. 짝수 홀수 판단하는 함수

function isEven(num){
  return num % 2 === 0 ? '짝수' : '홀수';
}
console.log('isEven(0): ', isEven(0));

// 4. 숫자를 배열로 전달받아 숫자들의 평균을 반환하는 함수
function avg(numArr){
  var result = 0;
  for(var i = 0, l = numArr.length; i < l; i ++){
    result += numArr[i];
  }
  return result / numArr.length;
  // numArr.forEach(function(item) {
  //   result += item;
  // });
  // return result / numArr.length;
}
console.log('avg([1, 2, 3, 4, 5, 6]): ', avg([1, 2, 3, 4, 5, 6]));

// 5. 문자를 배열로 전달 받아 문자열 하나로 반환하는 함수
function oneString(strArr){
  var result = '';
  for(var i = 0, l = strArr.length; i < l ; i++){
    result +=strArr[i];
  }
  return result;
  // return strArr.join('');
}
console.log('oneString([\'aaa\', \'bbb\', \'ccc\']): ', oneString(['aaa', 'bbb', 'ccc']));
// 6. 세 수를 입력받아 큰 수를 반환하는 함수
function max3(a, b, c){
  return max(max(a, b), max(b,c));
}
console.log('max3(5, 11, 77): ', max3(5, 11, 77));

// n개의 인자를 받아서 가장 큰 수를 반환
function maxn(...n){
  console.log('n: ', Array.isArray(n));
  var max = n[0];
  for(var i = 1, l = n.length; i < l ; i++){
    if( max < n[i] ){
      max = n[i];
    }
  }
  return max;
}
console.log('maxn(2, 3, 5, 6, 7, 8, 55, 11): ', maxn(2, 3, 5, 6, 7, 8, 55, 11));
// 7. 전화번호를 입력하면 뒤에 4자리를 제외하고 *로 바꾸는 함수
function maskPhoneNum(phoneNum){
  // var result = '';
  // for(var i = 0, l = phoneNum.length; i < l; i ++){
  //   if(l - i > 4){
  //     result += '*'
  //   } else {
  //     result += phoneNum[i];
  //   }
  // }
  // return result;
  return phoneNum.replace(/[0-9](?=[0-9]{4})/g, '*')
}
console.log('maskPhoneNum(00011112222): ', maskPhoneNum('00011112222'));
// 8. Email validation
function validateEmail (email){
  return email.indexOf('@') !== -1;
}
console.log('validateEmail(\'asdf@aasdf\'): ', validateEmail('asdf@aasdf'));


// 9. 비밀번호 문자열 validation 영어문자 숫자 포함

function validatePassword(pw){
  // var lowCase = 'abcdefghijklmnopqrstuvwxyz';
  // var upCase = lowCase.toUpperCase();
  // var numCase = '0123456789';
  // var lowCheck = false;
  // var upCheck = false;
  // var numCheck = false;
  // if (pw.length >= 8){
  //   for(var i = 0, l = lowCase.length; i < l; i++){
  //     if (pw.indexOf(lowCase[i]) !== -1){
  //       lowCheck = true;
  //     }
  //     if (pw.indexOf(upCase[i]) !== -1){
  //       upCheck = true;
  //     }
  //   }
  //   for(var i = 0, l = numCase.length; i < l; i++){
  //     if (pw.indexOf(numCase[i]) !== -1){
  //       numCheck = true;
  //     }
  //   }
  // }
  // if( lowCheck && upCheck && numCheck){
  //   return true;
  // } else {
  //   return false;
  // }
  return /^.*(?=.{8,20})(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/.test(pw);
}

console.log('validatePassword("Password18"): ', validatePassword("Password18"));

















