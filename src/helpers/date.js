const shortMonth = [
  {name: 'January', short: 'Jan'},
  {name: 'February', short: 'Feb'},
  {name: 'Mars', short: 'Mar'},
  {name: 'April', short: 'Apr'},
  {name: 'Mai', short: 'Mai'},
  {name: 'June', short: 'Jun'},
  {name: 'July', short: 'Jul'},
  {name: 'August', short: 'Aug'},
  {name: 'September', short: 'Sep'},
  {name: 'October', short: 'Oct'},
  {name: 'November', short: 'Nov'},
  {name: 'December', short: 'Dec'}
];

// return Okt 26 2019

function monthDayYeahShort(d) {
  if(d === null){
    return ''
  }
  let date = new Date(d);
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  return `${shortMonth[month].short} ${day} ${year}`;
}

export { monthDayYeahShort };