maxPost = 530

const arr = [-1, 201, 300, 301, 400, 401, 500, 501];

var rand = -1;

while (arr.includes(rand)) { rand = Math.floor(Math.random() * maxPost) + 1; }

rand = rand.toString()

document.write(`
II-eugene-II note <br>
`)

document.write("<a href=\"/Post/Post01000/" + rand.padStart(5, "0") + ".html\"> Random Page </a> ");

document.write(`
<nav>
    <a href="/index.html"> Home </a> <br>
    <a href="https://github.com/II-eugene-II/II-eugene-II.github.io"> Github Repo </a> <br>
</nav>
`)
