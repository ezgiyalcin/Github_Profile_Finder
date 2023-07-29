import GitHub from "./api.js";
import UI from "./ui.js"

const github = new GitHub()
const ui = new UI()

const searchInput = document.getElementById("search-input")
const searchButton = document.getElementById("search-btn")
const themeBtn = document.getElementById("theme-btn")
const body = document.querySelector("body")

searchButton.addEventListener('click', getInput)
searchInput.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
        getInput()
    }
})

themeBtn.addEventListener("click",changeTheme)

function getInput() {
    if (searchInput.value !== "") {
        github.getUser(searchInput.value).then((data) => {

            if(data.profile.message === "Not Found"){
                ui.showAlert('The user you are looking for was not found.', "alert-danger")
            }else{
                ui.showAlert('Congratulations! You found the user you were looking for.' , 'alert-success')
            ui.showProfile(data.profile)

            ui.showRepos(data.repos)
        }
        })
        return
    }

    ui.showAlert('You have to fill the input.', 'alert-info');
    

}

function changeTheme(){
  
   body.classList.toggle("bg-dark")
   body.classList.toggle("text-bg-dark")
   if(body.classList.contains('bg-dark')){
    themeBtn.innerHTML = "Light Mode"
   }else{
    themeBtn.innerHTML= "Dark Mode"
   }
}