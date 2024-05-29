let tds; // 테이블의 모든 셀의 노드 collection
let curLoc; // 텍스트가 출력되는 셀 번호 ( 0 ~ size*size - 1)
let size; // 테이블의 가로, 세로 셀 수

//페이지가 전부 로딩 되었을 때 실행되는함수
window.onload = function startMouseClick() {
    // id가 'startBtn'인 태그를 'startBtn'변수에 할당
    const startBtn = document.querySelector("#startBtn")
    //'startBtn을 클릭하면 실행되는 함수
    startBtn.onclick = function () {

        // 입력된 테이블 크기 가져오고 콘솔 출력 입력된 값이 없으면 placeholder(기본 설정 값) 값 사용
        const numberInput = document.querySelector("#numberInput");
        if (numberInput.value == "") {
            size = numberInput.placeholder;
        }
        else {
            size = numberInput.value;
        }
        console.log(size);
    
        // 'tableArea'변수에 class가 'tableArea'인 태그를 할당
        const tableArea = document.querySelector(".tableArea")
    
        // size * size 테이블을 생성하여 tableHTML변수에 할당(이중for문 사용해도 될 듯)
        let tableHTML = '<table class="w-auto">\n'+('\t<tr>' + '<td></td>'.repeat(size) + '</tr>\n').repeat(size) + '</table>\n';
    
        //tableHTML 변수에 있는 테이블을 innerHTML을 이용하여 tableArea('tableArea'클래스를 가진 div)에 삽입
        tableArea.innerHTML = tableHTML;
    
        // random cell에 text를 출력하기 위한 변수 초기화
        tds = document.querySelectorAll("td");
        curLoc = 0;
    
        // random cell 텍스트 출력하고 click event handler 등록
        randomLocText();
    }
}
// ?? 엔터 키 누를 시 에러 발생함
window.onkeydown = function(event) {
    if (event.key == "Enter") {
        startMouseClick();
        curLoc = 0;
    }
}

// 랜덤한 위치에 텍스트 출력, 텍스트가 표시된 셀 클릭 시 기존 위치 초기화와 새로운 랜덤 위치에 텍스트 출력 함수
function randomLocText() {
    // 초기화
    tds[curLoc].innerHTML = "";
    tds[curLoc].onclick = null;

    // 새로운 셀을 랜덤으로 지정
    curLoc = Math.floor(Math.random() * (size*size));
    // 셀의 번호 콘솔에 출력
    console.log(curLoc)

    // 텍스트 삽입
    tds[curLoc].innerHTML = "안녕^^";
    // 텍스트가 삽입 된 셀 클릭 시 함수 호출
    tds[curLoc].onclick = randomLocText;
}