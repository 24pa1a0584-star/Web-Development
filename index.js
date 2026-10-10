var users=[
    {
        "name" :"Dohith Gudimetla",
        "gender":"Male",
        "image" : "image.png"
    },
    {
        "name" :"Jane Gudimetla",
        "gender":"Female",
        "image" : "jane.png"
    }
    
];
let index=0;
function toggle()
{
    if(index==0)
    {
        index=1;
    }
    else{
        index=0;
    }
    document.getElementById("user-name").innerText = users[index].name;
    document.getElementById("gender").innerText=users[index].gender;
    document.getElementById("images").src=users[index].image;
}