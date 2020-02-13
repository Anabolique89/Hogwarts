const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
  modal.classList.add("hide");
});

fetch("students1991.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    data.forEach(showStudents);
  });

function showStudents(students) {
  console.log(students);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".FULLNAME").textContent = students.fullname;
  copy.querySelector(".HOUSE").textContent = students.house;

  copy.querySelector("button").addEventListener("click", showStudents => {
    /* fetch("students1991.json")
      .then(res => res.json())
      .then(showDetails);*/
    showDetails(students);
  });

  function showDetails(students) {
    console.log(students);

    modal.querySelector(".modal-name").textContent = students.fullname;
    modal.querySelector(".modal-description").textContent = students.house;

    modal.dataset.theme = students.house;
    modal.classList.remove("hide");

    //document.querySelector(#theme).addEventListener("change", changeTheme);
    // document.querySelector("tbody#student").append(copy);

    //document.querySelector(#theme).addEventListener("change", changeTheme);
  }

  document.querySelector(".wrapper").appendChild(copy);
}

// const modal = document.querySelector(".modal-content");
const btn = document.querySelectorAll("button");
const btnsArr = Array.from(btn);

btnsArr.forEach(function(e, index) {
  e.onclick = function() {
    modal_name.innerHTML = students[index].fullname;
    modal_house.innerHTML = students[index].house;
    document.querySelector(".modal_content").dataset.theme =
      students[index].house;
    modal.style.display = "block";
  };
});
