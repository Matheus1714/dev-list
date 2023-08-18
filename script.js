function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const profileImage = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    profileImage.setAttribute("src", "./assets/avatar-light.png")
  } else {
    profileImage.setAttribute("src", "./assets/avatar.png")
  }
}
