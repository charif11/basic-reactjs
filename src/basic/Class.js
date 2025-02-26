class SimpleDate {
  constructor(year, month, date) {
    this.year = year;
    this.month = month;
    this.date = date;
  }
  getShortDate() {
    console.log(`${this.date}/${this.month}/${this.year + 543}`);
  }
}

class ThaiDate extends SimpleDate {
  constructor(year,month,date,hour, minute) {
    super(year, month, date);
    this.hour = hour;
    this.minute = minute;
  }
  getLongDate() {
    console.log(
      `${this.date}-${this.month}-${this.year}=${this.hour}:${this.minute}`
    );
  }
}

const date = new SimpleDate(2003, "july", 18);
date.getShortDate()

console.log('----------------------------------------');

const longdate = new ThaiDate(2003,"August",16,12,50)
longdate.getLongDate()
longdate.getShortDate()
