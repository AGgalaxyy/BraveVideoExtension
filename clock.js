// ASCII numbers
// Improved ASCII numbers
const asciiDigits = {
  "0": [
    " ██████╗  ",
    "██╔═══██╗ ",
    "██║   ██║ ",
    "██║   ██║ ",
    "╚██████╔╝ ",
    " ╚═════╝  "
  ],
  "1": [
    "   ██╗    ",
    "  ███║    ",
    "   ╚██║   ",
    "    ██║   ",
    "    ██║   ",
    "    ╚═╝   "
  ],
  "2": [
    " ██████╗  ",
    "╚════██║  ",
    "  █████╔╝ ",
    " ██╔═══╝  ",
    "███████╗  ",
    "╚══════╝  "
  ],
  "3": [
    "██████╗   ",
    "╚════██╗  ",
    " █████╔╝  ",
    " ╚═══██╗  ",
    "██████╔╝  ",
    "╚═════╝   "
  ],
  "4": [
    "██╗  ██╗  ",
    "██║  ██║  ",
    "███████║  ",
    "╚═══██║   ",
    "    ██║   ",
    "    ╚═╝   "
  ],
  "5": [
    "███████╗  ",
    "██╔════╝  ",
    "███████╗  ",
    "╚════██║  ",
    "███████║  ",
    "╚══════╝  "
  ],
  "6": [
    " ██████╗  ",
    "██╔════╝  ",
    "███████╗  ",
    "██╔═══██╗ ",
    "╚██████╔╝ ",
    " ╚═════╝  "
  ],
  "7": [
    "███████╗ ",
    "╚═══███║ ",
    "   ███╔╝ ",
    "  ███╔╝  ",
    "  ███║   ",
    "  ╚══╝   "
  ],
  "8": [
    " █████╗  ",
    "██╔══██╗ ",
    "╚█████╔╝ ",
    "██╔══██╗ ",
    "╚█████╔╝ ",
    " ╚════╝  "
  ],
  "9": [
    " ██████╗ ",
    "██╔══██╗ ",
    "╚██████║ ",
    " ╚═══██║ ",
    " █████╔╝ ",
    " ╚════╝  "
  ],
  ":": [
    "       ",
    "  ██╗  ",
    "  ╚═╝  ",
    "  ██╗  ",
    "  ╚═╝  ",
    "        "
  ]
};

function renderAsciiClock(hms) {
  let lines = ["","","","",""];
  for (let ch of hms) {
    const digitLines = asciiDigits[ch] || ["    ","    ","    ","    ","    "];
    for (let i=0;i<5;i++) {
      lines[i] += digitLines[i] + "  ";
    }
  }
  return lines.join("\n");
}

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const asciiTime = renderAsciiClock(`${h}:${m}`);
  document.getElementById("clock").textContent = asciiTime;
}

updateClock();
setInterval(updateClock, 1000);
