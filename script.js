const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  const DOB = document.getElementById('DOB').value;
  const currentDate = document.querySelector('#cdate').value;

  if (!DOB || !currentDate) {
    alert('Please enter DOB and Current age');
  }

  const dob = new Date(DOB);
  const currDate = new Date(currentDate);

  let years = currDate.getFullYear() - dob.getFullYear();
  let monthdiff = currDate.getMonth() - dob.getMonth();
  let days = currDate.getDate() - dob.getDate();

  if (days < 0) {
    monthdiff -= 1;
    const prevMonth = new Date(currDate.getFullYear(), currDate.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (monthdiff < 0) {
    years -= 1;
    monthdiff += 12;
  }
  if (
    monthdiff < 0 ||
    (monthdiff === 0 && currDate.getDate() < dob.getDate())
  ) {
    years--;
  }
  document.getElementById(
    'currentage'
  ).textContent = `Your age is ${years} years ${monthdiff} months and ${days} days `;
});
