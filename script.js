
let arr=[];
let info={
    check:false
   
};

let info2={};

//localStorage.clear();



//console.log(main_container);
let reg=document.getElementById("reg");

let text=document.getElementById("text");
let last=document.getElementById("last");
let pass=document.getElementById("pass");
let verify=document.getElementById("verify");
let mob=document.getElementById("mob");
let adhar=document.getElementById("adhar");
let email=document.getElementById("email");
let register=document.querySelector(".register");
let main_container=document.querySelector(".main_container");
console.log(reg);
let user;
let key=65;
let str;
let bank_info=document.querySelector(".bank_info");

function call(information,str){
    //arr.push(information);
    info2=information;
    console.log("info2 store data",info2);
     user=JSON.stringify(information);
     console.log(user);
     console.log("in string ",str);
     console.log(key);
     localStorage.setItem(str,user);

    console.log(arr);
    console.log(info);
    info={};
    console.log("functionis call",info);
    console.log("text value",text.value);
    alert("successfully submitted")
    main_container.style.display="none";
    bank_info.style.display="flex";
}






reg.addEventListener("click",(event)=>{
        event.preventDefault();

        if((text.value==="")||(last.value==="")||(pass.value===0)||(verify.value==0)||(mob.value==0)||(adhar.value==0)||(email.value=="")){
            console.log("not call");
           alert("please fill all details");
            

        }

        else{
            let acc=Math.floor(Math.random()*1000000000000)+1;
            info.check=true;
            info.accHo=acc;
            info.name=text.value;
            info.lastName=last.value;
            info.passWord=pass.value;
            info.conFirm=verify.value;
            info.mobile=mob.value;
            info.Aadhar=adhar.value;
            info.Email=email.value;
           
            info.Ammount="";
            let contact=info.mobile;
            let count=0;
            console.log(contact);
           /* while(contact!=0){
                count++;
                contact=contact/10;
                console.log(contact);
            }*/

            console.log(contact.length);

            if((info.passWord==info.conFirm)&&(contact.length==10)){
                 str=info.name.trim();
                 call(info,str);
            }

            else{
                alert("Either Password is not match Or Mobile Number is not  10 digit")
            }
            
           
        }

   
})


// login  

let logi2=document.getElementById("logi2");
let logi1=document.getElementById("logi1");
let pass1=document.getElementById("pass1");
let loged=document.querySelector(".login");
let logi=document.getElementById("logi");
let text1=document.getElementById("text1");


let getdata=document.getElementById("getData");
let credit=document.getElementById("credit");
let debit=document.getElementById("debit");
let update=document.getElementById("update");
let transfer=document.getElementById("transfer");
let balance=document.getElementById("balance");

let back1=document.getElementById("back1");
let back2=document.getElementById("back2");
let back3=document.getElementById("back3");
let back4=document.getElementById("back4");

   let page_transfer=document.querySelector(".page_transfer");
    let page1=document.querySelector(".page1");

     let page3=document.querySelector(".page3");

      let page4=document.querySelector(".page4");



function BacktoMain(){
 setTimeout(()=>{

 
 bank_info.style.display="flex";
 page_transfer.style.display="none";
 page1.style.display='none';
 },1000);
}


back1.addEventListener("click",BacktoMain);

function BacktoMain1(){
 setTimeout(()=>{

 
 bank_info.style.display="flex";
 page_transfer.style.display="none";
 page2.style.display='none';
 },1000);
}

back2.addEventListener("click",BacktoMain1);

//page 2 back finish



function BacktoMain2(){
 setTimeout(()=>{

 
 bank_info.style.display="flex";
 page_transfer.style.display="none";
 page3.style.display='none';
 },1000);
}
back3.addEventListener("click",BacktoMain2);

//page 3 back 


function BacktoMain3(){
 setTimeout(()=>{

 
 bank_info.style.display="flex";
 page_transfer.style.display="none";
 page4.style.display='none';
 },1000);
}
back4.addEventListener("click",BacktoMain3);


// page 4 back


function Info_details(){

 
    bank_info.style.display="none"
    page_transfer.style.display="flex";
      page1.style.display='flex';
       let spn=document.querySelector("#spn");
       let spn1=document.querySelector("#spn1");
        let spn2=document.querySelector("#spn2");
        let spn3=document.querySelector("#spn3");

       spn.innerText=info2.name;
        spn1.innerText=info2.accHo;
         spn2.innerText=info2.Email;
          spn3.innerText=info2.mobile;

}

getdata.addEventListener("click",Info_details);


let page2=document.querySelector(".page2");

// page 2 back


// deposite method start
     let Eac=document.getElementById("Eac");
      let Eb=document.getElementById("Eb");
      let Honame=document.querySelector("#Honame");


