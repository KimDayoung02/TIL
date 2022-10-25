
- ### ch_1 : 브라우저 구조와 좌표실습<br><br>

#### 1. window size에 대한 실습 (windowSize.html, js)<br>

그냥 window가 최상위 노드라고 막연하게 알고 있었는데 같은 최상위 window라도 window.screen, .outer, .inner, documentElement.clientWidth로 각각 다른 영역을 의미할 수 있다는 사실까진 잘 몰랐었다. 이번 실습으로 내용을 좀 더 직관적으로 확인할 수 있어서 좋았다.
<br><br>

#### 2. Window에서 요소의 좌표와 page, client좌표 확인해보기 (windowPoint.html, js)<br>

색깔이 다른 한 요소를 class로 가져와 정보를 콘솔에 찍어 확인해보았다. 원하는 요소의 정보를 getBoundingClientRect() 메소드로 가져올 수 있다는 걸 알 수 있었고 client좌표와 page좌표의 차이를 알 수 있었다. 스크롤이나 페이지에서 원하는 위치로 이동할 때 이런 정보들을 사용하면 좋겠다는 생각을 하게 되었다.
<br><br>

#### 3. 버튼이벤트로 원하는 만큼, 원하는 위치로 이동하기 (windowScrolling.html, js)<br>

사실 css가 아직 서툴러서 버튼들을 이동시키는 것에 flex를 사용했었는데 position:fixed와 top, right로 간단하게 조정할 수 있었다.. css에 대한 것도 많이 배워둬야겠다고 생각했다. 그리고 바로 이전 실습에서 생각했던 내용을 바로 이 실습해서 해볼 수 있게 되어서 좋았다. 특별한 요소가 있는 곳으로 바로 이동하는 부분은 내가 .scroll 메소드를 찾아봤을 땐 간단한 방법이 나오지 않아서 상대적으로 복잡하게 했었는데 실습해설에 
scrollIntoView() 메소드를 사용해서 훨씬 간편하게 이동하는 걸 보고 많은 메소드들을 잘 찾아서 사용하는 능력도 정말 중요한 것 같다고 다시 느끼게 되었다.
