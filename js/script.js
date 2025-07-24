// API Link: https://apis.scrimba.com/bored/api/activity

document.querySelector("#activity-btn").addEventListener("click", async () => {
  const data = await fetchBoredBotData();
  console.log(data)
  if (data) {
    document.querySelector("#activity-h2").innerText = data.activity;
    document.querySelector("#activity-cost").innerText = `Cost: $${data.price}`;
    document.querySelector("#activity-participants").innerText = `Participants: ${data.participants}`;
  } else {
    document.querySelector(
      "#acitvity-h2"
    ).innerText = `Response failed. Please try again.`;
  }
});

async function fetchBoredBotData() {
  try {
    const res = await fetch("https://apis.scrimba.com/bored/api/activity");
    if (!res.ok) {
      throw Error(`Response Failed: ${res.statusText}`);
    }
    const data = res.json();
    return data;
  } catch (err) {
    console.error("Error");
  }
}