function deposite(){

   
    // alert("inside deposite function ");
      let userAcc=Eac.value;
      let balance=Number(Eb.value);
      let Uname=Honame.value;
     // alert(Uname);
      let newUser1=localStorage.getItem(Uname);
     let newUser2=JSON.parse(newUser1);

     // alert(newUser2.name);

      if((userAcc==info2.accHo)&&(Uname==info2.name)){
       let balance1= Number(newUser2.Ammount);
       balance1=balance+balance1;
       newUser2.Ammount=balance1;
       info2=newUser2;
       let newUser3=JSON.stringify(newUser2);
       localStorage.setItem(Uname,newUser3);
        alert(`balance is successfully deposited ${balance}₹`);
        console.log(newUser2);
      }

      else{
        alert("Please Enter Valid Account Number Holder Name");
      }

      Eac.value="";
      Eb.value="";
      Honame.value="";
}

let depo1=document.getElementById("depo1");

depo1.addEventListener("click",()=>{

    if((Eac.value=="")||(Eb.value=="")||(Honame.value=="")){

        alert("please fill Account number and Ammount ");
    }else{
       // alert("function is call");
        deposite();
    }


});

// deposite btn finished 

function depo1Change(){
     bank_info.style.display="none"
    page_transfer.style.display="flex";
      page2.style.display='flex';

}

debit.addEventListener("click",depo1Change);

// deposit card work finished 


// withdraw card work is started
      let Eac1=document.getElementById("Eac1");
      let Eb1=document.getElementById("Eb1");
      let Honame1=document.querySelector("#Honame1");
     let with1=document.getElementById("with1");

function Withdraw(){
    
      //alert("inside deposite1 function ");
      let userAcc=Eac1.value;
      let balance=Number(Eb1.value);
      let Uname=Honame1.value;
     // alert(Uname);
      let newUser1=localStorage.getItem(Uname);
     let newUser2=JSON.parse(newUser1);

     // alert(newUser2.name);

      if((userAcc==info2.accHo)&&(Uname==info2.name)){
       let balance1= Number(newUser2.Ammount);
       if(balance1>=500){
       balance1=balance1-balance;
       newUser2.Ammount=balance1;
       info2=newUser2;
       let newUser3=JSON.stringify(newUser2);
       localStorage.setItem(Uname,newUser3);
        alert(`balance is successfully withdraw ${balance}₹`);
        console.log(newUser2);
      }

      else{
        alert("balnce is not enough to withdraw ");
      }

    }

      else{
        alert("Please Enter Valid Account Number OR Account Holder Name");
      }

      Eac1.value="";
      Eb1.value="";
      Honame1.value="";
  


}

with1.addEventListener("click",()=>{
      

    if((Eac1.value=="")||(Eb1.value=="")||(Honame1.value=="")){

        alert("please fill Account number and Ammount ");
    }else{
       // alert("function is call");
        Withdraw();
    }


});

function withDraw(){

      bank_info.style.display="none"
    page_transfer.style.display="flex";
      page3.style.display='flex';
}


credit.addEventListener("click",withDraw);



//withdraw working is finished


// balance check work is started

let rupi=document.getElementById("rupi");
let eye1=document.getElementById("eye1");
let eye2=document.getElementById("eye2");

function eye2Display(){

    eye2.style.display="block";
    eye1.style.display="none";
    console.log(info2);
    if(info2.Ammount==""){
    rupi.innerText=`${0}₹`;
    }

    else{
      rupi.innerText=`${info2.Ammount}₹`;
    }

}

eye1.addEventListener("click",eye2Display);



function eye1Display(){

    eye2.style.display="none";
    eye1.style.display="block";
    rupi.innerText="XXXXX";

}

eye2.addEventListener("click",eye1Display);




// balance check work is finished


function success(){

     if((logi2.value==="")||(pass1.value==0)||(text1.value==="")){

        alert("please enter detailse");
    }
  else{
   let text2=text1.value.trim();
  let userDetails=(localStorage.getItem(text2));
  console.log(userDetails);

  if(userDetails===null){
    alert("user not found ❌");
  }
  else{
    let newUser=JSON.parse(userDetails);
    console.log("new user detail ",newUser);
   // alert("user is found ");
    let newPass=newUser.passWord;
    let newEmail=newUser.Email;
    let userPass=pass1.value;
    let userEmail=logi2.value;

    if((newPass==userPass)&&(newEmail==userEmail)){
        info2={};
        info2=newUser;

        alert(`Welcome  ${newUser.name}  to Royal Bharat Bank`);
        main_container.style.display="none";
        bank_info.style.display="flex"
    }

    else{
      alert("please enter valid password and gmail");
    }

  }

  }

}

function login1(){
   // alert("function is call");
    logi1.addEventListener("click",success);

}


logi.addEventListener("click",()=>{
      register.style.display="none";
      loged.style.display="block";
      setTimeout(()=>{

         login1();
      },1000);
   
});
