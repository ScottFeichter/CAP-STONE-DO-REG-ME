fetch("/api/test",
  {"method": "POST",
    "headers": {
      "Content-Type":"application/json",
      "XSRF-Token": "dQAs1dk0-zr-1zv9dmZxb4Lwk2pgmCuNucKg"
    }, "body": JSON.stringify({"credential": "Demo-lition", "password": "password"})
  }).then(res => res.json()).then(data => console.log(data));


  fetch("/api/test",
    {method: "POST",
      "headers": {
        "Content-Type":"application/json",
        "XSRF-Token": "dQAs1dk0-zr-1zv9dmZxb4Lwk2pgmCuNucKg"
      }, "body": JSON.stringify({"credential": "Demo-lition", "password": "password"})
    }).then(res => res.json()).then(data => console.log(data));
