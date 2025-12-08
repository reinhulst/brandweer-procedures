// Vul hier je procedures in met de OneDrive-links
const procedures = [
  {
    title: "Onderhoudsproces",
    description: "Standaard Onderhoudsproces.",
    url: "https://1drv.ms/b/c/1429f39337a31c60/ERPWGm4qz_5Lko58fDV7560BhSfRLgzFQUD5x9kPKlq90g?e=dOvQsc"
  },
  {
    title: "RFFS – Organisatie RFFS AAA",
    description: "Organisatie RFFS AAA.",
    url: "https://1drv.ms/b/c/1429f39337a31c60/ETlGUQ6GEWVHlIy0l_MJugUB4GE0C_kxesgSmRFjbu1DXw?e=PxbeDc"
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

