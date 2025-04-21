// 1 task
// function abbreviate(word) {
//     if (word.length <= 2) return word; 
  
//     const first = word[0];
//     const last = word[word.length - 1];
//     const middleCount = word.length - 2;
  
//     return `${first}${middleCount}${last}`;
//   }
  
//   console.log(abbreviate("Every"));     
//   console.log(abbreviate("Nodejs"));    
//   console.log(abbreviate("Toshkent"));  
  
// 2 task
// const students = new Set([
//     { name: "Alice", scores: [90, 85, 92] },
//     { name: "Bob", scores: [75, 80, 85] },
//     { name: "Charlie", scores: [90, 95, 85] },
//     { name: "Jack", scores: [100, 100, 100] }
//   ]);
//   const averages = Array.from(students).map(student => {
//     const avg = student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
//     return { name: student.name, average: avg };
//   });
  
//   const maxAverage = Math.max(...averages.map(s => s.average));
  
//   const topStudents = averages.filter(s => s.average === maxAverage);
  
//   console.log(topStudents);
  
// 3 task 
// const employees = new Set([
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
//   ]);
  
//   function calculateAverageSalary(department) {
//     const departmentEmployees = [...employees].filter(employee => employee.department === department);
//     if (departmentEmployees.length === 0) return 0;
//     const totalSalary = departmentEmployees.reduce((sum, employee) => sum + employee.salary, 0);
//     return totalSalary / departmentEmployees.length;
//   }
  
//   function getHighestAverageSalaryDepartment() {
//     if (employees.size === 0) {
//       return "Error: Employee set is empty";
//     }
  
//     const departments = [...employees].reduce((acc, employee) => {
//       if (!acc[employee.department]) {
//         acc[employee.department] = [];
//       }
//       acc[employee.department].push(employee.salary);
//       return acc; 
//     }, {});
  
//     let highestAverage = 0;
//     let highestDepartment = '';
  
//     for (let department in departments) {
//       const averageSalary = calculateAverageSalary(department);
//       if (averageSalary > highestAverage) {
//         highestAverage = averageSalary;
//         highestDepartment = department;
//       }
//     }
  
//     return [{ department: highestDepartment, average: highestAverage }];
//   }
  
//   console.log(getHighestAverageSalaryDepartment());
  
// 4 task 

let countries = new Set([
    { Russian: 9 },
    { English: 91 },
    { French: 45 },
    { Spanish: 24 },
    { Portuguese: 9 },
    { Dutch: 8 },
    { German: 7 },
    { Arabic: 25 },
    { Chinese: 5 },
    { Swahili: 4 },
    { Serbian: 4 }
  ]);
  
  function mostSpokenLanguages(countries, topN) {
    const countryArray = [...countries];
    
    const sortedCountries = countryArray.sort((a, b) => {
      const aLanguage = Object.values(a)[0];
      const bLanguage = Object.values(b)[0];
      return bLanguage - aLanguage;
    });
  
    return sortedCountries.slice(0, topN);
  }
  
  console.log(mostSpokenLanguages(countries, 3));
  