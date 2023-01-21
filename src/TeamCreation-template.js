const html = [];

const createYourTeam = (team) => {
  // Creates a card to display every manager that gets inputted into the questions
  const renderManager = (manager) => {
    return `<div class="bg-blue-400 block m-6 p-6 rounded col-span-1 sm:col-span-2 lg:col-span-3 text-center shadow-xl border-4 hover:border-double hover:border-8 border-indigo-600">
        <div class="bg-sky-300 rounded">
            <h2 class="font-bold text-4xl">${manager.getName()}</h2>
            <h3 class="font-bold text-2xl">${manager.getRole()}</h3>
        </div>
        <div>
            <ul>
                <li class="text-xl">Employee ID: ${manager.getId()}</li>
                <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li>Office number: ${manager.getOfficeNum()}</li>
            </ul>
        </div>
    </div>
            `;
  };

  // Creates a card to display every Engineer
  const renderEngineer = (engineer) => {
    return `
    <div class="bg-emerald-400 block m-6 p-6 rounded border-4 hover:border-double hover:border-8 border-indigo-600">
        <div class="bg-emerald-200 rounded">
            <h2 class="font-bold text-4xl">${engineer.getName()}</h2>
            <h3 class="font-bold text-2xl">${engineer.getRole()}</h3>
        </div>
        <div>
            <ul>
                <li class="text-xl">Employee ID: ${engineer.getId()}</li>
                <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li>GitHub User: <a href="https://github.com/${engineer.getGithubId()}" target="_blank" rel="Github-link">${engineer.getGithubId()}</a></li>
            </ul>
        </div>
    </div>
            `;
  };


  // Creates a div for each Intern entered
  const renderIntern = (intern) => {
    return `
    <div class="bg-indigo-400 block m-6 p-6 rounded border-4 hover:border-double hover:border-8 border-indigo-600"">
        <div class="bg-indigo-200 rounded">
            <h2 class="font-bold text-4xl">${intern.getName()}</h2>
            <h3 class="font-bold text-2xl">${intern.getRole()}</h3>
        </div>
        <div>
            <ul>
                <li class="text-xl">Employee ID: ${intern.getId()}</li>
                <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li>School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
            `;
  };


// pushes the interns the html into the array to create the html file.
html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))
);
html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
    .join("")
);
html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
    .join("")
);

return html.join("");    
}

// export function to generate entire page
module.exports = (team) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>${fileName}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-sky-100">
    <div class="bg-teal-600 h-48">
            <h1 class="grid h-48 font-bold text-4xl md:text-6xl content-center text-center border-4 hover:border-double hover:border-8 border-indigo-600">Team ${fileName}</h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-evenly">
                ${createYourTeam(team)}
    </div>
</body>
</html>
    `;
};
