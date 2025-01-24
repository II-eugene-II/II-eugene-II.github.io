maxPost = 548;

var arr = [-1, 115, 116, 129, 133, 164, 201, 259, 295, 296, 464, 300, 301, 400, 401, 500, 501, 521, 530];

var rand = -1;

while (arr.includes(rand)) { rand = Math.floor(Math.random() * maxPost) + 1; }

rand = rand.toString()

document.write(`
<br>
II-eugene-II Note <br>
<br>
`)

document.write(`<a href="/Post/Post01000/` + rand.padStart(5, "0") + `.html"> Random Page </a> <span style="font-size: 8px;"> ` + rand + ` </span> `);

document.write(`
<nav>
    <a href="/index.html"> Home </a> <br>
    <a href="https://github.com/II-eugene-II/II-eugene-II.github.io"> Github Repo </a> <br>
</nav>
`)
