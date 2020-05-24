// pixlr magic
function $(a) {return document.querySelector(a);}
function $$(a) {return document.querySelectorAll(a);}

function listChild(a, b) {
  return Array.from($$(".menu>li")[a].children[1].children).filter(a => a.className != "split")[b].children[0];
}

function listChildspan(a, b) {
  return Array.from($$(".menu>li")[a].children[1].children).filter(a => a.className != "split")[b].children[0].children[0]
}

function childsChild(a, b, c) {
  return Array.from($$(".menu>li")[a].children[1].children).filter(a => a.className != "split")[b].children[1].children[c].children[0];
}

function childsChildspan(a, b, c) {
  return Array.from($$(".menu>li")[a].children[1].children).filter(a => a.className != "split")[b].children[1].children[c].children[0].children[0];
}

function pEiKTs() {
  // 파일
  $$(".menu>li>a")[0].innerText = "파일"
    listChild(0, 0).innerHTML = "새 이미지.."             + listChildspan(0, 0).outerHTML;
    listChild(0, 1).innerHTML = "이미지 불러오기.."       + listChildspan(0, 1).outerHTML;
    listChild(0, 2).innerHTML = "이미지 링크 불러오기.."
    listChild(0, 3).innerHTML = "STOCK에서 불러오기.."    + listChildspan(0, 3).outerHTML;
    listChild(0, 4).innerHTML = "요소 추가하기.."         + listChildspan(0, 4).outerHTML;

    listChild(0, 5).innerHTML = "저장하기.."              + listChildspan(0, 5).outerHTML;
    listChild(0, 6).innerHTML = "인쇄하기.."              + listChildspan(0, 6).outerHTML;
    listChild(0, 7).innerHTML = "닫기"                    + listChildspan(0, 7).outerHTML;
    
  // 편집
  $$(".menu>li>a")[1].innerText = "편집"
    listChild(1, 0).innerHTML = "실행 취소"               + listChildspan(1, 0).outerHTML;
    listChild(1, 1).innerHTML = "재실행"                  + listChildspan(1, 1).outerHTML;

    listChild(1, 2).innerHTML = "자르기"                  + listChildspan(1, 2).outerHTML;
    listChild(1, 3).innerHTML = "복사하기"                + listChildspan(1, 3).outerHTML;
    listChild(1, 4).innerHTML = "지우기"                  + listChildspan(1, 4).outerHTML;
    listChild(1, 5).innerHTML = "붙여넣기"                + listChildspan(1, 5).outerHTML;

    listChild(1, 6).innerHTML = "자유 변형"               + listChildspan(1, 6).outerHTML;
    listChild(1, 7).innerHTML = "자유 왜곡"               + listChildspan(1, 7).outerHTML;
    listChild(1, 8).innerHTML = "변형"
      childsChild(1, 8, 0).innerHTML = childsChildspan(1, 8, 0).outerHTML + "왼쪽으로 회전 / 시계 반대 방향"
      childsChild(1, 8, 1).innerHTML = childsChildspan(1, 8, 1).outerHTML + "오른쪽으로 회전 / 시계 방향"
      childsChild(1, 8, 2).innerHTML = childsChildspan(1, 8, 2).outerHTML + "좌우반전"
      childsChild(1, 8, 3).innerHTML = childsChildspan(1, 8, 3).outerHTML + "상하반전"
      
    listChild(1, 9).innerHTML = "테두리.."
    listChild(1, 10).innerHTML = "채우기.."

    listChild(1, 11).innerHTML = "환경 설정.."
    
  // 이미지
  $$(".menu>li>a")[2].innerText = "이미지";
    listChild(2, 0).innerHTML = "이미지 크기..";
    listChild(2, 1).innerHTML = "캔버스 크기..";
    listChild(2, 2).innerHTML = "이미지 회전";
      childsChild(2, 2, 0).innerHTML = $$(".menu a img")[0].outerHTML + "왼쪽으로 회전 / 시계 반대 방향";
      childsChild(2, 2, 1).innerHTML = $$(".menu a img")[1].outerHTML + "오른쪽으로 회전 / 시계 방향";
      childsChild(2, 2, 2).innerHTML = $$(".menu a img")[2].outerHTML + "좌우반전";
      childsChild(2, 2, 3).innerHTML = $$(".menu a img")[3].outerHTML + "상하반전";

    listChild(2, 3).innerHTML = "자르기";
    listChild(2, 4).innerHTML = "다듬기";
    
  // 레이어
  $$(".menu>li>a")[3].innerHTML = "레이어";
    listChild(3, 0).innerHTML = "새 레이어";
    listChild(3, 1).innerHTML = "레이어 복사" + "<span>Ctrl + D</span>";
    listChild(3, 2).innerHTML = "이미지 레이어 생성..";
    listChild(3, 3).innerHTML = "요소 레이어 생성..";
    listChild(3, 4).innerHTML = "이미지 링크 레이어 생성..";
    listChild(3, 5).innerHTML = "레이어 삭제" + listChildspan(3, 5).outerHTML;

    listChild(3, 6).innerHTML = "텍스트 / 요소 래스터화";

    listChild(3, 7).innerHTML = "아래와 병합" + listChildspan(3, 7).outerHTML;
    listChild(3, 8).innerHTML = "보이는 요소와 병합" + listChildspan(3, 8).outerHTML;
    listChild(3, 9).innerHTML = "모든 레이어 병합" + listChildspan(3, 9).outerHTML;

    listChild(3, 10).innerHTML = "위로 가져오기" + listChildspan(3, 10).outerHTML;
    listChild(3, 11).innerHTML = "아래로 보내기" + listChildspan(3, 11).outerHTML;

    listChild(3, 12).innerHTML = "자동 마스크 AI";
    listChild(3, 13).innerHTML = "마스크 추가";
    listChild(3, 14).innerHTML = "마스크 적용";
    listChild(3, 15).innerHTML = "마스크 제거";
    listChild(3, 16).innerHTML = "더 많은 마스크";
      childsChild(3, 16, 0).innerHTML = "마스크 반전"
      childsChild(3, 16, 1).innerHTML = "레이어에서 마스크 추출"
      childsChild(3, 16, 2).innerHTML = "마스크를 선택 영역으로 전환"
    
  // 선택
  $$(".menu>li>a")[4].innerHTML = "선택";
    listChild(4, 0).innerHTML = "모두 선택" + listChildspan(4, 0).outerHTML;
    listChild(4, 1).innerHTML = "픽셀 선택";
    listChild(4, 2).innerHTML = "선택 취소" + listChildspan(4, 2).outerHTML;
    listChild(4, 3).innerHTML = "선택 영역 반전" + listChildspan(4, 3).outerHTML;
    listChild(4, 4).innerHTML = "마스크로 전환";

    listChild(4, 5).innerHTML = "선택 영역 저장";
    listChild(4, 6).innerHTML = "선택 영역 되살리기";
    
  // 조정
  $$(".menu>li>a")[5].innerHTML = "조정"
    listChild(5, 0).innerHTML = "자동 조정.."

    listChild(5, 1).innerHTML = "밝기 & 대비.."
    listChild(5, 2).innerHTML = "온도 & 틴트.."
    listChild(5, 3).innerHTML = "색조 & 채도.."
    listChild(5, 4).innerHTML = "생동감.."
    listChild(5, 5).innerHTML = "색상 균형.."
    listChild(5, 6).innerHTML = "색상 검색.."

    listChild(5, 7).innerHTML = "밝은 영역 / 어두운 영역.."
    listChild(5, 8).innerHTML = "노출.."

    listChild(5, 9).innerHTML = "곡선.."
    listChild(5, 10).innerHTML = "수준.."

    listChild(5, 11).innerHTML = "흑백.."
    listChild(5, 12).innerHTML = "포스터화.."
    listChild(5, 13).innerHTML = "회색조"
    listChild(5, 14).innerHTML = "반전"
    
  // 필터
  $$(".menu>li>a")[6].innerHTML = "필터"
    listChild(6, 0).innerHTML = "효과 라이브러리.."

    listChild(6, 1).innerHTML = "디테일"
      childsChild(6, 1, 0).innerHTML = "선명하게.."
      childsChild(6, 1, 1).innerHTML = "미드톤 대비.."
      childsChild(6, 1, 2).innerHTML = "블러.."
      childsChild(6, 1, 3).innerHTML = "가우시안 블러.."
      childsChild(6, 1, 4).innerHTML = "줌 블러.."
      childsChild(6, 1, 5).innerHTML = "부드럽게.."
      childsChild(6, 1, 6).innerHTML = "그레인.."
      childsChild(6, 1, 7).innerHTML = "노이즈 추가.."
      childsChild(6, 1, 8).innerHTML = "노이즈 제거.."

    listChild(6, 2).innerHTML = "비네트.."
    listChild(6, 3).innerHTML = "블룸.."
    listChild(6, 4).innerHTML = "글래머.."
    listChild(6, 5).innerHTML = "디헤이즈.."

    listChild(6, 6).innerHTML = "내부 광선.."
    listChild(6, 7).innerHTML = "외부 광선.."
    listChild(6, 8).innerHTML = "외곽선.."
    listChild(6, 9).innerHTML = "그림자.."

    listChild(6, 10).innerHTML = "프린지.."
    listChild(6, 11).innerHTML = "픽셀화.."
    listChild(6, 12).innerHTML = "모자이크.."
    listChild(6, 13).innerHTML = "하프톤.."
    
  // 보기
  $$(".menu>li>a")[7].innerHTML = "보기"
    listChild(7, 0).innerHTML = "확대" + listChildspan(7, 0).outerHTML;
    listChild(7, 1).innerHTML = "축소" + listChildspan(7, 1).outerHTML;

    listChild(7, 2).innerHTML = "화면에 맞춤" + listChildspan(7, 2).outerHTML;
    listChild(7, 3).innerHTML = "화면에 채우기" + listChildspan(7, 3).outerHTML;

    listChild(7, 4).innerHTML = "100%" + listChildspan(7, 4).outerHTML;
    listChild(7, 5).innerHTML = "200%";
    listChild(7, 6).innerHTML = "300%" + listChildspan(7, 6).outerHTML;

    listChild(7, 7).innerHTML = "전체 화면" + listChildspan(7, 7).outerHTML;
    listChild(7, 8).innerHTML = "밝은 / 어두운 모드 켜기";
    
  // 도움말
  $$(".menu>li>a")[8].innerHTML = "도움말";
    listChild(8, 0).innerHTML = "키보드 단축키..";

    listChild(8, 1).innerHTML = "도움 구하기";
    listChild(8, 2).innerHTML = "우리 유튜브 / 튜토리얼..";
    listChild(8, 3).innerHTML = "우리 인스타그램..";
    listChild(8, 4).innerHTML = "우리 페이스북..";

    listChild(8, 5).innerHTML = "컬러 조합"
    listChild(8, 6).innerHTML = "폰트 조합"

  // arrange

  console.log("%c# 깃허브 링크 : https://github.com/didam00/pixlreinkorea/","font-family: 굴림; font-weight: 900;")

  var isShift = false;  
  var isCtrl = false;  
  var isAlt = false;  
  document.onkeyup = function(e){  
    if(e.which == 16) isShift=false;  
    if(e.which == 17) isCtrl=false;  
    if(e.which == 18) isAlt=false;  
  }  
  document.onkeydown = function(e){  
    if(e.which == 16) isShift=true;  
    if(e.which == 17) isCtrl=true;  
    if(e.which == 18) isAlt=true;  
    if(e.which == 68 && isCtrl == true && isShift == true) {  
      console.log("copy")
      $(".layer.selected .more").click(); $("#layer-settings-duplicate").click();
      return false;  
    }
  }  
}