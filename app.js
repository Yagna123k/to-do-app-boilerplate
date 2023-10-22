var inputTask = document.getElementById('input')
var add = document.getElementById('button')

var tasksItems = document.getElementById('todolist')

var tasks = []


function addItem(){
    if(inputTask.value!=''){
        tasks.push(inputTask.value)
    }
    else{
        alert('The Task is Empty')
    }
    inputTask.value = ''
    display()
}

inputTask.addEventListener('keypress',(event)=>{
    if(event.key == 'Enter'){
        addItem()
    }
})

add.addEventListener('click', addItem)


function dlt(i){
    tasks.splice(i,1)
    display()
}

function edit(i){
    value = prompt('Your Edit: ')
    tasks.splice(i,1,value)
    display()
}

function display(){
    tasksItems.innerHTML = ''
    tasks.map((curr,i)=>{
        var listItem = `<li id="item">
        <div>${curr}</div>
        <div>
          <span onclick="dlt(${i})">&times;</span>
          <span>|</span>
          <span onclick="edit(${i})">Edit</span>
        </div>
      </li>`

      tasksItems.innerHTML += listItem
    })
}

reset = document.getElementById('reset')

reset.addEventListener('click',()=>{
    tasks = []
    display()
})