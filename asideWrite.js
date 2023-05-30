maxPost = 430

rand = Math.floor(Math.random() * maxPost) + 1

rand = rand.toString()

document.write(`<br><br>
<a href="/index.html"> Main Page </a> <br> <br> <br>
<a href="https://github.com/II-eugene-II/II-eugene-II.github.io"> Github Repo </a> <br> <br> <br>`);
document.write("<a href=\"/Post/Post01000/" + rand.padStart(5, "0") + ".html\"> Random Page </a> <br> <br>");

document.write(`<input id="whatPage" placeholder="이동할 페이지 입력"  type="text"> <br>
<button id="goPage" onclick="givePage()"> 페이지 이동 </button> <br>
<div id="showGoPage"></div> <br>`);

function givePage()
{
    var page = document.querySelector('#whatPage').value;
    page = page.toString()
    var but = `<button id="goPage2" type="button" onclick="location.href='/Post/Post01000/` + page.padStart(5, "0") + `.html' ">` + page + `페이지로 </button>`
    document.querySelector('#showGoPage').innerHTML = but
}