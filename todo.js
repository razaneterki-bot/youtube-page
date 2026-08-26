let Array =  JSON.parse(localStorage.getItem('todoSave')) ;
      


      document.querySelector('.add').addEventListener('click' , () => {
        addTodo();
      });
       

      

       TodoList();

        function TodoList(){
        let TodoListNames = '';
        for(let i = 0; i < Array.length; i++){
        const html = `
          <div class="p">${Array[i].name}</div>
          <div class="p"> ${Array[i].date}</div>
          <button class= "delete1">
          Delete
          </button>
            
          `;

        TodoListNames += html;
        }
    document.querySelector('.div').innerHTML = TodoListNames;
    localStorage.setItem('todoSave' , JSON.stringify(Array));
     

    document.querySelectorAll('.delete1')
    .forEach((DleleteButton , index) => {
     DleleteButton.addEventListener('click' , () => {
      Array.splice(index , 1);
      TodoList();
     })

    })

      }
     

     



      
      function enter(p){
        if(p.key === 'Enter'){
         addTodo();
        }
      }
      function addTodo(){
         const TodoInput = document.querySelector('.input1');
         const name = TodoInput.value;
          const TodoInput2 = document.querySelector('.input2');
         const date = TodoInput2.value;
          Array.push({name,
            date});
          TodoInput.value='';
          TodoList();
      }
      
  