// for get value from form 
const btn=document.querySelector(".button");
const input_date=document.querySelector("#day");
const input_month=document.querySelector("#month");
const input_year=document.querySelector("#year");

// for get value in result container 
let result_date=document.querySelector("#days");
let result_months=document.querySelector("#months")
let result_years=document.querySelector("#years");

let month_arr=[31,28,31,30,31,30,31,31,30,31,30,31]


//current full date  
const date=new Date();
let current_date=date.getDate();//current date

let current_month=date.getMonth()+1;//current month

let current_year=date.getFullYear();// current year 


function validation(){
    const inputs=document.querySelectorAll("input");
    const lable=document.querySelectorAll("label")
    let validate=true;
    inputs.forEach(element => {
        let parent=element.parentElement;
        if(!element.value){
            element.style.borderColor="red";
            element.style.color="red"
            parent.querySelector("small").innerText="this field is required.";
            parent.querySelector("small").style.color="red";
            parent.querySelector("small").style.fontSize="8px";
            
            lable.forEach(i=>{
                i.style.color="red";
            })
            validate=false;
        }
        else if(input_date.value>31){
            input_date.style.borderColor="red";
            input_date.parentElement.querySelector("small").innerText="must be valid day.";
            parent.querySelector("small").style.color="red";
            parent.querySelector("small").style.fontSize="8px";
            lable.forEach(i=>{
                if(i.htmlFor==="day"){
                    i.style.color="red";
                }
            })

            validate=false;
        }
        else if(input_month.value>12){
            input_month.style.borderColor="red";
            input_month.parentElement.querySelector("small").innerText="must be valid month.";
            parent.querySelector("small").style.color="red";
             parent.querySelector("small").style.fontSize="8px";
             lable.forEach(i=>{
                if(i.htmlFor==="month"){
                    i.style.color="red";
                }
            })

            validate=false;
        }
        else if(input_year.value>current_year){
            input_year.style.borderColor="red";
            input_year.parentElement.querySelector("small").innerText="must be valid month.";
            parent.querySelector("small").style.color="red";
             parent.querySelector("small").style.fontSize="8px";
             lable.forEach(i=>{
                if(i.htmlFor==="year"){
                    i.style.color="red";
                }
            })

            validate=false;
        }else{
            element.style.borderColor="balck";
            parent.querySelector("small").innerText="";
            validate=true;
        }

        
    })
    return validate;
}

btn.addEventListener("click",function(event){
    event.preventDefault();
   
    if(validation()){
        

        if(parseInt(input_date.value)>current_date){
            current_date=current_date+month_arr[parseInt(input_month.value)-1];
            current_month=current_month-1;
            console.log(current_date);
        }
    
        if(parseInt(input_month.value)>current_month){
            current_month=current_month+12;
            current_year=current_year-1
        }
    
        let date=current_date-parseInt(input_date.value);
        let month=current_month-parseInt(input_month.value);
        let year=current_year-parseInt(input_year.value);
    
    
    
         result_date.innerText =  `${date}`;  
         result_months.innerText=  `${month}`;
         result_years.innerText = `${year}`;
    }
    

    
})
parseInt