## 드림코딩 엘리 브라우저 101 강의 실습

<br><br>
스스로 실습을 해본 후 제공해주는 솔루션과 비교해서 부족한 점은 주석 등으로 메모!
<br><br>
실습에서 사용한 **이미지는 모두 직접** 그려서 사용했음
<br><br>

---

<br><br>

### 실습에서 배우고 느낀 점들

(이론내용은 비공개라고 하셔서 정리하지 않겠다.)
<br><br><br>

- ### ch_1 : 브라우저 구조와 좌표실습<br><br>

#### 1. window size에 대한 실습 (windowSize.html, js)<br>

그냥 window가 최상위 노드라고 막연하게 알고 있었는데 같은 최상위 window라도 window.screen, .outer, .inner, documentElement.clientWidth로 각각 다른 영역을 의미할 수 있다는 사실까진 잘 몰랐었다. 이번 실습으로 내용을 좀 더 직관적으로 확인할 수 있어서 좋았다.
<br><br>

#### 2. Window에서 요소의 좌표와 page, client좌표 확인해보기 (windowPoint.html, js)<br>

색깔이 다른 한 요소를 class로 가져와 정보를 콘솔에 찍어 확인해보았다. 원하는 요소의 정보를 getBoundingClientRect() 메소드로 가져올 수 있다는 걸 알 수 있었고 client좌표와 page좌표의 차이를 알 수 있었다. 스크롤이나 페이지에서 원하는 위치로 이동할 때 이런 정보들을 사용하면 좋겠다는 생각을 하게 되었다.
<br><br>

#### 3. 버튼이벤트로 원하는 만큼, 원하는 위치로 이동하기 (windowScrolling.html, js)<br>

사실 css가 아직 서툴러서 버튼들을 이동시키는 것에 flex를 사용했었는데 position:fixed와 top, right로 간단하게 조정할 수 있었다.. css에 대한 것도 많이 배워둬야겠다고 생각했다. 그리고 바로 이전 실습에서 생각했던 내용을 바로 이 실습해서 해볼 수 있게 되어서 좋았다. 특별한 요소가 있는 곳으로 바로 이동하는 부분은 내가 .scroll 메소드를 찾아봤을 땐 간단한 방법이 나오지 않아서 상대적으로 복잡하게 했었는데 실습해설에 scrollIntoView() 메소드를 사용해서 훨씬 간편하게 이동하는 걸 보고 많은 메소드들을 잘 찾아서 사용하는 능력도 정말 중요한 것 같다고 다시 느끼게 되었다.
<br><br><br>

---

- ### ch_2 : window관련 실전 실습<br><br>

#### 1. 좌표찾아 007 (searchPoint.html, js, css / target.png)<br>

이왕하는 실습인데 제공하는 그림으로 심심하게 하는 것보다 내가 직접 그려서 적용해보면 좀 더 재밌게 할 수 있지 않을까 싶어 여기 실습부터 내가 그림을 직접 그리기 시작했다. 그림 그리는 데에 시간을 쓰는게 좀 비효율적이라고 생각할 수는 있으나 그 덕에 좀 더 재밌게 했으니 만족한다. 나중에라도 쓰일 수도 있지 않은가!<br>
간단하면서도 css에서 뭔가 막혔던 실습같다. 커서를 따라다니는 줄과 태그를 만드는 과정에서 좀 막혔던 거 같다. client좌표를 마우스가 움직일 때마다 적용해주면 되는 문제였다. 사실 js에서 요소를 가져와 그 안에 직접 style을 지정해 줄 수 있다는 걸 이 실습을 통해 알게됐다. 점점 실습을 통해 많은 걸 알게되는 느낌이라 좋았다!
<br><br>

#### 2. 애옹이들 사이에 있는 멈무 찾기 (findDog.html / cat.png, dog.png)<br>

이 실습 역시 css 때문에 오래걸렸다. js로 스크롤이동 이벤트를 등록하는 건 이전 실습해서 해봤기에 쉽게 할 수 있었지만 중앙정렬을 어떻게 해야할지, 버튼이 왜 그림을 가리는지 고민을 많이 했던 거 같다...<br>
이것 역시 display:block, margin:auto, text-align:center만 적절히 배치하면 쉽게할 수 있는 것이었다. css는 아직 갈 길이 먼 것 같다.😂
<br><br><br>

---

- ### ch_3 : 성능개선 문제 (layout, paint, composition 단계)<br><br>

#### 1. 좌표찾아 007 프로젝트 개선 (searchPointImprov.html, js, css)<br>

눈에 보여지는 css도 렌더링 과정이 있고 css속성에 따라 재구성되는 단계가 달라진다는 사실을 알게 되었다. 이전에 했던 '좌표찾아 007' 실습은 top, right를 이용해서 마우스가 움직일 때마다 상위단계인 layout이 계속해서 변화했어서 프레임이 끊긴다거나 하는 현상이 있을 수 있을만큼 성능이 별로였다는 것을 확인했었다. css속성에 따른 재구성 단계를 보여주는 사이트를 통해서 top, right보다 translate를 사용하는 것이 더 효과적이라는 것을 확인하고 '좌표찾아 007'코드의 js부분만 바꾸어보았다.<br>
알려주신 사이트가 엄청 신기했고 성능개선에 있어서 참고하기 좋겠다는 생각을 했다. (사실 css속성이 생각보다 많구나 하고 놀라기도 했다.)
<br><br><br>

