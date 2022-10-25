
- ### ch_3 : 성능개선 문제 (layout, paint, composition 단계)<br><br>
### [실습으로 만든 페이지 바로가기](https://kimdayoung02.github.io/TIL/DreamCoding/browser101/ch_3/searchPointImprov)
#### 1. 좌표찾아 007 프로젝트 개선 (searchPointImprov.html, js, css)<br>

눈에 보여지는 css도 렌더링 과정이 있고 css속성에 따라 재구성되는 단계가 달라진다는 사실을 알게 되었다. 이전에 했던 '좌표찾아 007' 실습은 top, right를 이용해서 마우스가 움직일 때마다 상위단계인 layout이 계속해서 변화했어서 프레임이 끊긴다거나 하는 현상이 있을 수 있을만큼 성능이 별로였다는 것을 확인했었다. css속성에 따른 재구성 단계를 보여주는 사이트를 통해서 top, right보다 translate를 사용하는 것이 더 효과적이라는 것을 확인하고 '좌표찾아 007'코드의 js부분만 바꾸어보았다.<br>
알려주신 사이트가 엄청 신기했고 성능개선에 있어서 참고하기 좋겠다는 생각을 했다. (사실 css속성이 생각보다 많구나 하고 놀라기도 했다.)<br><br>
![개선 전 좌표](https://user-images.githubusercontent.com/73173270/197820007-67e34943-78ff-41b9-b1e5-3670674ad5c9.jpg)
<br>위와 같이 개선 전에는 마우스가 움직여 좌표가 바뀔 때마다 레아이웃이 다시 만들어진다.<br><br>
![개선된 좌표](https://user-images.githubusercontent.com/73173270/197820517-625c0727-ce51-494a-aee0-42d9a6477ebb.jpg)
<br>위는 개선 후의 성능인데 좌표가 바뀌어도 레아이웃이 다시 만들어지지 않아 성능 면에서 더 효율적임을 알 수 있다.
