maxPost = 99

rand = Math.floor(Math.random() * maxPost) + 1

rand = rand.toString()

document.write(`
<nav>
    <a href="/index.html">Home</a>
    <a href="https://github.com/II-eugene-II/II-eugene-II.github.io"> Github Repo </a> <br>
`)
document.write("<a href=\"/Post/Post01000/" + rand.padStart(5, "0") + ".html\"> Random Page </a> ");
document.write(`
II-eugene-II note
</nav>
`)
