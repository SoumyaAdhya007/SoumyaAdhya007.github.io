// window.onscroll = () => {
//     const nav = document.querySelector('#nav-menu');
//     if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
//   };

let sidemune= document.querySelector(".nav_inner");

function openmenu(){
    sidemune.style.right="0";
}
function closemenu(){
    sidemune.style.right="-200px";

}


  GitHubCalendar(".calendar", "SoumyaAdhya007");

// or enable responsive functionality:
// GitHubCalendar(".calendar", "SoumyaAdhya007", { responsive: true });

// Use a proxy
// const username = "SoumyaAdhya007";
// GitHubCalendar(".calendar", "SoumyaAdhya007", {
//   proxy(username) {
//     return fetch(`https://your-proxy.com/github?user=${username}`);
//   },
// }).then((r) => console.log(r))
// .catch((err)=>console.log(err))
GitHubCalendar(".calendar", "SoumyaAdhya007", {
    responsive: true,
    global_stats: true,
    tooltips: true,
  });

document.getElementById("resume-button-1").onclick=()=>{
    window.open("https://drive.google.com/file/d/1BPDySMDMXclvoj4oCfOHycLf5hceaZJa/view?usp=share_link");
      }
    
      document.getElementById("resume-button-2").onclick=()=>{
        window.open("https://drive.google.com/file/d/1BPDySMDMXclvoj4oCfOHycLf5hceaZJa/view?usp=share_link");
      }