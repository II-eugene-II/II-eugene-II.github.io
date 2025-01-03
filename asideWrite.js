maxPost = 546;

var arr = [-1, 115, 116, 129, 133, 164, 201, 259, 295, 296, 464, 300, 301, 400, 401, 500, 501, 521, 530];

var rand = -1;

while (arr.includes(rand)) { rand = Math.floor(Math.random() * maxPost) + 1; }

rand = rand.toString()

document.write(`
<br>
<a href="/index.html"> Main Page </a>
<br>
<br>
<br>
`);

document.write(`<a href="/Post/Post01000/` + rand.padStart(5, "0") + `.html"> Random Page </a> <span style="font-size: 8px;"> ` + rand + ` </span> <br> <br>`);

document.write(`
<input id="whatPage" placeholder="이동할 페이지 입력" type="text">
<br>
<button id="goPage" onclick="givePage()"> 페이지 이동 </button>
<br>
<div id="showGoPage"></div>
<br>
`);

function givePage()
{
    var page = document.querySelector('#whatPage').value;
    page = page.toString()
    var but = `<button id="goPage2" type="button" onclick="location.href='/Post/Post01000/` + page.padStart(5, "0") + `.html' ">` + page + `페이지로 </button>`
    document.querySelector('#showGoPage').innerHTML = but
}
