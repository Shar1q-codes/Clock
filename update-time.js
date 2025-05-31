// update-time.js

const fs = require("fs");
const path = require("path");

// Convert to IST (UTC +5:30)
function getISTTime() {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const ist = new Date(now.getTime() + istOffset);
  return ist.toISOString(); // ISO string includes date + time
}

function updateTimeJSON() {
  const istTime = getISTTime();
  const timeData = {
    current_IST_time: istTime,
  };

  fs.writeFileSync(
    path.join(__dirname, "time.json"),
    JSON.stringify(timeData, null, 2)
  );

  console.log(`Time updated: ${istTime}`);
}

updateTimeJSON();
