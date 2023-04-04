// function askMark()
// {
//     var mark = +prompt('What is your mark?');
//     return mark;
// }
// function deepCompare(mark)
// {
//     if (mark >= 90)
//     {
//         console.log('A');
//     }
//     else if (mark >= 80)
//     {
//         console.log('B');
//     }
//     else if (mark >= 70)
//     {
//         console.log('C');
//     }
//     else if (mark >= 60)
//     {
//         console.log('D');
//     }
//     else
//     {
//         console.log('E');
//     }
// }

// var mark = askMark();
// if (isNaN(mark) || mark < 0 || mark > 100 || mark == null)
// {
//     console.log('Invalid mark');
// }
// else
// {
//     console.log('Your mark is ' + mark);
//     (mark == 100) ? console.log('Perfect! 奖励一辆车') : deepCompare(mark);
// }
function getMax(num1, num2)
{
    num1 > num2 ? max = num1 : max = num2;
    return max;
}
var num1 = 99999, num2 = 5, num3 = 7;
var max = getMax(num1, num2);
max = getMax(max, num3);
console.log(max);
document.write('A');
document.write('<br/>');
document.write('B');
document.write('<br/>');

for (var first = 1; first <=9; first++)
{
    for (var second = 1; second <= first; second++)
    {
        document.write(first + '*' + second + '=' + first * second + '\t');
    }
    document.write('<br/>');
}
var name1 = (function()
{
    return prompt('What is your name?');
})();
document.write(name1);