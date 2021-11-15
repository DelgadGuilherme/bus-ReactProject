handleSubmit = async (event) => {
    event.preventDefault()

    const json = {
        "id" : 2,
        "localizacao" : "Localizacao do ponto de id 3"
      }

      const formdata = new FormData(event.target)

        // convert FormData to json object
        // SOURCE: https://stackoverflow.com/a/46774073
        const json = {}
        formdata.forEach(function(value, prop){
            json[prop] = value
        })
  
    const formBody = Object.keys(json).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(json[key])).join('&')
  
    const response = await fetch("http://localhost:8080/ponto", {
      method: "POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: formBody,
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }


  const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id));