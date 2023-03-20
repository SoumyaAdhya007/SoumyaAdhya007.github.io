

GitHubCalendar(".calendar", "SoumyaAdhya007");

GitHubCalendar(".calendar", "SoumyaAdhya007", {
    responsive: true,
    global_stats: true,
    tooltips: true,
  });


  // document.getElementById("resume-button-1").onclick=()=>{
  //   window.open("https://drive.google.com/file/d/1BPDySMDMXclvoj4oCfOHycLf5hceaZJa/view?usp=share_link");
  //     }
    
  //     document.getElementById("resume-button-2").onclick=()=>{
  //       window.open("https://drive.google.com/file/d/1BPDySMDMXclvoj4oCfOHycLf5hceaZJa/view?usp=share_link");
  //     }
  let resume1 = document.getElementById("resume-link-1").addEventListener("click",opendrive);
  let resume2 = document.getElementById("resume-link-2").addEventListener("click",opendrive);
function opendrive(){
 location.href ="https://drive.google.com/file/d/1BPDySMDMXclvoj4oCfOHycLf5hceaZJa/view?usp=share_link";
  // window.open((href ="https://drive.google.com/file/d/1BPDySMDMXclvoj4oCfOHycLf5hceaZJa/view?usp=share_link"));
 }