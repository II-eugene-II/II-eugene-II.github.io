maxPost = 85

rand = Math.floor(Math.random() * maxPost) + 1

rand = rand.toString()

document.write("a<br>s<br>i<br>d<br>e<br>160<br>");
document.write("<a href=\"/index.html\"> Main Page </a> ");
document.write("<br>");
document.write("<a href=\"https://github.com/II-eugene-II/II-eugene-II.github.io\"> Github Repo </a>");
document.write("<br>");
document.write("<a href=\"/Post/Post01000/" + rand.padStart(5, "0") + ".html\"> Random Page </a> ");