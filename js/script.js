let initial = 0;

document.getElementById("add").addEventListener("click", function () {
    let text = document.getElementById("input-text").value;
    let div = document.createElement("div");

    if (text === "") {
        alert("Please enter a task");
    } else {
        div.innerHTML = `
        <p class="text-xl font-extrabold">${text}</p>
        `;
        div.classList.add("p-3", "rounded-lg", "my-3");

        if (initial == 0) {
            div.classList.add("bg-success");
            initial++;
        } else if (initial == 1) {
            div.classList.add("bg-error");
            initial++;
        } else if (initial == 2) {
            div.classList.add("bg-warning");
            initial++;
        } else if (initial == 3) {
            div.classList.add("bg-info");
            initial++;
        } else if (initial == 4) {
            div.classList.add("bg-secondary");
            initial++;
        } else if (initial == 5) {
            div.classList.add("bg-accent");
            initial = 0;
        }

        document.getElementById("list-container").appendChild(div);
        document.getElementById("input-text").value = "";
    }
});
