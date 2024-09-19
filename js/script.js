document.getElementById("add").addEventListener("click", function () {
    let text = document.getElementById("input-text").value;
    let li = document.createElement("div");

    if (text === "") {
        alert("Please enter a task");
    } else {
        li.innerText = text;

        li.classList.add("list");

        document.getElementById("list-container").appendChild(li);
        document.getElementById("input-text").value = "";
    }
});
