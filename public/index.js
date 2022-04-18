
const file = document.querySelector("#file");

const fileBox = document.querySelector(".file_box")

fileBox.addEventListener("click",(event)=>{
  event.preventDefault();
  file.click();
  return;
})


const buttonSend = document.querySelector("#send")

buttonSend.addEventListener("click", async(event)=>{
  if(!file.files[0]){
    alert("Por favor suba un archivo primero")
    return;
  }
  let data = new FormData();
  data.append("file",file.files[0])
  console.log({data});
  const res = await fetch("http://localhost:8080/clean-data",{
    method:"POST",
    body:data,

  });
  window.open('/assets/usuarios-data.csv');

})

