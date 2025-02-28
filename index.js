

document.addEventListener("DOMContentLoaded", function () {
  const adviceList = [
    "Never cut your own fringe.",
    "Take time to enjoy the little things.",
    "Opportunities don't happen, you create them."
  ];

  // Select a random piece of advice
  const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];

  // Update the paragraph with the new advice
  document.getElementById("p2").textContent = `"${randomAdvice}"`;
});

