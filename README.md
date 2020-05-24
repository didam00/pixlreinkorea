## Pixlr 번역

Pixlr E (https://pixlr.com/e/) 을 번역하는 코드입니다. 
해당 사이트에서 개발자 모드 (f12) 를 누른 뒤, Console 탭에서 다음 코드를 넣으시면 사용하실 수 있습니다.
해당 사이트가 로딩이 완료된 후에 입력해주셔야합니다.

```javascript
let pEiK = document.createElement("script"); pEiK.src = "https://didam00.github.io/pixlreinkorea/pixlr_in_korean.js"; document.head.appendChild(pEiK); pEiK.onload = function () {pEiKTs()};
```

***

###### 2020.05.14: Ctrl + D 를 통해 이제 레이어를 복사할 수 있으며, 코드를 좀 더 보기 좋게 수정하고, 업데이트된 탭을 번역하였습니다!
###### 2020.05.24: 이젠 ~~_Ctrl + Shift + D_~~ Ctrl + t + D 를 통해 레이어를 복사할 수 있습니다.
