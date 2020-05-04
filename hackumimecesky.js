function pressCorrect(){
if (questions[questionOffset].options[1].correct == "0"){
$(".option0").trigger("click");
}
else{
$(".option1").trigger("click");
}}
a = window.setInterval(pressCorrect(), 2000)

