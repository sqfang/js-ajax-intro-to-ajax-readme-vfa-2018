function showRespositories(event, data){
  console.log(this.responseText)
}

function getRepositories(){
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRespositories);
  req.open("GET", 'http://api.github.com/users/octocat/repos')
  req.send()
}

