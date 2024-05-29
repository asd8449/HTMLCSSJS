// 페이지 로드가 완료된 후 실행되는 함수
window.onload = function() {
    // 각각 아이디를 통해 태그를 찾고 변수에 할당
    const todoInput = document.querySelector("#todoInput");
    const addBtn = document.querySelector("#addBtn");
    // 버튼을 눌렀을 때 입력한 값이 있다면 'addTodoList'함수 실행
    addBtn.addEventListener("click", function() {
        if (todoInput.value != "") addTodoList();
    });
}

function addTodoList() {
    // 콘솔에 사용자가 입력한 값 출력
    console.log(todoInput.value);
    // 리스트를 넣을 위치를 class명으로 찾아 변수에 할당
    const listArea = document.querySelector(".listArea");
    // 객체 생성하여 변수에 할당
    const liNode = document.createElement("li");
    const checkBtn = document.createElement("button");
    const todoText = document.createElement("span");
    const delBtn = document.createElement("button");
    // 객체를 한곳에 모으고 미리 지정해둔 위치에 삽입
    liNode.appendChild(checkBtn);
    liNode.appendChild(todoText);
    liNode.appendChild(delBtn);
    listArea.appendChild(liNode);
    // 텍스트가 들어갈 객체에 사용자 입력값 삽입
    todoText.innerText = todoInput.value;
    // 삽입 후 입력값을 받는 input의 value 초기화
    todoInput.value = "";
    // 삭제하는 버튼에 텍스트 삽입
    delBtn.innerText = "X"
    //각각 객체에 클래스 추가
    checkBtn.classList.add("checkBtn");
    todoText.classList.add("todoText");
    delBtn.classList.add("delBtn");
    // 할 일 체크 버튼을 클릭했을 때 실행되는 함수(공백이면 체크 표시, 아니라면 공백)
    checkBtn.addEventListener("click", function() {
        if (checkBtn.innerHTML == "") {
            checkBtn.innerHTML = "✔";
        }
        else {
            checkBtn.innerHTML = "";
        }
        //toggle 함수로 클래스 추가 / 삭제(없다면 추가, 있다면 삭제)
        todoText.classList.toggle("check");
    })
    // 삭제 버튼을 누를 시 해당되는 리스트 삭제
    delBtn.addEventListener("click", function() {
        liNode.remove();
    })
    // 입력 값이 제대로 들어갔는지 콘솔에 리스트의 마지막 값 출력
    console.log(listArea.lastChild);
}