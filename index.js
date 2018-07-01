function getRepositories(){
  const req = new XMLHttpRequest()
  req.open("GET", 'http://api.github.com/users/octocat/repos')
  req.send()
}

function showRespositories(event, data){
  console.log(this.responseText)
}