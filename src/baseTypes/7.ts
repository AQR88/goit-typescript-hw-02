/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
 enum daysOfTheWeek
 {sunday = 'Sunday',
 monday = 'Monday',
 tuesday = 'Tuesday',
 wednesday = 'Wednesday',
 thursday = 'Thursday',
 friday = 'Friday',
 saturday = 'Saturday',
}
function isWeekend (day: daysOfTheWeek):boolean {
if(day === daysOfTheWeek.sunday || day === daysOfTheWeek.saturday) return true;
return false;
}