---

- ### ch_4 : 내멋대로 ToDo리스트 만들기!<br><br>

#### 1. ToDo리스트 만들기 (memoList.html, js, css / memo.png)<br>

이전 실습들보다 생각할 거리도 많고 재밌게 했다. dom 메소드로 생각보다 할 수 있는게 굉장히 많다는 걸 느꼈고 뭔가 내가 생각한대로 만들어지니까 뿌듯했던 것같다. <br>하지만 조금 아쉬운 점이 있다.<br> <br>
~~(1) 그라데이션 효과가 화면 조금만 아래로 내려가도 경계선이 생겨서 별로 안예쁘다.~~<br>

> 화면이 좀만 더 아래로 내려가면 그라데이션이 경계져서 안이쁘게 나오거나 하얀 공백이 생기는 것을 수정했다. <br>마음이 한결 편안해지는 기분이다. <br>
<br>
 ~~(2) 메모가 n개 이상 생기면 옆에다 더 생기게 한다던가 그럼 더 좋을거같은데 메모칸을 벗어나서 생기니까 그것도 좀 아쉽다. 열 몇개까진 괜찮지만 그 이상 추가되면 안이뻐진다.~~<br>

>옆에다 더 생겨도 한계가 존재하니까 아에 스크롤로 얼마든지 메모를 추가할 수 있게 수정해보았다. CSS가 제일 어려운 거 같다.<br>
<br>
(3) 페이지를 한번 나가면 메모가 저장되지 않는다는 것도 조금 아쉬웠다. 로컬스토리지나 세션스토리지를 이용하면 이 부분도 되지않을까? <br>
<br>
나중에 아쉬웠던 부분들도 한번 보강해서 만들어보면 좋을 것 같다!<br>
<br>
추가로 체크버튼, 삭제버튼에 transition을 추가해서 클릭할 수 있는 것이라는 느낌을 더하고 엔터로 메모추가, 새로 추가된 위치로 스크롤 이동 등을 추가해보았다.
<br><br><br>

---

- ### ch_5 : 게임 만들기<br><br>

### 나비 잡기 게임! (game.html, js, css / gameImg, gameSound)<br>
*gameSound의 bgm은 기증창작물을 사용하였음   <br><br>
아무것도 없이 시작하려니 생각보다 오래 걸렸지만(한...3~4일?) 그래도 혼자서 완성하고나니 너무 뿌듯했다.   
확실히 뭐랄까... 이렇게 만들고나니 바닐라 js가 좀 불편하긴 하다고 느낀거같다. 함수의 매개변수를 optional로 줄 수 없다던가, props로 전달하는게 아니라 전역변수로 만들어서 써야한다는 점이라던가 뭔가 좀 불편했던 것 같다. 그래도 확실히 서칭 능력도 많이 올라간 것 같고... 간단한 게임이지만 바닐라 js로 다 완성하니 힘들고 찝찝하면서도 뿌듯했다.    
진짜 다 좋은데 조금 아쉬운게 있다면 아이템을 빠르게 누르면 소리가 겹쳐서 나지 않는다는 점이다.ㅠㅠ     
게임의 특성상 아이템 클릭을 빠르게 하면 짧은 효과음을 연속해서 빠르게 재생해야하는데 소리를 가져오는 것에서 시간이 좀 걸리는 것 같고 ~~소리가 겹쳐서 재생하는 방법을 아직 잘 모르겠어서 구현을 못했다.~~    이게 좀 아쉽지만 다른건 만족스럽게 만들어진 것 같다.    
만들면서 힘들었다고 생각했던 건 음... gameZone에 맞춰서 아이템 좌표를 지정하고 커서 모양도 gameZone에만 적용하고 싶었는데 계속 gameZone크기가 이상하게 맞춰졌다거나 좌표 위치가 gameZone안이 아니라 벗어난다거나 해서 크기와 위치를 맞추는게 오래걸렸던 것 같다.   
그리고 타이머도 어떻게 정지하고 시작하는지 계속 찾아보고 적용하는데 시간이 많이 걸렸던 것 같다. 게임이 시작하고 끝나는 함수가 달랐어서 결국 전역변수로 만들어서 저장해야한게 조금 아쉽다.    
하지만 조금 부족한게 있었더라도 혼자서 해냈다는 것이 만족스럽고 생각한대로 잘 만들어 진 것같다!   
<br><br>
- 솔루션을 보고 알게 된 것 : event.target.matches(".~") 이렇게 하면 문자열 안에 있는 css selecter와 target이 일치하는지 true, false로 알려준다고 한다. 이걸 이용하면 클릭이벤트 하나에 나비, 말벌을 구분해서 바로 처리해줄 수 있는 것 같다. 나는 나비와 말벌 아이템에 반복문을 이용해서 하나하나 다 클릭 이벤트를 달아놨는데 이것보다 효율적인 것 같다.   <br>
- 그리고 하나 더, 토론창을 보고 아이템을 빠르게 누르면 소리가 겹쳐서 나지 않는 것을 해결했다! 이미 해당 사운드가 재생 중이니까 다음 사운드가 연속해서 나지 않는 것인데 sound.currentTime=0을 play()다음에 작성해주니 해결했다! 항상 play시작 지점은 맨 처음이니까 연속해서 날 수 있는 것 같다. 이제 더이상 아쉬운 점 없는 게임을 완성했다! 뿌-듯