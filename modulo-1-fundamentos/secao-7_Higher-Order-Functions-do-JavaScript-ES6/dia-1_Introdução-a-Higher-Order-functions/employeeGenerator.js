const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');
  return { fullName, email: `${email}@trybe.com` };
};
const newEmployees = (nomeSobrenome) => {
  const employees = {
    id1: nomeSobrenome('Pedro Guerra'),
    id2: nomeSobrenome('Luiza Drumond'), 
    id3: nomeSobrenome('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(employeeGenerator));