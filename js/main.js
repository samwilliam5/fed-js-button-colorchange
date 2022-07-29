var toggleBtns=document.querySelectorAll('.toggle-button');
var toggleTxts=document.querySelectorAll('.toggle-text');

var colors=['red','blue','yellow','orange','green','black'];
var i=0;

// getElementsByid('toggle-button');//store html elemts
// getElementsByClassName('toggle-button');//store array html elemts

var handleToggle=function(){//fuction get 2 arguments

    var box=this.parentNode;//get parenteloement by this method
    var p=box.querySelector('p');//array return

    p.style.color=colors[i];
    console.log(p);

    toggleTxts.style=colors[i];
    i++;
    if(i>=colors.length-1){//length-1 tells  no of elemnts in colors
        i=0;

    }
    
};

toggleBtns.forEach(function(toggleBtn,index){//function get 2 arguments
// console.log(toggleBtn,index);
toggleBtn.addEventListener("click",handleToggle)//send handle tooglr method
})


//toggleBtns.addEventListener('click',handleToggle);


//addEventListener is a inbuilt method of html elements not for array
//used to control toggle 
//attached an event handler to element without overwriting
//the existing event element

