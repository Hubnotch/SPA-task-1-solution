// function main() { }
// module.exports = { main }

let theName = document.querySelector(".name");
// document.addEventListener("click", (e) => {
//     console.log(e)
// })




let nameOfStar = document.querySelector("#name")

let namListener = nameOfStar.querySelector(".name")

function dropdown() {
    namListener.addEventListener("click", (e) => {
        console.log(e.target)

    })
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    console.log('first')
}
//function to handle name of stars
const loadDataToPage = (data) => {
    const { results } = data
    // console.log(results)
    let pageTemplate = results.map(actor => {

        const { name, height, gender } = actor
        //console.log(name)
        return `
            <div id="card-body">
                <img class="card-image" src="/star-wars-icon.jpg" alt="profile image" width="400px">
                <div class="dropdown name">     
                <a class="btn dropdown-toggle" href="#" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    ${name}
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Name: ${name}</a></li>
                  <li><a class="dropdown-item" href="#">Height: ${height}</a></li>
                  <li><a class="dropdown-item" href="#">Gender: ${gender}</a></li>
                </ul>
                </div>
            </div>
                `
    }).join("")

    // <div onclick="dropdown(e)" class="name"><h3>${name}</h3></div>
    return nameOfStar.innerHTML = pageTemplate
}


const api_url = "https://swapi.dev/api/people"

const fetchStarWarsStars = async (url) => {
    const data = await fetch(url)
    const response = await data.json()

    // console.log(response)

    return response;
}

// window.onload(fetchStarWarsStars(api_url)
//     .then(response => loadDataToPage(response))
// )

fetchStarWarsStars(api_url)
    .then(response => loadDataToPage(response))



/* 

*/





