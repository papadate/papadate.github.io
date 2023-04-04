

function upload_fun(choice, score)
{
    log.innerHTML += "<br>上传: " + choice + " | 成绩" + score + "分<br>";
}
function getChoice(labels)
{
    var choice;
    var score;

    for(var i = 0; i < labels.length; i++)
    {
        if(labels[i].firstElementChild.checked)
        {
            choice = labels[i].innerText;
            break;
        }
    }

    score = document.getElementById("mark").value;
    
    if(score == "")
    {
        alert("请填写成绩");
        return;
    }
    console.log(choice, score);
    upload_fun(choice, score);
}
window.onload = function() 
{
    var left_box = document.getElementById("left_box");
    var labels = left_box.getElementsByTagName("label");

    var log = document.getElementById("log");

    var submit = document.getElementById("submit");

    submit.onclick = function()
    {
        getChoice(labels);
    }
}