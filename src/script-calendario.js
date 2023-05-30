const calendar = document.querySelector(".calendar"),
  date = document.querySelector(".date"),
  daysContainer = document.querySelector(".days"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  todayButton = document.querySelector(".today-button"),
  gotoButton = document.querySelector(".goto-button"),
  appointmentDay = document.querySelector(".appointment-day"),
  appointmentDate = document.querySelector(".appointment-date"),
  appointmentsContainer = document.querySelector(".appointments"),
  addAppointmentButton = document.querySelector(".add-appointment"),
  addAppointmentWrapper = document.querySelector(".add-appointment-wrapper "),
  addAppointmentCloseButton = document.querySelector(".add-appointment-wrapper .close "),
  addAppointmentTitle = document.querySelector(".appointment-name "),
  addAppointmentTime = document.querySelector(".appointment-time "),
  addAppointmentSubmit = document.querySelector(".add-appointment-button "),
  addMedButton = document.querySelector(".add-med"),
  addMedWrapper = document.querySelector(".add-med-wrapper"),
  addMedCloseButton = document.querySelector(".add-med-wrapper .close ");

let todayDate = new Date();
let dayActive;
let month = todayDate.getMonth();
let year = todayDate.getFullYear();

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const appointmentsArray = [];

// initialize the calendar, previous days and next days
function initCalendar() {
  const dayOne = new Date(year, month, 1);
  const dayLast = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = dayLast.getDate();
  const day = dayOne.getDay();
  const nextDays = 7 - dayLast.getDay() - 1;

  date.innerHTML = months[month] + " " + year;

  let days = "";

  for (let i = day; i > 0; i--) {
    days += `<div class="day prev-date">${prevDays - i + 1}</div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    // see if there is an appointment on that day
    let appointment = false;
    appointmentsArray.forEach((appointmentDay) => {
      if (appointmentDay.day === i && appointmentDay.year === year && appointmentDay.month === month + 1 ) {
        appointment = true;
      }
    });
    if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
      dayActive = i;
      updateAppointments(i);
      if (appointment) {
        days += `<div class="day today active appointment">${i}</div>`;
      } else {
        days += `<div class="day today active">${i}</div>`;
      }
    } else {
      if (appointment) {
        days += `<div class="day appointment">${i}</div>`;
      } else {
        days += `<div class="day ">${i}</div>`;
      }
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next-date">${j}</div>`;
  }
  daysContainer.innerHTML = days;
  addListner();
}

function prevMonth() {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  initCalendar();
}

function nextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  initCalendar();
}

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

initCalendar();

// add "active" on the day
function addListner() {
  const days = document.querySelectorAll(".day");
  days.forEach((day) => {
    day.addEventListener("click", (e) => {
      if (!e.target.classList.contains("prev-date") && !e.target.classList.contains("next-date")) {
      updateAppointments(Number(e.target.innerHTML));
      dayActive = Number(e.target.innerHTML);
      // remove "active" from the other days
      days.forEach((day) => {
        day.classList.remove("active");
      });
      e.target.classList.add("active");
    }}
    );
  });
}

todayButton.addEventListener("click", () => {
  todayDate = new Date();
  month = todayDate.getMonth();
  year = todayDate.getFullYear();
  initCalendar();
});

// update the appointments if the day is active
function updateAppointments(date) {
  let appointments = "";
  appointmentsArray.forEach((appointment) => {
    if (date === appointment.day && month + 1 === appointment.month && year === appointment.year) {
      appointment.appointments.forEach((appointment) => {
        appointments += `<div class="appointment">
            <div class="title">
              <h3 class="appointment-title">${appointment.title}</h3>
            </div>
            <div class="appointment-time">
              <span class="appointment-time">${appointment.time}</span>
            </div>
        </div>`;
      });
    }
  });
  if (appointments === "") {
    appointments = `<div class="no-appointment">
            <h3>Você ainda não registrou nada hoje.</h3>
        </div>`;
  }
  appointmentsContainer.innerHTML = appointments;
}

// activate the add appointment screen
addAppointmentButton.addEventListener("click", () => {
  addAppointmentWrapper.classList.toggle("active");
});

addAppointmentCloseButton.addEventListener("click", () => {
  addAppointmentWrapper.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target !== addAppointmentButton && !addAppointmentWrapper.contains(e.target)) {
    addAppointmentWrapper.classList.remove("active");
  }
});

// activate the add med screen
addMedButton.addEventListener("click", () => {
  addMedWrapper.classList.toggle("active");
});

addMedCloseButton.addEventListener("click", () => {
  addMedWrapper.classList.remove("active");
});

// allow only time in the appointment time
addAppointmentTime.addEventListener("input", (e) => {
  addAppointmentTime.value = addAppointmentTime.value.replace(/[^0-9:]/g, "");
  if (addAppointmentTime.value.length === 2) {
    addAppointmentTime.value += ":";
  }
  if (addAppointmentTime.value.length > 5) {
    addAppointmentTime.value = addAppointmentTime.value.slice(0, 5);
  }
});

// add the appointment to the appointments array
addAppointmentSubmit.addEventListener("click", () => {
  const appointmentTitle = addAppointmentTitle.value;
  const appointmentTime = addAppointmentTime.value;
  const time = convertTime(appointmentTime);

  const newAppointment = {
    title: appointmentTitle,
    time: time,
  };
  let appointmentAdded = false;
  if (appointmentsArray.length > 0) {
    appointmentsArray.forEach((appointment) => {
      if (appointment.day === dayActive && appointment.month === month + 1 && appointment.year === year) {
        appointment.appointments.push(newAppointment);
        appointmentAdded = true;
      }
    });
  }

  if (!appointmentAdded) {
    appointmentsArray.push({
      day: dayActive,
      month: month + 1,
      year: year,
      appointments: [newAppointment],
    });
  }

  addAppointmentWrapper.classList.remove("active");
  addAppointmentTitle.value = "";
  addAppointmentTime.value = "";
  updateAppointments(dayActive);
  // add appointment class to active day
  const dayActiveElement = document.querySelector(".day.active");
  if (!dayActiveElement.classList.contains("appointment")) {
    dayActiveElement.classList.add("appointment");
  }
});

// delete the appointment when it is clicked on
appointmentsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("appointment")) {
    const appointmentTitle = e.target.children[0].children[0].innerHTML;
    appointmentsArray.forEach((appointment) => {
      if (appointment.day === dayActive && appointment.month === month + 1 && appointment.year === year) {
        appointment.appointments.forEach((item, index) => {
          if (item.title === appointmentTitle) {
            appointment.appointments.splice(index, 1);
          }
        });
        // remove the day from the appointments array
        if (appointment.appointments.length === 0) {
          appointmentsArray.splice(appointmentsArray.indexOf(appointment), 1);
          // remove the appointment class from the day
          const dayActiveElement = document.querySelector(".day.active");
          if (dayActiveElement.classList.contains("appointment")) {
            dayActiveElement.classList.remove("appointment");
          }
        }
      }
    });
    updateAppointments(dayActive);
  }
});

function convertTime(time) {
  let timeArr = time.split(":");
  let timeHour = timeArr[0];
  let timeMin = timeArr[1];
  let timeFormat = timeHour >= 12 ? "PM" : "AM";
  timeHour = timeHour % 12 || 12;
  time = timeHour + ":" + timeMin + " " + timeFormat;
  return time;
}