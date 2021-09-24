let n = 0;
let c =0;
let string = "";

function counter(){

    var b1 = document.getElementById("ik1").innerHTML;
    var b2 = document.getElementById("ik2").innerHTML;
    var b3 = document.getElementById("ik3").innerHTML;
    var b4 = document.getElementById("ik4").innerHTML;
    var b5 = document.getElementById("ik5").innerHTML;
    var b6 = document.getElementById("ik6").innerHTML;
    var b7 = document.getElementById("ik7").innerHTML;
    var b8 = document.getElementById("ik8").innerHTML;
    var b9 = document.getElementById("ik9").innerHTML;
    console.log(c);
    if(b1=="X" && b2=="X" && b3=="X"||
         b4=="X" && b5=="X" && b6=="X"|| 
        b7=="X" && b8=="X" && b9=="X"||
        b1=="X" && b5=="X" && b9=="X"||
        b3=="X" && b5=="X" && b7=="X"||
        b2=="X" && b5=="X" && b8=="X"||
        b4=="X" && b5=="X" && b6=="X"||
        b1=="X" && b4=="X" && b7=="X"||
        b2=="X" && b5=="X" && b8=="X"||
        b3=="X" && b6=="X" && b9=="X"){
            string = "The Winner Is X";
            document.getElementById("result").innerHTML = string;
            document.getElementById("ik1").disabled = true;
            document.getElementById("ik2").disabled = true;
            document.getElementById("ik3").disabled = true;
            document.getElementById("ik4").disabled = true;
            document.getElementById("ik5").disabled = true;
            document.getElementById("ik6").disabled = true;
            document.getElementById("ik7").disabled = true;
            document.getElementById("ik8").disabled = true;
            document.getElementById("ik9").disabled = true;
        }

    else if(b1=="O" && b2=="O" && b3=="O"||
            b4=="O" && b5=="O" && b6=="O"|| 
            b7=="O" && b8=="O" && b9=="O"||
            b1=="O" && b5=="O" && b9=="O"||
            b3=="O" && b5=="O" && b7=="O"||
            b2=="O" && b5=="O" && b8=="O"||
            b4=="O" && b5=="O" && b6=="O"||
            b1=="O" && b4=="O" && b7=="O"||
            b2=="O" && b5=="O" && b8=="O"||
            b3=="O" && b6=="O" && b9=="O"){
            string = "The Winner Is O";
            document.getElementById("result").innerHTML = string;
            document.getElementById("ik1").disabled = true;
            document.getElementById("ik2").disabled = true;
            document.getElementById("ik3").disabled = true;
            document.getElementById("ik4").disabled = true;
            document.getElementById("ik5").disabled = true;
            document.getElementById("ik6").disabled = true;
            document.getElementById("ik7").disabled = true;
            document.getElementById("ik8").disabled = true;
            document.getElementById("ik9").disabled = true;
        }
        else if(c==9 && string ==""){
            string = "Its a draw!!";
            document.getElementById("result").innerHTML = string;
        }
    }

function count1(){
    var x = document.getElementById("ik1").value;
    document.getElementById("ik1").disabled = true;
    if(n==0){
        document.getElementById("ik1").innerHTML = "X";
        n=1;
        c+=1;
    }
    else if(n!=0){
        document.getElementById("ik1").innerHTML = "O";
        n=0;
        c+=1;
    }
}

function count2(){
    var x = document.getElementById("ik2").value;
    document.getElementById("ik2").disabled = true;
    if(n==0){
        document.getElementById("ik2").innerHTML = "X";
        n=1;
        c+=1;
    }
    else if(n!=0){
        document.getElementById("ik2").innerHTML = "O";
        n=0;
        c+=1;
    }
}

function count3(){
    var x = document.getElementById("ik3").value;
    document.getElementById("ik3").disabled = true;
    if(n==0){
        document.getElementById("ik3").innerHTML = "X";
        n=1;
        c+=1;
    }
    else if(n!=0){
        document.getElementById("ik3").innerHTML = "O";
        n=0;
        c+=1;
    }
}

function count4(){
    var x = document.getElementById("ik4").value;
    document.getElementById("ik4").disabled = true;
    if(n==0){
        document.getElementById("ik4").innerHTML = "X";
        n=1;
        c+=1;
    }
    else if(n!=0){
        document.getElementById("ik4").innerHTML = "O";
        n=0;
        c+=1;
    }
}

function count5(){
    var x = document.getElementById("ik5").value;
    document.getElementById("ik5").disabled = true;
    if(n==0){
        document.getElementById("ik5").innerHTML = "X";
        n=1;
        c+=1;
    }
    else if(n!=0){
        document.getElementById("ik5").innerHTML = "O";
        n=0;
        c+=1;
    }
}

function count6(){
    var x = document.getElementById("ik6").value;
    document.getElementById("ik6").disabled = true;
    if(n==0){
        document.getElementById("ik6").innerHTML = "X";
        n=1;
        c+=1;
    }
    else if(n!=0){
        document.getElementById("ik6").innerHTML = "O";
        n=0;
        c+=1;
    }
}

function count7(){
    var x = document.getElementById("ik7").value;
    document.getElementById("ik7").disabled = true;
    if(n==0){
        document.getElementById("ik7").innerHTML = "X";
        n=1;
        c+=1;
    }
    else if(n!=0){
        document.getElementById("ik7").innerHTML = "O";
        n=0;
        c+=1;
    }
}

function count8(){
    var x = document.getElementById("ik8").value;
    document.getElementById("ik8").disabled = true;
    if(n==0){
        document.getElementById("ik8").innerHTML = "X";
        n=1;
        c+=1;
    }
    else if(n!=0){
        document.getElementById("ik8").innerHTML = "O";
        n=0;
        c+=1;
    }
}

function count9(){
    var x = document.getElementById("ik9").value;
    document.getElementById("ik9").disabled = true;
    if(n==0){
        document.getElementById("ik9").innerHTML = "X";
        n=1;
        c+=1;
    }
    else if(n!=0){
        document.getElementById("ik9").innerHTML = "O";
        n=0;
        c+=1;
    }
}


function reset(){
    document.getElementById("ik1").disabled = false;
    document.getElementById("ik2").disabled = false;
    document.getElementById("ik3").disabled = false;
    document.getElementById("ik4").disabled = false;
    document.getElementById("ik5").disabled = false;
    document.getElementById("ik6").disabled = false;
    document.getElementById("ik7").disabled = false;
    document.getElementById("ik8").disabled = false;
    document.getElementById("ik9").disabled = false;

    document.getElementById("ik1").innerHTML = "-";
    document.getElementById("ik2").innerHTML = "-";
    document.getElementById("ik3").innerHTML = "-";
    document.getElementById("ik4").innerHTML = "-";
    document.getElementById("ik5").innerHTML = "-";
    document.getElementById("ik6").innerHTML = "-";
    document.getElementById("ik7").innerHTML = "-";
    document.getElementById("ik8").innerHTML = "-";
    document.getElementById("ik9").innerHTML = "-";

    document.getElementById("result").innerHTML = "&nbsp;";
    n=0;
    c=0;
    string = "";
}