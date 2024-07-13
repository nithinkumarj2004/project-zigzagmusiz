
let names = [
         "katchi sera",
         "life of pazham",
         "unakku thaan",
         "urugi urugi",
         "thangamey",
         "bae",
         "hukum",
         "idhazhin oram",
         "udhungada sangu",
         "gundellona",
        "undiporaadhey",
        "appudo ipudo",
        "gaali vaaluga",
        "ninnila",
        "pilla ra",
        "uppenantha",
        "night changes",
        "perfect",
        "summertime sadness",
        "love yourself",
        "under my influence",
        "daylight",
        "love me like you do",
        "cheap thrills",
        "spring day",
        "magic shop",
        "butter",
        "dynamite",
        "permission to dance",
        "boy with luv",
        "fire",
        "husn",
        "zara zara",
        "heeriye",
        "tum hi ho",
        "kesariya"
    ];
    let sortedNames = names.sort();
    let input = document.getElementById("input");
    input.addEventListener("keyup",(e) => {
        removeElements(); 
        for(let i of sortedNames){
            
            if(
                i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value !="")
                {
                    let listItem= document.createElement("li");
                    listItem.classList.add("list-items");
                    listItem.style.cursor= "pointer";
                    listItem.setAttribute("onclick","displayNames('" + i + "')");

                    let word = "<b>" + i.substr(0, input.value.lenght) + "</b>";
                    word = i.substring(input.value.lenght);
                    listItem.innerHTML= word;
                    document.querySelector(".list").appendChild(listItem);
                }
        }
    } );
    function displayNames(value){
        input.value = value;
        console.log(input.value);
        removeElements();
    }
    function removeElements(){
        let items = document.querySelectorAll(".list-items");
        items.forEach((item) => {
            item.remove();
        });
    }