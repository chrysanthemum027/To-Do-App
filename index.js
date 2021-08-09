let add = document.querySelector("#add");
let list = document.querySelector("#list");

add.onclick = (e) => {
  e.preventDefault();

  let listItem = document.querySelector("#listItem");

  if (listItem.value !== ''){

    let el = document.createElement("li");
    el.innerHTML = listItem.value;

    let removeButton = document.createElement("button");
    removeButton.className = "close";
    removeButton.innerHTML = "\u00D7";
    el.appendChild(removeButton);
    list.appendChild(el);
    listItem.value = "";

    el.addEventListener("click", (e) => {
      e.target.style.textDecoration = "line-through";
    });

    removeButton.addEventListener("click", (e) => {
      e.target.parentElement.style.display = "none";
    });
  }
  else {
    alert("No input! Write something!");
  }
}
