// 확인하시기 전에 주석을 처리하셔야 합니다.

// alert('msg');
// modal 창으로 메시지를 띄웁니다.
alert('Hi');

// prompt('msg', [default])
// modal 창으로 메시지를 띄우지만 이 modal 창은 입력을 받도록 요구합니다.
let age = prompt('숫자를 아무거나 입력해보세요.', '');
alert(`당신이 입력한 숫자는 ${age}입니다.`);

// confirm('msg');
// modal 창으로 메시지를 띄우지만 이 modal 창은 확인과 취소를 입력 받습니다. 기본적으로 확인은 1(참), 취소는 0(거짓)을 반환합니다.
let isTrue = confirm('당신을 무엇을 선택하십니까?');
alert(isTrue);