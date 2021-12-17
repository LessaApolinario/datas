// Retornando o dia e a hora de hoje
const today = new Date()

const day = today.getDate()
const month = today.getMonth() + 1
const year = today.getFullYear()

// console.log(today)

const currentTime = `Hoje é dia ${day}/${month}/${year} às ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
// console.log(currentTime)

// Obtendo os dois últimos dias do ano retornado por getFullYear()
const twoLastDigitsOfTheYear = String(today.getFullYear()).slice(2)
// console.log(twoLastDigitsOfTheYear) // => "21"

// Verificando se um dia da semana existe
const dayOfTheWeekLikeGNOME = today.toDateString().substring(0, 3)

const expandDayOfTheWeekLikeGNOME = day => {
  const daysOfTheWeek = {
    Sun: "Sunday",
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday"
  }

  return daysOfTheWeek[day]
    ? daysOfTheWeek[day]
    : "Não existe um dia da semana correspondente!"
}
// console.log(expandDayOfTheWeekLikeGNOME(dayOfTheWeekLikeGNOME)) // => "Thursday"

// verificando se o mês existe
const expandMonthOfTheYearLikeGNOME = month => {
  const monthsOfTheYearLikeGNOME = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  }

  return monthsOfTheYearLikeGNOME[month]
    ? monthsOfTheYearLikeGNOME[month]
    : "Não existe um mês do ano correspondente"
}
// console.log(expandMonthOfTheYearLikeGNOME(month)) // => December

// Data e hora formato GNOME

// Curta
const dateLikeGNOME = `${today
  .toDateString()
  .substring(0, 10)} ${today.getHours()}:${today.getMinutes()}`
console.log(dateLikeGNOME)

console.log("")
// longa
const extendedMonthOfTheYear = expandMonthOfTheYearLikeGNOME(month)
const extendedDayOfTheWeek = expandDayOfTheWeekLikeGNOME(dayOfTheWeekLikeGNOME)
const extendDateLikeGNOME = `${extendedDayOfTheWeek}\n${extendedMonthOfTheYear} ${day} ${year}`
console.log(extendDateLikeGNOME)
