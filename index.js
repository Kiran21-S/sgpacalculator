let subject_1,subject_2,subject_3,subject_4,subject_5,subject_6,subject_7,subject_8;
let credit_1,credit_2,credit_3,credit_4,credit_5,credit_6,credit_7,credit_8;

document.getElementById("submitbtn").onclick = function(){
    subject_1 = parseInt(document.getElementById("mark_1").value)
    credit_1 = document.querySelector('input[name="c1"]:checked').value

    subject_2 = parseInt(document.getElementById("mark_2").value)
    credit_2 = document.querySelector('input[name="c2"]:checked').value

    subject_3 = parseInt(document.getElementById("mark_3").value)
    credit_3 = document.querySelector('input[name="c3"]:checked').value

    subject_4 = parseInt(document.getElementById("mark_4").value)
    credit_4 = document.querySelector('input[name="c4"]:checked').value

    subject_5 = parseInt(document.getElementById("mark_5").value)
    credit_5 = document.querySelector('input[name="c5"]:checked').value

    subject_6 = parseInt(document.getElementById("mark_6").value)
    credit_6 = document.querySelector('input[name="c6"]:checked').value

    subject_7 = parseInt(document.getElementById("mark_7").value)
    credit_7 = document.querySelector('input[name="c7"]:checked').value

    subject_8 = parseInt(document.getElementById("mark_8").value)
    credit_8 = document.querySelector('input[name="c8"]:checked').value


    marks_list = [subject_1, subject_2, subject_3, subject_4, subject_5, subject_6, subject_7, subject_8]
    credits_list = [credit_1, credit_2, credit_3, credit_4, credit_5, credit_6, credit_7,credit_8]
    console.log(marks_list)
    console.log(credits_list)
    let gpa = 0;
    let cp= 0;
    credits_list.forEach(ele => {
        cp=cp+parseInt(ele)
    });
    console.log(cp)
    for(i=0;i<9;i=i+1){
        if(marks_list[i]==100){
            gpa=gpa + (10*credits_list[i])
        }
        else if(marks_list[i]<100 & marks_list[i]>50){
            gpa = gpa + ((Math.ceil((marks_list[i]+0.01)/10)*credits_list[i]))
        }
        else if(marks_list[i]>40 & marks_list[i]<50){
            gpa = gpa + ((Math.round((marks_list[i]+0.01)/10)*credits_list[i]))
        }
        else{
            gpa = gpa + 0
        }
    }
    console.log(gpa);
    final_gpa = (gpa/cp).toFixed(2);
    // final_gpa = Math.round(final_gpa).toFixed(3)
    document.querySelector(".result_cover").textContent = `GPA \n ${final_gpa}`
    // const resultElement = document.querySelector(".result");
    document.querySelector(".result_fill").style.transform = `rotate(${final_gpa*0.5*0.1}turn)`; 
    // result.querySelector("result_cover").textContent = `Math.round(result,2)`
    // setResultValue(final_gpa);
 }
