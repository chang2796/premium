window.addEventListener("load", () => {
  navigator.serviceWorker.register("../sw.js?v=10-02-2024", {
    scope: "/a/",
  });
});

const form = document.getElementById("fv");
const input = document.getElementById("iv");

if (form && input) {
  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (window.top.location.pathname === "/rx") {
      processUrl(input.value, "");
    } else {
      processUrl(input.value, "/rx");
    }
  });
}
function processUrl(value, path) {
  let url = value.trim();
  const engine = localStorage.getItem("engine");
  const searchUrl = engine ? engine : "https://www.google.com/search?q=";

  if (!isUrl(url)) {
    url = searchUrl + url;
  } else if (!(url.startsWith("https://") || url.startsWith("http://"))) {
    url = `https://${url}`;
  }

  sessionStorage.setItem("GoUrl", __uv$config.encodeUrl(url));
  const dy = localStorage.getItem("dy");

  if (dy === "true") {
    window.location.href = `/a/q/${__uv$config.encodeUrl(url)}`;
  } else if (path) {
    location.href = path;
  } else {
    window.location.href = `/a/${__uv$config.encodeUrl(url)}`;
  }
}

function go(value) {
  processUrl(value, "/rx");
}

function blank(value) {
  processUrl(value);
}

function dy(value) {
  processUrl(value, `/a/q/${__uv$config.encodeUrl(value)}`);
}

function isUrl(val = "") {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  ) {
    return true;
  }
  return false;
}
 var answer
var answer1 = '3/4'
password = prompt('In the 𝑥 𝑦 -plane, the point ( 𝑝 , 𝑟 ) lies on the line with equation 𝑦 = 𝑥 + 𝑏 , where 𝑏 is a constant. The point with coordinates ( 2 𝑝 , 5 𝑟 ) lies on the line with equation 𝑦 = 2 𝑥 + 𝑏 . If 𝑝 ≠ 0 , what is the value of 𝑟 𝑝', ' ')
if (password == pass1) alert('Answered Correct! This site is made by you know who. that one guy that u know who does chromebook stuff')
else {
 window.location = 'google.com'
}
