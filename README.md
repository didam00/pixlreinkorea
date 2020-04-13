# pixlreinkorea

Pixlr E (https://pixlr.com/e/) 을 번역하는 코드입니다. 
해당 사이트에서 개발자 모드 (f12) 를 누른 뒤, Console 탭에서 다음 코드를 넣으시면 사용하실 수 있습니다.
해당 사이트가 로딩이 완료된 후에 입력해주셔야합니다.

let pEiK = document.createElement("script"); pEiK.src = "https://didam00.github.io/pixlreinkorea/pixlr_in_korean.js"; document.head.appendChild(pEiK); pEiK.onload = function () {pEiKTs()};
