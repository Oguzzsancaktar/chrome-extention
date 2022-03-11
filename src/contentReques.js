const requestSender = new XMLHttpRequest();

console.log(1234567);
requestSender.onreadystatechange = apiHandler;

function apiHandler(response) {
  console.log(response)
  if (requestSender.readyState === 4 && requestSender.status === 200) {
    // const response = JSON.parse(requestSender.responseText);
    console.log(response);
  }
}


requestSender.open('GET', 'https://api.github.com/users/peter', true);
requestSender.send();