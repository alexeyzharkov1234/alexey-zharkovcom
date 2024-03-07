
/* menu --------------------------------------------------- */
const menu = document.getElementById('menu');
menu.innerHTML +=
`
<a id="menuun" class="menu">Domaines<br>d'intervention</a>
<a class="menu">Consultation<br>express en ligne</a>
<a class="menu">Prendre rendez-vous<br>au cabinet</a>
<a class="menu">Tarifs</a>
<a class="menu" href="#footer">Contact</a>
<a id="menutrois" class="menu">
<img id="globe" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgaGVpZ2h0PSI1MTIiCiAgIHZpZXdCb3g9IjAgMCA1MTIgNTEyIgogICB3aWR0aD0iNTEyIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc3IgogICBzb2RpcG9kaTpkb2NuYW1lPSJlYXJ0aC5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMy4yICgwOTFlMjBlLCAyMDIzLTExLTI1KSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzNyIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9Im5hbWVkdmlldzciCiAgICAgcGFnZWNvbG9yPSIjNTA1MDUwIgogICAgIGJvcmRlcmNvbG9yPSIjZWVlZWVlIgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiM1MDUwNTAiCiAgICAgaW5rc2NhcGU6em9vbT0iMC4yMTA2MzMiCiAgICAgaW5rc2NhcGU6Y3g9Ii0xNjEuNDE4MiIKICAgICBpbmtzY2FwZTpjeT0iMjI3Ljg4NDUyIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTQ0MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI0NDkiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjI1IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNyIgLz4KICA8ZwogICAgIGlkPSJnNyIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIgogICAgIHRyYW5zZm9ybT0ibWF0cml4KDEuMDkzNzUsMCwwLDEuMDkzNzUsLTIzLjg1ODIzNiwtMjIuMjY2NTU1KSI+CiAgICA8cGF0aAogICAgICAgZD0ibSAyNjcsNDc0IC0wLjgsLTAuMTMgQSAwLjg1LDAuODUgMCAwIDAgMjY3LDQ3NCBaIgogICAgICAgaWQ9InBhdGgxIgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MSIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJNIDQ0OC45LDE4Ny43OCBBIDUuNTEsNS41MSAwIDAgMCA0MzguMjMsMTg3LjE1IDUuNTIsNS41MiAwIDAgMSA0MzMsMTkxIGggLTE1LjQ3IGEgNS40OCw1LjQ4IDAgMCAxIC0yLjg0LC0wLjc5IEwgMzkyLjMxLDE3Ni43OSBBIDUuNDgsNS40OCAwIDAgMCAzODkuNDcsMTc2IGggLTM1LjggYSA1LjQ4LDUuNDggMCAwIDAgLTMuMDYsMC45MyBsIC00NC4xNSwyOS40MyBBIDUuNTIsNS41MiAwIDAgMCAzMDQsMjExIHYgNDEuNzQgYSA1LjUxLDUuNTEgMCAwIDAgMi45Miw0Ljg3IGwgNTcuODksMzAuOSBhIDUuNTUsNS41NSAwIDAgMSAyLjkyLDQuOCBMIDM2OCwzMTYuOCBhIDUuNTMsNS41MyAwIDAgMCAyLjg1LDQuNzUgbCAyMy4yNiwxMi44NyBhIDUuNTQsNS41NCAwIDAgMSAyLjg1LDQuODMgdiA0OC42IGEgNS41Miw1LjUyIDAgMCAwIDkuMTcsNC4xNCBjIDkuMzgsLTguMjYgMjIuODMsLTIwLjMyIDI0LjYyLC0yMy4wOCBxIDQuNDQsLTYuODcgOC4zMywtMTQuMDcgYSAyMDcuMzksMjA3LjM5IDAgMCAwIDEzLjYsLTMxIGMgMTIuNjgsLTM2LjcxIDIuNjYsLTEwMi43IC0zLjc4LC0xMzYuMDYgeiIKICAgICAgIGlkPSJwYXRoMiIKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjEiIC8+CiAgICA8cGF0aAogICAgICAgZD0ibSAyODYuNCwzMDIuOCAtNjEuMzMsLTQ2IGEgNCw0IDAgMCAwIC0yLjQsLTAuOCBoIC0yOS4xIGEgMy43OCwzLjc4IDAgMCAxIC0yLjY4LC0xLjExIEwgMTc3LjE3LDI0MS4xNyBBIDQsNCAwIDAgMCAxNzQuMzQsMjQwIGggLTUzLjE5IGEgMy43OSwzLjc5IDAgMCAxIC0yLjY4LC02LjQ3IGwgOC40MiwtOC40MiBhIDMuNzgsMy43OCAwIDAgMSAyLjY4LC0xLjExIGggMzIuMzcgYSA4LDggMCAwIDAgNy43LC01LjgzIGwgNi44OSwtMjQuNSBhIDQsNCAwIDAgMSAyLC0yLjQ3IEwgMjA2LDE3Ny4wNiBhIDMuNzksMy43OSAwIDAgMCAyLjA1LC0zLjM3IHYgLTEyLjUgYSAzLjgyLDMuODIgMCAwIDEgMC42OCwtMi4xNyBMIDIyMy4zMywxMzggYSAzLjc1LDMuNzUgMCAwIDEgMS43OCwtMS4zOCBsIDIwLjQzLC03LjY3IEEgMy43OSwzLjc5IDAgMCAwIDI0OCwxMjUuNCBWIDExNCBhIDMuOCwzLjggMCAwIDAgLTEuNjksLTMuMTYgTCAyMjUuODMsOTcuMjIgQSAzLjgzLDMuODMgMCAwIDAgMjIyLDk3IGwgLTI3Ljg4LDEzLjk0IGEgMy43OCwzLjc4IDAgMCAxIC00LC0wLjQxIEwgMTc2LjksMTAwLjA4IGEgMy44LDMuOCAwIDAgMSAwLjEsLTYgbCAxMC43NCwtNy45MSBhIDMuNzgsMy43OCAwIDAgMCAtMC4wOSwtNi4xNiBMIDE3MC45Miw2OC4zNCBhIDMuNzgsMy43OCAwIDAgMCAtNCwtMC4yMiBjIC02LjA1LDMuMzEgLTIzLjgsMTMuMTEgLTMwLjEsMTcuNTIgYSAyMDkuNDgsMjA5LjQ4IDAgMCAwIC02OC4xNiw4MCBjIC0xLjgyLDMuNzYgLTQuMDcsNy41OSAtNC4yOSwxMS43MiAtMC4yMiw0LjEzIC0zLjQ2LDEzLjM1IC00LjgxLDE3LjA4IGEgMy43OCwzLjc4IDAgMCAwIDAuMjQsMy4xIGwgMzUuNjksNjUuNTggYSAzLjc0LDMuNzQgMCAwIDAgMS4zOCwxLjQ0IGwgMzcuNTUsMjIuNTQgYSAzLjc4LDMuNzggMCAwIDEgMS44MSwyLjczIGwgNy41Miw1NC41NCBhIDMuODIsMy44MiAwIDAgMCAxLjYxLDIuNjEgbCAyOS4zLDIwLjE0IGEgNCw0IDAgMCAxIDEuNjUsMi40OCBsIDE1LjU0LDczLjggYSAzLjYsMy42IDAgMCAwIDAuNDksMS4yMiBjIDEuNDYsMi4zNiA3LjI4LDExIDE0LjMsMTIuMjggLTAuNjUsMC4xOCAtMS4yMywwLjU5IC0xLjg4LDAuNzggYSA0Ny42Myw0Ny42MyAwIDAgMSA1LDEuMTYgYyAyLDAuNTQgNCwxIDYsMS40MyAzLjEzLDAuNjIgMy40NCwxLjEgNC45NCwtMS42OCAyLC0zLjcyIDQuMjksLTUgNiwtNS40NiBhIDMuODUsMy44NSAwIDAgMCAyLjg5LC0yLjkgbCAxMC4wNywtNDYuNjggYSA0LDQgMCAwIDEgMS42LC0yLjQyIGwgNDUsLTMxLjkgYSA0LDQgMCAwIDAgMS42OSwtMy4yNyBWIDMwNiBhIDQsNCAwIDAgMCAtMS41NSwtMy4yIHoiCiAgICAgICBpZD0icGF0aDMiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIiAvPgogICAgPHBhdGgKICAgICAgIGQ9Im0gMjYyLDQ4IGMgMCwwIC0zLjY1LDAuMjEgLTQuMzksMC4yMyBxIC04LjEzLDAuMjQgLTE2LjIyLDEuMTIgQSAyMDcuNDUsMjA3LjQ1IDAgMCAwIDE4NC4yMSw2NCBjIDIuNDMsMS42OCAtMS43NSwzLjIyIC0xLjc1LDMuMjIgTCAxODksODAgaCAzNSBsIDI0LDEyIDIxLC0xMiB6IgogICAgICAgaWQ9InBhdGg0IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MSIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJtIDM1NC4yMywxMjAuMDYgMTYuMTEsLTE0IGEgNCw0IDAgMCAwIC0wLjk0LC02LjY1IGwgLTE4LjgxLC04LjczIGEgNCw0IDAgMCAwIC01LjMsMS45IGwgLTcuNzUsMTYuMjEgYSA0LDQgMCAwIDAgMS40OSw1LjExIGwgMTAuNDYsNi41NCBhIDQsNCAwIDAgMCA0Ljc0LC0wLjM4IHoiCiAgICAgICBpZD0icGF0aDUiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIiAvPgogICAgPHBhdGgKICAgICAgIGQ9Im0gNDI5LjY0LDE0MC42NyAtNS44MywtOSBjIC0wLjA5LC0wLjE0IC0wLjE3LC0wLjI4IC0wLjI1LC0wLjQzIC0xLjA1LC0yLjE1IC05Ljc0LC0xOS43IC0xNywtMjYuNTEgLTUuNDUsLTUuMTUgLTcsLTMuNjcgLTcuNDMsLTIuNTMgYSAzLjc3LDMuNzcgMCAwIDEgLTEuMTksMS42IGwgLTI4Ljg0LDIzLjMxIGEgNCw0IDAgMCAxIC0yLjUxLDAuODkgaCAtMTQuOTMgYSA0LDQgMCAwIDAgLTIuODMsMS4xNyBsIC0xMiwxMiBhIDQsNCAwIDAgMCAwLDUuNjYgbCAxMiwxMiBhIDQsNCAwIDAgMCAyLjgzLDEuMTcgaCA3NS4xNyBhIDQsNCAwIDAgMCA0LC00LjE3IGwgLTAuNTUsLTEzLjE1IGEgNCw0IDAgMCAwIC0wLjY0LC0yLjAxIHoiCiAgICAgICBpZD0icGF0aDYiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIiAvPgogICAgPHBhdGgKICAgICAgIGQ9Ik0gMjU2LDcyIEEgMTg0LDE4NCAwIDEgMSAxMjUuOSwxMjUuOSAxODIuNzcsMTgyLjc3IDAgMCAxIDI1Niw3MiBtIDAsLTQwIEMgMTMyLjMsMzIgMzIsMTMyLjMgMzIsMjU2IDMyLDM3OS43IDEzMi4zLDQ4MCAyNTYsNDgwIDM3OS43LDQ4MCA0ODAsMzc5LjcgNDgwLDI1NiA0ODAsMTMyLjMgMzc5LjcsMzIgMjU2LDMyIFoiCiAgICAgICBpZD0icGF0aDciCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg==" />
Français
</a>

<div id="sousmenuun" class="sousmenu">

<!--a href="1.html">Rubrique 1</a>
<a href="2.html">Rubrique 2</a-->

</div>


<div id="sousmenutrois" class="sousmenu">
<a href="https://alexey-zharkov.com/en">English</a>
<a href="https://alexey-zharkov.com/">Français</a>
<a href="https://alexey-zharkov.com/ru">Русский</a>
</div>

`;

