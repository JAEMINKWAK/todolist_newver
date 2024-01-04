let addInput = document.getElementById('todolist_add_input');
let addBtn = document.querySelector('.todolist_add_btn');
let todolist = document.querySelector('.todolist');

// TODOLIST add content
addBtn.addEventListener('click', function () {
  const listText = addInput.value.trim();
  if (listText !== '') {
    addList(listText);
    addInput.value = '';
  }
});

function addList(listText) {
  const listItem = document.createElement('div');
  listItem.classList.add('todolist_list');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';

  const listParagraph = document.createElement('p');
  listParagraph.textContent = listText;

  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('todolist_list_dtn');

  const editBtn = document.createElement('button');
  editBtn.classList.add('todolist_list_btn_edit');
  editBtn.textContent = '수정';
  editBtn.addEventListener('click', function () {
    editTask(listParagraph);
  });

  const delBtn = document.createElement('button');
  delBtn.classList.add('todolist_list_btn_del');
  delBtn.textContent = '삭제';
  delBtn.addEventListener('click', function () {
    deleteTask(listItem);
  });

  buttonDiv.appendChild(editBtn);
  buttonDiv.appendChild(delBtn);

  listItem.appendChild(checkBox);
  listItem.appendChild(listParagraph);
  listItem.appendChild(buttonDiv);

  todolist.appendChild(listItem);

  // Content edit function
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

  // Content delete function
  delBtn.addEventListener('click', function () {
    if (confirm('이 항목을 삭제하시겠습니까?')) {
      todolist.removeChild(listItem);
    }
  });
}
