// 페이지가 로드된 후 실행되는 함수
window.onload = function () {
    
    // 시작 버튼을 id를 이용하여 찾아 변수에 할당
    const startBtn = document.querySelector("#startBtn");
    // 시작 버튼 클릭 시 실행되는 함수
    startBtn.addEventListener("click", function () {
        // 입력값을 변수에 넣기 위해 입력값을 받는 input태그를 id를 이용하여 찾아 변수에 할당
        const numberInput = document.querySelector("#numberInput");

        // 사용자 입력값 또는 기본 값으로 테이블 크기를 결정
        let size;
        if (numberInput.value == "") {
            size = numberInput.placeholder;
        }
        else {
            size = numberInput.value;
        }
        // 테이블 크기를 로그에 출력
        console.log(size); 
        
        // 테이블을 표시할 태그를 찾아 변수에 할당
        const tableArea = document.querySelector(".tableArea");

        // 지정된 크기로 테이블의 HTML을 생성
        const cellHTML = '<table class="w-auto">\n'
            + ('\t<tr>' + '<td></td>'.repeat(size) + '</tr>').repeat(size)
            + '</table>';
        // 테이블을 HTML에 출력
        tableArea.innerHTML = cellHTML; 
        // td 태그를 모두 선택하여 변수에 할당(자동으로 배열 변수 되는 듯)
        const tds = document.querySelectorAll("td");

        // 랜덤 번호를 변수에 할당
        let curLoc = Math.floor(Math.random() * size * size);
        // 랜덤 번호 위치의 셀 색 변경
        tds[curLoc].style.backgroundColor = "violet";
        // 초기 위치를 콘솔에 출력
        console.log(curLoc); 

        // 키를 눌렀을 때 실행되는 함수
        window.onkeydown = function (event) {
            // 누른 키가 화살표 키가 아닌 경우 함수 종료
            if (event.keyCode < 37 || event.keyCode > 40) return;
            
            // 이 이후는 화살표 키를 누를 경우 실행됨

            //이동 전 처리
            tds[curLoc].style.backgroundColor = "white";    // 현재 셀의 배경색을 흰색으로
            let row = Math.floor(curLoc / size);            // 현재 셀의 행을 계산
            let col = curLoc % size;                        // 현재 셀의 열을 계산

            // 화살표 키에 따라 셀 위치를 이동(이동 할 공간이 없는 경우 반대편으로 이동)
            switch (event.key) {
                case 'ArrowLeft':
                    curLoc += (col > 0 ? -1 : size-1);
                    break;
                case 'ArrowRight':
                    curLoc += (col < size-1) ? 1 : -(size-1);
                    break;
                case 'ArrowUp':
                    curLoc += (row > 0 ? -size : (size-1) * size);
                    break;
                case 'ArrowDown':
                    curLoc += Number((row < size-1) ? size : -(size-1)*size);
                    break;
            }
            
            // 이동 한 위치 콘솔에 표시 및 색 변경
            console.log(curLoc); 
            tds[curLoc].style.backgroundColor = "violet"; 
        }
    });
}
