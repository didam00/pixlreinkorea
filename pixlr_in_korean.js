// pixlr magic
function $(a) {return document.querySelector(a);}
function $$(a) {return document.querySelectorAll(a);}

function pEiKTs() {
  // 파일
  $$(".menu a")[0].innerText = "파일"
    $$(".menu a")[1].innerHTML = "새 이미지.." + $$(".menu a span")[0].outerHTML;
    $$(".menu a")[2].innerHTML = "이미지 불러오기.." + $$(".menu a span")[1].outerHTML;
    $$(".menu a")[3].innerHTML = "이미지 링크 불러오기.."
    $$(".menu a")[4].innerHTML = "STOCK에서 불러오기.." + $$(".menu a span")[2].outerHTML;
    $$(".menu a")[5].innerHTML = "요소 추가하기.." + $$(".menu a span")[3].outerHTML;

    $$(".menu a")[6].innerHTML = "저장하기.." + $$(".menu a span")[4].outerHTML;
    $$(".menu a")[7].innerHTML = "인쇄하기.." + $$(".menu a span")[5].outerHTML;
    $$(".menu a")[8].innerHTML = "프로젝트 닫기" + $$(".menu a span")[6].outerHTML;
    
  // 편집
  $$(".menu a")[9].innerText = "편집"
    $$(".menu a")[10].innerHTML = "실행 취소" + $$(".menu a span")[7].outerHTML;
    $$(".menu a")[11].innerHTML = "재실행" + $$(".menu a span")[8].outerHTML;

    $$(".menu a")[12].innerHTML = "자르기" + $$(".menu a span")[9].outerHTML;
    $$(".menu a")[13].innerHTML = "복사하기" + $$(".menu a span")[10].outerHTML;
    $$(".menu a")[14].innerHTML = "지우기" + $$(".menu a span")[11].outerHTML;
    $$(".menu a")[15].innerHTML = "붙여넣기" + $$(".menu a span")[12].outerHTML;

    $$(".menu a")[16].innerHTML = "자유 변형" + $$(".menu a span")[13].outerHTML;
    $$(".menu a")[17].innerHTML = "자유 왜곡" + $$(".menu a span")[14].outerHTML;
    $$(".menu a")[18].innerHTML = "변형"
      $$(".menu a")[19].innerHTML = $$(".menu a img")[0].outerHTML + "왼쪽으로 회전 / 시계 반대 방향"
      $$(".menu a")[20].innerHTML = $$(".menu a img")[1].outerHTML + "오른쪽으로 회전 / 시계 방향"
      $$(".menu a")[21].innerHTML = $$(".menu a img")[2].outerHTML + "좌우반전"
      $$(".menu a")[22].innerHTML = $$(".menu a img")[3].outerHTML + "상하반전"
      
    $$(".menu a")[23].innerHTML = "테두리.."
    $$(".menu a")[24].innerHTML = "채우기.."
    
  // 이미지
  $$(".menu a")[25].innerText = "이미지";
    $$(".menu a")[26].innerHTML = "이미지 크기..";
    $$(".menu a")[27].innerHTML = "캔버스 크기..";
    $$(".menu a")[28].innerHTML = "이미지 회전";
      $$(".menu a")[29].innerHTML = $$(".menu a img")[4].outerHTML + "왼쪽으로 회전 / 시계 반대 방향";
      $$(".menu a")[30].innerHTML = $$(".menu a img")[5].outerHTML + "오른쪽으로 회전 / 시계 방향";
      $$(".menu a")[31].innerHTML = $$(".menu a img")[6].outerHTML + "좌우반전";
      $$(".menu a")[32].innerHTML = $$(".menu a img")[7].outerHTML + "상하반전";

    $$(".menu a")[33].innerHTML = "자르기";
    $$(".menu a")[34].innerHTML = "다듬기";
    
  // 레이어
  $$(".menu a")[35].innerHTML = "레이어";
    $$(".menu a")[36].innerHTML = "새 레이어";
    $$(".menu a")[37].innerHTML = "레이어 복사";
    $$(".menu a")[38].innerHTML = "이미지 레이어 생성..";
    $$(".menu a")[39].innerHTML = "요소 레이어 생성..";
    $$(".menu a")[40].innerHTML = "이미지 링크 레이어 생성..";
    $$(".menu a")[41].innerHTML = "레이어 삭제" + $$(".menu a span")[15].outerHTML;

    $$(".menu a")[42].innerHTML = "텍스트 / 요소 래스터화";

    $$(".menu a")[43].innerHTML = "아래와 병합" + $$(".menu a span")[16].outerHTML;
    $$(".menu a")[44].innerHTML = "보이는 요소와 병합" + $$(".menu a span")[17].outerHTML;
    $$(".menu a")[45].innerHTML = "모든 레이어 병합" + $$(".menu a span")[18].outerHTML;

    $$(".menu a")[46].innerHTML = "위로 가져오기" + $$(".menu a span")[19].outerHTML;
    $$(".menu a")[47].innerHTML = "아래로 보내기" + $$(".menu a span")[20].outerHTML;
    $$(".menu a")[48].innerHTML = "자동 마스크 AI";
    
  // 선택
  $$(".menu a")[49].innerHTML = "선택";
    $$(".menu a")[50].innerHTML = "모두 선택" + $$(".menu a span")[21].outerHTML;
    $$(".menu a")[51].innerHTML = "픽셀 선택"
    $$(".menu a")[52].innerHTML = "선택 취소" + $$(".menu a span")[22].outerHTML;
    $$(".menu a")[53].innerHTML = "선택 영역 반전" + $$(".menu a span")[23].outerHTML;
    
  // 조정
  $$(".menu a")[54].innerHTML = "조정"
    $$(".menu a")[55].innerHTML = "자동 조정.."

    $$(".menu a")[56].innerHTML = "밝기 & 대비.."
    $$(".menu a")[57].innerHTML = "온도 & 틴트.."
    $$(".menu a")[58].innerHTML = "색조 & 채도.."
    $$(".menu a")[59].innerHTML = "생동감.."
    $$(".menu a")[60].innerHTML = "색상 균형.."
    $$(".menu a")[61].innerHTML = "색상 검색.."

    $$(".menu a")[62].innerHTML = "밝은 영역 / 어두운 영역.."
    $$(".menu a")[63].innerHTML = "노출.."

    $$(".menu a")[64].innerHTML = "곡선.."
    $$(".menu a")[65].innerHTML = "수준.."

    $$(".menu a")[66].innerHTML = "흑백.."
    $$(".menu a")[67].innerHTML = "포스터화.."
    $$(".menu a")[68].innerHTML = "회색조"
    $$(".menu a")[69].innerHTML = "반전"
    
  // 필터
  $$(".menu a")[70].innerHTML = "필터"
    $$(".menu a")[71].innerHTML = "효과 라이브러리.."

    $$(".menu a")[72].innerHTML = "선명하게.."
    $$(".menu a")[73].innerHTML = "부분 대비.."
    $$(".menu a")[74].innerHTML = "흐리게.."
    $$(".menu a")[75].innerHTML = "가우시안.."
    $$(".menu a")[76].innerHTML = "부드럽게.."
    $$(".menu a")[77].innerHTML = "그레인.."
    $$(".menu a")[78].innerHTML = "노이즈 추가.."
    $$(".menu a")[79].innerHTML = "노이즈 제거.."

    $$(".menu a")[80].innerHTML = "비네트.."
    $$(".menu a")[81].innerHTML = "블룸.."
    $$(".menu a")[82].innerHTML = "글래머.."
    $$(".menu a")[83].innerHTML = "디헤이즈.."

    $$(".menu a")[84].innerHTML = "내부 광선.."
    $$(".menu a")[85].innerHTML = "외부 광선.."
    $$(".menu a")[86].innerHTML = "외곽선.."
    $$(".menu a")[87].innerHTML = "그림자.."

    $$(".menu a")[88].innerHTML = "프린지.."
    $$(".menu a")[89].innerHTML = "픽셀화.."
    $$(".menu a")[90].innerHTML = "모자이크.."
    $$(".menu a")[91].innerHTML = "하프톤.."
    
  // 보기
  $$(".menu a")[92].innerHTML = "보기"
    $$(".menu a")[93].innerHTML = "확대" + $$(".menu a span")[24].outerHTML;
    $$(".menu a")[94].innerHTML = "축소" + $$(".menu a span")[25].outerHTML;

    $$(".menu a")[95].innerHTML = "화면에 맞춤" + $$(".menu a span")[26].outerHTML;
    $$(".menu a")[96].innerHTML = "화면에 채우기" + $$(".menu a span")[27].outerHTML;

    $$(".menu a")[97].innerHTML = "100%" + $$(".menu a span")[28].outerHTML;
    $$(".menu a")[98].innerHTML = "200%";
    $$(".menu a")[99].innerHTML = "300%" + $$(".menu a span")[29].outerHTML;

    $$(".menu a")[100].innerHTML = "전체 화면" + $$(".menu a span")[30].outerHTML;
    $$(".menu a")[101].innerHTML = "밝은 / 어두운 모드 켜기";
    
  // 도움말
  $$(".menu a")[102].innerHTML = "도움말";
    $$(".menu a")[103].innerHTML = "키보드 단축키..";
    $$(".menu a")[104].innerHTML = "Reddit 커뮤니티에 질문하기..";
    $$(".menu a")[105].innerHTML = "우리 유튜브 / 튜토리얼..";
    $$(".menu a")[106].innerHTML = "우리 인스타그램..";
    $$(".menu a")[107].innerHTML = "우리 페이스북..";
    $$(".menu a")[108].innerHTML = "피드백.." + $$(".menu a span")[31].outerHTML;
      $$(".menu a span")[31].innerText = "땡큐!"

  console.log("%c# 깃허브 링크 : https://github.com/didam00/pixlreinkorea/","font-family: 굴림; font-weight: 900;")
}