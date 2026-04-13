const correctPassword = "88fc";

function checkPassword() {
  const input = document.getElementById("password").value;

  if (input === correctPassword) {
    document.getElementById("authBox").style.display = "none";

    const welcome = document.getElementById("welcome");
    welcome.classList.remove("hidden");

    setTimeout(() => {
      welcome.classList.add("hidden");

      const loading = document.getElementById("loading");
      loading.classList.remove("hidden");

      setTimeout(() => {
        loading.classList.add("hidden");
        document.getElementById("discordBox").classList.remove("hidden");
      }, 2000);

    }, 3000);

  } else {
    alert("접속 거부");
  }
}

/* 디스코드 버튼 */
document.getElementById("discordBtn").onclick = function () {
  document.getElementById("bgm").play();
  window.open("https://discord.gg/9x4TUVS3WC", "_blank");
};

/* 🔥 불꽃 파티클 */
particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    color: { value: ["#ff0000", "#ff6600", "#ffaa00"] },
    shape: { type: "circle" },
    opacity: {
      value: 0.6,
      random: true
    },
    size: {
      value: 4,
      random: true
    },
    move: {
      enable: true,
      speed: 2,
      direction: "top",
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});
