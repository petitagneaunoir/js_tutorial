function dayName(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[date.getDay()];
}

function greeting() {
	console.log(`Hello, world! Happy ${dayName()}.`);
}