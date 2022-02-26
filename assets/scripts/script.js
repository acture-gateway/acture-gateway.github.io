const words = ["enhances", "upscales", "cleans", "boosts", "supplements"];
let i = 0;

const _changeText = () => {
  i = (i + 1) % words.length;
  document.getElementById("spin").innerHTML = `${words[i]}&nbsp;`;
};

setInterval("_changeText()", 800);
