function isLeapYear(year){
  if (year < 4) {
      false
    } else {
      if ((year % 400 == 0) || (year % 100!= 0 && year % 4 == 0)) true
    }    
}
