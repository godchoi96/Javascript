// // if / condition

// let year = 1996;

// if (year == 1996) {
//     console.log('정답입니다.');
// } else {
//     console.log('정답이 아닙니다.');
// }

// // 3항 연산자

// let age = 26;

// let result = (age == 27) ? '동갑' : '동갑아님';
// console.log(result)

// // 다중 ?항

// let message = (age < 19) ? '미성년자' : (age < 30) ? '20대' : '30대 이상';
// console.log(message)

// // 반복문 / iteration / while
// let i = 0;

// while (i < 3) {
//     console.log(i);
//     i++;
// }

// // 함수
// // 파라미터를 두 개 받는 상황
// function showMessage(name, text) {
//     name = "*" + name + "*";
//     console.log(name + ': ' + text);
// }

// let name = 'seongdae';
// showMessage(name, '하이!');

// 함수
// 리턴 시키기

function checkAge(age) {
    if (age < 20) {
        alert('부모님 허락은 받았습니까?');
    } else {
        return true;
    }
}

let age = prompt('나이를 알려주세요' , 18);


if (checkAge(age)) {
    alert('인정');
} else {
    alert('불합');
}