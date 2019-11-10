function openDropdown(dropdownNum) {
  var x = document.getElementById("dropdown-" + dropdownNum);
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}
