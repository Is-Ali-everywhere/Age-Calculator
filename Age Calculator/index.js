const buttonEl = document.getElementById("btn")
const rsltEL = document.getElementById("result")
const birthdayEl = document.getElementById("birthday")

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if(birthdayValue === ""){
        alert("please Enter your birthday")
    } else {
        const age = getAge(birthdayValue);
        rsltEL.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

function getAge(birthdayValue) {
    const currentAge = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentAge.getFullYear() - birthdayDate.getFullYear();
    const month = currentAge.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentAge.getAge()<birthdayDate.getAge())){
        age--;
    }

    return age;

}
buttonEl.addEventListener("click", calculateAge);