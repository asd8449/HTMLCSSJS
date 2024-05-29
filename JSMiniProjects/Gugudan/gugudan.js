// 페이지가 전부 로딩되었을 때 함수 실행
window.onload = function () { 
    // querySelector로 버튼을 'btnNode'변수에 할당
    const btnNode = document.querySelector("button");
    // btnNode를 클릭 했을 때 실행되는 함수
    btnNode.addEventListener("click", function() {

        //id가 'danInput'인 태그의 값(value)를 받아와서 'danNum'에 할당(1~9까지 곱할 값)
        const danNum = document.querySelector("#danInput").value;
        console.log(danNum);
    
        //querySelector로 id가 'danNumber'인 태그에 innerHTML로 내용 삽입 
        document.querySelector("#danNumber").innerHTML = `${danNum}단`;
        
        //id가 'result'인 태그를 'resultNode' 변수에 할당
        const resultNode = document.querySelector("#result");
        //result 변수 선언 및 초기화
        let result = "";
        //입력값 * 1~9을 for문을 이용하여 순서대로 모두 result에 할당
        for (let i = 1; i <= 9; i++) {
            result += `${danNum} x ${i} = ${String(danNum * i).padStart(2,' ')}<br>`;
        }
        //위 코드에서 for문을 이용하여 넣은 구구단을 innerHTML을 이용하여 'resultNode'에 내용 삽입
        resultNode.innerHTML = result;
        //class가 'displayArea'인 태그의 disply속성을 block으로 설정
        document.querySelector(".displayArea").style.display = "block";
    });
}