const menuun = document.getElementById('menuun');
const menutrois = document.getElementById('menutrois');
const sousmenuun = document.getElementById('sousmenuun');
const sousmenutrois = document.getElementById('sousmenutrois');
const sousmenus = document.querySelectorAll('.sousmenu');
sousmenus.forEach(sousmenu => { sousmenu.style.display = 'none'; });


menuun.addEventListener('click', function() {

  if (sousmenuun.style.display === 'block') {
    sousmenus.forEach(sousmenu => { sousmenu.style.display = 'none'; });
} else {
  sousmenus.forEach(sousmenu => { sousmenu.style.display = 'none'; });
  sousmenuun.style.display = 'block';
}

});



menutrois.addEventListener('click', function() {

  if (sousmenutrois.style.display === 'block') {
    sousmenus.forEach(sousmenu => { sousmenu.style.display = 'none'; });
} else {
  sousmenus.forEach(sousmenu => { sousmenu.style.display = 'none'; });
  sousmenutrois.style.display = 'block';
}

});



/* footer ------------------------------------------------ */
const footer = document.getElementById('footer');

footer.innerHTML +=
`

<!--div class="contact">
<div class="titre">Contacter Alexey Zharkov</div>
<div class="texte">Merci de l’intérêt que vous portez à AZ Gestion. Veuillez choisir l’une des options ci-dessous.</div>
<div class="bloc"><div class="titre">+33 7 62 62 05 54</div></div>
<div class="bloc"><div class="titre">info@az-gestion.com</div></div>
</div-->

<a href="legal.html">Mentions légales</a>
<a href="cgv.html">CGV</a>
<a href="privacy.html">Confidentialité</a>

<div id="copyright">© <span id="annee"></span> AZ Gestion</div>

    `;


    var date = new Date();
    var annee = date.getFullYear(); 
    document.getElementById("annee").innerHTML = annee;


/* derouler ---------------------------------------------- */
document.querySelectorAll('.derouler .top').forEach(function(derouler) {
  derouler.addEventListener('click', function() {
    let parent = this.parentElement;
      let contenu = parent.querySelector('.contenu');
      let montrer = parent.querySelector('.montrer');
      let cacher = parent.querySelector('.cacher');
      if (contenu.style.display === "none" || contenu.style.display === "") {
          contenu.style.display = "block";
          cacher.style.display = "inline-block";
          montrer.style.display = "none";
      } else {
          contenu.style.display = "none"; // Optionnel: cache le contenu si on clique à nouveau
          cacher.style.display = "none";
          montrer.style.display = "inline-block";
      }
  });
});
