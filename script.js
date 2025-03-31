document.getElementById("btn").addEventListener("click", async function () {
    const text = document.getElementById("text").value;
    const delay = document.getElementById("delay").value;
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    if (text.trim() === "" || isNaN(delay) || delay === "") {
        outputDiv.innerHTML = "Please enter valid text and delay.";
        return;
    }

    const delayMs = parseInt(delay);

    await new Promise((resolve) => setTimeout(resolve, delayMs));
    outputDiv.innerHTML = text;
});
