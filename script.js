let length = document.querySelectorAll(".word").length;
for (let i = 0; i < length; i++){
    document.querySelectorAll(".word")[i].addEventListener("click" , function(){
        let every = this.innerHTML;
        console.log(every);
        click(every);
        keyClick(every);
    })
}


    document.addEventListener("keypress" , function(event){
        let key = event.key;
        click(key);
        keyClick(key);
    })



let input = document.querySelector(".input").innerText

function click(forClick){
    switch(forClick){
      case "q":
      case "Q":
        let q = new Audio("voice/sound.mp3")
        q.play()
          
          break;
        case "w":
        case "W":
           let w = new Audio("voice/sound.mp3")
           w.play()
          
           break; 
        case "e":
        case "E":
          let e = new Audio("voice/sound.mp3")
          e.play()
          
          break;   
        case "r":
        case "R":
          let r = new Audio("voice/sound.mp3")
          r.play()
          
          break; 
        case "t":
        case "T":
          let t = new Audio("voice/sound.mp3")
          t.play()
          
          break; 
        case "y":
        case "Y":
          let y = new Audio("voice/sound.mp3")
          y.play()
          
          break; 
        case "u":
        case "U":
          let u = new Audio("voice/sound.mp3")
          u.play()
          
          break; 
        case "i":
        case "I":
          let i = new Audio("voice/sound.mp3")
          i.play()
          
          break; 
        case "o":
        case "O":
          let o = new Audio("voice/sound.mp3")
          o.play()
          
          break; 
        case "p":
        case "P":
          let p = new Audio("voice/sound.mp3")
          p.play()
          
          break;    


          case " ":
          let pr = new Audio("voice/sound.mp3")
          pr.play()
          r
          break;
          ///////


        case "a":
        case "A":
          let a = new Audio("voice/sound.mp3")
          a.play()
          break;
        case "s":
        case "S":    
          let s = new Audio("voice/sound.mp3")
          s.play()
          break; 
        case "d":
        case "D":
          let d = new Audio("voice/sound.mp3")
          d.play()
          break;   
        case "f":
        case "F":
          let f = new Audio("voice/sound.mp3")
          f.play()
          break; 
        case "g":
        case "G":
          let g = new Audio("voice/sound.mp3")
          g.play()
          break; 
        case "h":
        case "H":
          let h = new Audio("voice/sound.mp3")
          h.play()
          break; 
        case "j":
        case "J":
          let j = new Audio("voice/sound.mp3")
          j.play()
          break; 
        case "k":
        case "K":
          let k = new Audio("voice/sound.mp3")
          k.play()
          break;  
        case "l":
        case "L":
          let l = new Audio("voice/sound.mp3")
          l.play()
          break; 
        case "z":
        case "Z":
          let z = new Audio("voice/sound.mp3")
          z.play()
          break; 
        case "x":
        case "X":
          let x = new Audio("voice/sound.mp3")
          x.play()
          break;
        case "c":
        case "C":
          let c = new Audio("voice/sound.mp3")
          c.play()
          break; 
        case "v":
        case "V":
          let v = new Audio("voice/sound.mp3")
          v.play()
          break; 
        case "b":
        case "B":
          let b = new Audio("voice/sound.mp3")
          b.play()
          break; 
        case "n":
        case "N":
          let n = new Audio("voice/sound.mp3")
          n.play()
          // 
          break; 
        case "m":
        case "M":
          let m = new Audio("voice/sound.mp3")
          m.play()
          break; 
        case "shift":
          let shift = new Audio("voice/sound.mp3")
          shift.play()
          break;  
        case "ctrl":
          let ctrl = new Audio("voice/sound.mp3")
          ctrl.play();
          break;  
        case "fn":
          let fn = new Audio("voice/sound.mp3")
          fn.play();
          break;
        case "Alt":
          let alt = new Audio("voice/sound.mp3")
          alt.play();
          break;  
        case "2":
          let ikki = new Audio('voise/sound.mp3')  
    } 
}


function keyClick(forKeypress){
    let clickKey = document.querySelector("." + forKeypress);
    clickKey.classList.add("design");
    setTimeout(function(){
        clickKey.classList.remove("design")
    }, 400)
}


function keyPressed (event){
  if(event.ctrlKey){
    click("ctrl")
    ctrl.classList.add("design")
  }else{
    console.log("bosilmadi");
  }
}
function keyPressedShift (event){
  if(event.shiftKey){
    click("shift")
  }else{
    console.log("bosilmadi");
  }
}
function keyPressedAlt (event){
  if(event.altKey){
    click("Alt")
  }else{
    console.log("bosilmadi");
  }
}
function keyPressedFn (event){
  if(event.fnKey){
    click("fn")
  }else{
    console.log("bosilmadi");
  }
}