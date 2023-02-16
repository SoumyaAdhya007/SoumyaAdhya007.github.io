// window.onscroll = () => {
//     const nav = document.querySelector('#nav-menu');
//     if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
//   };



  GitHubCalendar(".calendar", "SoumyaAdhya007");

// or enable responsive functionality:
GitHubCalendar(".calendar", "SoumyaAdhya007", { responsive: true });

// Use a proxy
const username = "SoumyaAdhya007";
GitHubCalendar(".calendar", "SoumyaAdhya007", {
  proxy(username) {
    return fetch(`https://your-proxy.com/github?user=${username}`);
  },
}).then((r) => console.log(r))
.catch((err)=>console.log(err))

document.getElementById("resume-button-1").onclick=()=>{
    window.open("https://drive.google.com/file/d/1BPDySMDMXclvoj4oCfOHycLf5hceaZJa/view?usp=share_link");
      }
    
      document.getElementById("resume-button-2").onclick=()=>{
        window.open("https://drive.google.com/file/d/1BPDySMDMXclvoj4oCfOHycLf5hceaZJa/view?usp=share_link");
      }