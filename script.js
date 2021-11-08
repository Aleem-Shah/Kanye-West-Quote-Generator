const para = document.querySelector(".quote");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const Http = new XMLHttpRequest();
  const url = "https://api.kanye.rest";
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
      let rst=Http.responseText;
      let psk=rst.replace(/[{()}]/g, '');
      let msk=psk.slice(8);
    para.innerText=msk;
  };
});
