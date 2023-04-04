function validCheck(score)
{
    if(score < 0 || score > 100)
    {
        alert("成绩必须在0-100之间");
        return false;
    }
    return true;
}

function upload_fun(choice, score)
{
    log.innerHTML += "<br>上传: " + choice + " | 成绩" + score + "分<br>";
    right_box.scrollTop = right_box.scrollHeight;
    right_box.style.backgroundColor = "rgb(100, 0, 0)";
    setTimeout(function()
    {
        right_box.style.backgroundColor = "rgb(255, 228, 196)";
    }, 5);
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
    if(!validCheck(score))
    {
        return;
    }
    upload_fun(choice, score);
}
window.onload = function() 
{
    var left_box = document.getElementById("left_box");
    var labels = left_box.getElementsByTagName("label");

    var right_box = document.getElementById("right_box");
    var log = document.getElementById("log");

    var submit = document.getElementById("submit");

    var preloader = function()
    {
        var choices = new Array(500);
        var scores = new Array(500);
        for(var i = 0; i < choices.length; i++)
        {
            (function(arg)
            {
                setTimeout(function()
                {           
                    choices[i] = Math.floor(Math.random() * 4) + 1;
                    scores[i] = Math.floor(Math.random() * 101);
                    switch(choices[i])
                    {
                        case 1:
                            labels[0].firstElementChild.checked = true;
                            break;
                        case 2:
                            labels[1].firstElementChild.checked = true;
                            break;
                        case 3:
                            labels[2].firstElementChild.checked = true;
                            break;
                        case 4:
                            labels[3].firstElementChild.checked = true;
                            break;
                        default:
                            break;
                    }
                    document.getElementById("mark").value = scores[i];
                    getChoice(labels);
                    console.log(arg);
                }, i * 200);
            }(i))
        }
    }();
    submit.onclick = function()
    {
        getChoice(labels);
    }
}