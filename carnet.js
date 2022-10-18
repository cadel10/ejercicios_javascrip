let estudiantes = [
    {
      names: "",
      lastnames: "",
      age: "",
      carge: "",
      rh: "",
      tel: "",
      cc: "",
    },
  ];

  function register() {
    let documento = document.getElementById("documento").value;
    for (let user of estudiantes) {
      if (documento === cc) {
        return alert("El usuario ya existe");
      }
    }
   estudiantes[user] =[
    {
        names: document.getElementById("nombres").value,
        lastnames: document.getElementById("apellidos").value,
        age:document.getElementById("edad").value,
        carge:document.getElementById("cargo").value,
        rh: document.getElementById("rh").value,
        tel: document.getElementById("telefono").value,
        cc: document.getElementById("documento"),
      }
   ] 
   
   alert(estudiantes[user])
  }


