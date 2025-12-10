// Vul hier je procedures in met de OneDrive-links
const procedures = [
  {
    title: "LOP-RFFS",
    description: "Afname Level Of Protection.",
    url: "https://1drv.ms/b/c/1429f39337a31c60/EYfj0coUBp9ApBwqydMrWmoBMcnglSCf2vPc-vl7RAW_YQ?e=LlIa5O"
  },
  {
    title: "RTT-RFFS",
    description: "Response Time Test.",
    url: "https://1drv.ms/b/c/1429f39337a31c60/Ee60Y8TYeaRDo_4de6uxcP4B_hiJfF5EqKQUNvgkKDcOqA?e=OHm8Vm"
  },
 {
    title: "HVV",
    description: "High Visibilty Vests.",
    url: "https://1drv.ms/b/c/1429f39337a31c60/EdcQp15bl6VBvSWMQFsL4zABNH1J4IIvEU7_kJhg7kUAdw?e=yiO8EY"
  },
{
    title: "Vuurwerk",
    description: "Optreden bij vuurwerkbranden.",
    url: "https://1drv.ms/b/c/1429f39337a31c60/IQAUBk4MnFvRRbt3WzQUQ5POAcZhfpN-EeTrGrut6ALMc0c?e=SWvPvm"
  },
{
    title: "Bereikbaarheid",
    description: "Assessment van bereikbaarheid 1 km gebied.",
    url: "https://1drv.ms/b/c/1429f39337a31c60/IQDF3k4BiIQ1SZH2Ua-c08ViAXebOcJHUhjRlGeX6QszgDA?e=KVPKAV"
  },
 {
    title: "Info",
    description: "Infographics.",
    url: "https://1drv.ms/b/c/1429f39337a31c60/ERz5iu_fTz5HrYTJ66-1X2QB0pBHvWKR9R6twEMGEmU2Vw?e=Lgu1hC"
  }

  // Voeg hier meer items toe
];

function renderList() {
  const list = document.getElementById("procedure-list");
  list.innerHTML = "";

  procedures.forEach(proc => {
    const li = document.createElement("li");

    li.innerHTML = `
      <h2>${proc.title}</h2>
      <p>${proc.description}</p>
      <p><a href="${proc.url}" target="_blank" rel="noopener noreferrer">
        Open PDF
      </a></p>
    `;

    list.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", renderList);

// Service worker registreren (voor PWA/offline schil)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js")
      .catch(err => console.log("SW fout:", err));
  });
}

