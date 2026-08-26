 let score = JSON.parse(localStorage.getItem('score'))
   || {
    Wins:0,
    Ties:0,
    Losses:0
  };
   
   updatescoreElement();
  
   
  let result ='';
  let playerMove = '';
  let computerMove ='';
  
   

   document.querySelector('.js-rock-button')
   .addEventListener('click' ,  () => {
     playerMove = 'Rock';
     game(playerMove);
   });

    document.querySelector('.js-paper-button')
   .addEventListener('click' ,  () => {
     playerMove = 'Paper';
     game(playerMove);
   });


    document.querySelector('.js-scissors-button')
   .addEventListener('click' ,  () => {
     playerMove = 'Scissors';
     game(playerMove);
   });


   document.body.addEventListener('keydown' , (event) => {
    if(event.key === 'r'){
       playerMove = 'Rock';
        game(playerMove);
    }else if( event.key === 'p'){
       playerMove = 'Paper';
        game(playerMove);
    }else if(event.key === 's'){
       playerMove = 'Scissors';
        game(playerMove);  
    }
   });



   document.body.addEventListener( 'keydown' , (event) => {
      if(event.key === 'a'){
       autoPlay();
       changeNameButton();
      }
   })
     

    document.querySelector('.reset')
    .addEventListener('click' , () => {
     confirmation();
    })
     


    document.body.addEventListener( 'keydown' , (event) => {
      if(event.key === 'Backspace'){

        localStorage.removeItem('score');
        score.Wins = 0;
        score.Losses = 0;
        score.Ties = 0;
        updatescoreElement();
      }
   })



   function confirmation (){
    const html = `
     <p class="confirmation">are you sure you want to reset the score ?</p>
     <button class="yes-button" onclick="yes();">Yes</button>
     <button class="no-button" onclick="no();">No</button>
    `
    document.querySelector('.confirmation-div').innerHTML = html;

   }



   
      function yes(){
        document.querySelector('.confirmation-div').innerHTML = '';
        localStorage.removeItem('score');
        score.Wins = 0;
        score.Losses = 0;
        score.Ties = 0;
        updatescoreElement();

      }
     
      function no(){
        document.querySelector('.confirmation-div').innerHTML = '';
      }
   
   

   function PlayerPlay(){
    const computer = Math.random ();
    if( computer >= 0 && computer < (1/3) ){
      playerMove = 'Rock';
    } else if( computer >= (1/3) && computer < (2/3)){
     playerMove = 'Paper';
    } else if( computer >= (2/3) && computer < 1){
      playerMove = 'Scissors';
    }
   }
  

   function computerPlay(){
    const computer = Math.random ();
    if( computer >= 0 && computer < (1/3) ){
      computerMove = 'Rock';
    } else if( computer >= (1/3) && computer < (2/3)){
     computerMove = 'Paper';
    } else if( computer >= (2/3) && computer < 1){
      computerMove = 'Scissors';
    }
   }
     function function1(parameter1 , parameter2){
    if(parameter1 === 'Rock'){
      if(parameter2 === 'Rock'){
        result = 'Tie 😐';
      } else if(parameter2 === 'Paper'){
        result = 'You Lose 😒';
      } else if (parameter2 === 'Scissors'){
        result = 'You Win 🤩';
      }
    }else if(parameter1 === 'Paper'){
      if(parameter2 === 'Rock'){
        result = 'You Win 🤩';
      } else if(parameter2 === 'Paper'){
        result = 'Tie 😐';
      } else if (parameter2 === 'Scissors'){
        result ='You Lose 😒';
      } 
   }else if(parameter1 === 'Scissors'){
      if(parameter2 === 'Rock'){
        result = 'You Lose 😒';
      } else if(parameter2 === 'Paper'){
        result = 'You Win 🤩';
      } else if (parameter2 === 'Scissors'){
        result = 'Tie 😐';
      }
   }
     }
    

    

     
    
   function play(parameter1 , parameter2){
       

    if(result === 'You Win 🤩'){
        score.Wins += 1 ;
      }else if (result === 'You Lose 😒'){
        score.Losses += 1 ;
      }else if(result === 'Tie 😐'){
        score.Ties += 1 ;
      }



     
   

     
      localStorage.setItem('score' , JSON.stringify(score));
       
     updatescoreElement();
      
     
    if(parameter1 === 'Rock'){
      if(parameter2 === 'Rock'){
        /*
        alert(`You chose ${playerMove}.Computer chose ${computerMove}. ${result} !
        Wins:${score.Wins} , Losses:${score.Losses} , Ties:${score.Ties}`)
        */
      } else if(parameter2 === 'Paper'){
        /*
        alert(`You chose ${playerMove}.Computer chose ${computerMove}.${result} !
        Wins:${score.Wins} , Losses:${score.Losses} , Ties:${score.Ties}`)
        */
      } else if (parameter2 === 'Scissors'){
        /*
        alert(`You chose ${playerMove}.Computer chose ${computerMove}.${result} !
        Wins:${score.Wins} , Losses:${score.Losses} , Ties:${score.Ties}`)
        */
      }
    }else if(parameter1 === 'Paper'){
      if(parameter2 === 'Rock'){
        /*
        alert(`You chose ${playerMove}.Computer chose ${computerMove}.${result} !
        Wins:${score.Wins} , Losses:${score.Losses} , Ties:${score.Ties}`)
        */
      } else if(parameter2 === 'Paper'){
        /*
        alert(`You chose ${playerMove}.Computer chose ${computerMove}.${result} !
        Wins:${score.Wins} , Losses:${score.Losses} , Ties:${score.Ties}`)
        */
      } else if (parameter2 === 'Scissors'){
        /*
        alert(`You chose ${playerMove}.Computer chose ${computerMove}.${result} !
        Wins:${score.Wins} , Losses:${score.Losses} , Ties:${score.Ties}`)
        */
      } 
   }else if(parameter1 === 'Scissors'){
      if(parameter2 === 'Rock'){
        /*
        alert(`You chose ${playerMove}.Computer chose ${computerMove}.${result} !
       Wins:${score.Wins} , Losses:${score.Losses} , Ties:${score.Ties} `)
       */
      } else if(parameter2 === 'Paper'){
        /*
        alert(`You chose ${playerMove}.Computer chose ${computerMove}.${result} !
        Wins:${score.Wins} , Losses:${score.Losses} , Ties:${score.Ties}`)
        */
      } else if (parameter2 === 'Scissors'){
        /*
        alert(`You chose ${playerMove}.Computer chose ${computerMove}.${result} !
        Wins:${score.Wins} , Losses:${score.Losses} , Ties:${score.Ties}`)
        */
      }
   }
  }

   
   function updatescoreElement(){
      
      document.querySelector('.js-score').innerHTML =
     `Wins:${score.Wins} , Losses:${score.Losses} , Ties:${score.Ties}`;
    }
     


     let isAutoPlay = false;
     let intervalId = 0 ;

      function autoPlay(){
        if(!isAutoPlay){
          intervalId = setInterval(() => {
                PlayerPlay();
                game(playerMove);
              } , 1000);
            isAutoPlay = true;
        }else{
          clearInterval(intervalId);
          isAutoPlay = false ;
        }
     
      }
   
     function changeNameButton(){
      const buttonElement = document.querySelector('.auto-play');
      if(buttonElement.innerHTML === 'Auto play'){
        buttonElement.innerHTML = 'Stop play';
      }else{
        buttonElement.innerHTML = 'Auto play';
      }
     }

    function game(playerMove){
     
      computerPlay();
      function1(playerMove , computerMove);
      play(playerMove , computerMove);
     

      document.querySelector('.chose-player-computer').innerHTML =
      `
      You
      <img  class="move-photo"src="${playerMove}-emoji.png">
      <img class="move-photo" src="${computerMove}-emoji.png">
       Computer
      `
      

     document.querySelector('.result-play').innerHTML=
     `${result}`;
    
    
    }
