# todolist_newver
![todolist](https://github.com/JAEMINKWAK/todolist_newver/assets/95974639/3e76c173-ba4f-4021-b0cb-95b02d7b3cd3)
## 개발 동기
쇼핑몰 회원정보 페이지 프로젝트를 끝내고, 투두리스트 프로젝트를 바로 시작했다.
시작한 이유는 아래 링크에 있는 유튜브를 보니깐 JS 공부를 할 때, 프로젝트 몇 개 하는 것을 추천한다고 한다.
#### 참고영상
!youtube[eQrRbzizT6o?si=64wrM_cT2xbg02kR]
추천하는 프로젝트로 투두리스트, 계산기, 날씨 API를 받아와서 날씨 앱만들기, 주식 API 받아와서 주식 앱 만들기 등을 추천했다. 나는 생각해보니 이런 프로젝트를 만들면서 JS 실력을 쌓는게 나한테 도움이 되겠다고 생각이 들어서 바로 만들기 시작했다.
## 투두리스트 기능
투두리스트에 무슨 기능을 넣을까 고민을 했다.
아래와 같은 기능을 무조건 넣어야 투두리스트라고 할 수 있다고 판단하여, 아래와 같은 기본적인 기능을 넣었다.

1. **할일 추가:** input 태그에 텍스트를 입력한 후 버튼을 사용해서 내용을 추가
2. **목록에 있는 내용 수정:** 수정 버튼을 누르면 텍스트를 수정할 수 있게 만들어서 내용 수정
3. **목록에 있는 내용 삭제:** 삭제 버튼을 누르면 경고창을 띄운 후 내용 삭제
## 할일 추가
할일을 추가하는 버튼에 이벤트를 추가한다.
그리고 공백이 없을 경우에만 이벤트가 실행될 수 있도록 조건을 만들고,
사용자가 투두리스트를 사용할 때 앞뒤로 예기치않은 띄어쓰기 및 공백을 발생시킨 것을 없애기 위해 
**trim() 메서드**를 사용했다.
```javascript
addBtn.addEventListener('click', function () {
  const listText = addInput.value.trim();
  if (listText !== '') {
    addList(listText);
    addInput.value = '';
  }
});
```
#### trim(): 문자열 양 끝에 공백을 제거하고 문자열을 반환하는 메서드
```javascript
const korea = "		한국인은 밥심이다.	";

console.log(korea.trim()); 
// Expected output: "한국인은 밥심이다."
```

## 목록에 있는 내용 수정
수정 버튼에 이벤트를 넣어서 prompt로 수정할 텍스트를 받는다.
조건문을 활용해 만약 수정할 문장이 공백일 경우에는 기존의 텍스트로 유지하는 방안이다.
```javascript
editBtn.addEventListener('click', function () {
  const editParagraph = prompt(
    '수정할 내용을 입력하세요.',
    listParagraph.textContent
  );
  if (editParagraph !== null) {
    listParagraph.textContent = editParagraph;
  } else {
    alert('수정할 내용을 입력해주세요!');
  }
});
```
## 목록에 있는 내용 삭제
삭제 버튼에 사용된 이벤트를 설명해보면, 삭제 버튼을 누를 경우에 
2차 경고의 의미로 confirm() 메서드를 활용해 다시 한 번 물어본다.
```javascript
delBtn.addEventListener('click', function () {
  if (confirm('이 항목을 삭제하시겠습니까?')) {
    todolist.removeChild(listItem);
  }
});
```
## 최종 결과
최종 결과를 보면 다음과 같다.
추가, 수정, 삭제 버튼을 사용자 편의성을 고려하여 구현하였다.
![투두리스트](https://velog.velcdn.com/images/woalsrh/post/c20b2f21-130e-48cb-a7c7-06d90ea73dba/image.gif)


