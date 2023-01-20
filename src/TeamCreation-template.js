const teamTemplate = (team) => {
  // Creates a card to display every manager that gets inputted into the questions
  const createManager = (manager) => {
    return `<div class="">
        <div class="">
            <h2 class="">${manager.getName()}</h2>
            <h3 class=""><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="">
            <ul class="">
                <li class="">Employee ID: ${manager.getId()}</li>
                <li class="">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="">Office number: ${manager.getOfficeNum()}</li>
            </ul>
        </div>
    </div>
            `;
  };

  // Creates a card to display every Engineer
  const createEngineer = (engineer) => {
    return `
    <div class="">
        <div class="">
            <h2 class="">${engineer.getName()}</h2>
            <h3 class=""><i class=""></i>${engineer.getRole()}</h3>
        </div>
        <div class="">
            <ul class="">
                <li class="">Employee ID: ${engineer.getId()}</li>
                <li class="">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="">GitHub User: <a href="https://github.com/${engineer.getGithubId()}" target="_blank" rel="Github-link">${engineer.getGithubId()}</a></li>
            </ul>
        </div>
    </div>
            `;
  };

  // Creates a div for each Intern entered
  const createIntern = (intern) => {
    return `
    <div class="">
        <div class="">
            <h2 class="">${intern.getName()}</h2>
            <h3 class=""><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="">
            <ul class="">
                <li class="">Employee ID: ${intern.getId()}</li>
                <li class="">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
            `;
  };

  const html = [];

  // Concatenates all divs (above) for all members of the team, placing the manager(s) first, followed by engineers and the interns
  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createIntern(intern))
      .join("")
  );

  return html.join("");
};

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
<body>
    <div class="">
        <div class="">
            <div class="">
                <h1 class="">Team ${fileName}</h1>
            </div>
        </div>
    </div>
    <div class="">
        <div class="">
            <div class="">
                ${teamTemplate(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};
