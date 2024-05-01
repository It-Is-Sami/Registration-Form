const users = []
function handleForm(x) {
    x.preventDefault()
    const user = {
        FName: "",
        LName: "",
        Email: "",
        City: "",
        Country: "",
        Gender: ""
    }
    // if (FName.value.length < 3 | LName.value.length < 3) {
    //     errorMsgUser.innerText = 'please enter a valid username'
    // } else {
    //     user.FName = FName.value
    //     errorMsgUser.innerText = ''
    // }
    user.FName = FName.value;
    user.LName = LName.value;
    user.Email = Email.value;
    user.City = City.value;
    user.Country = Country.value;
    user.Gender = Gender.value;
    console.log(user)
    users.push(user);
    // if()
    let result_parent = document.getElementById('result_parent')
    result_parent.innerHTML = ``
    for (let i = 0; i < users.length; i++) {
        result_parent.innerHTML += `
    <div class="card">
    <div class="data">
    <b>FirstName: </b>
    <p>${users[i].FName}</p>
</div>
<div class="data">
    <b>LastName: </b>
    <p>${users[i].LName}</p>
</div>
<div class="data">
    <b>Email: </b>
    <p>${users[i].Email}</p>
</div>
<div class="data">
    <b>City: </b>
    <p>${users[i].City}</p>
</div>
<div class="data">
    <b>Country: </b>
    <p>${users[i].Country}</p>
</div>
<div class="data">
    <b>Gender: </b>
    <p>${users[i].Gender}</p>
</div>
    </div>
    `
    }
    FName.value = "";
    LName.value = "";
    Email.value = "";
    City.value = "";
    Country.value = "";
    Gender.value = "";
    console.log(user, "users")
    console.log(users)
}