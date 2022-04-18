const fs = require("fs");

const { cleanCsv } = require("../helpers/clean-csv-getresponse")

const cleanData = (req,res) => {

  try {
    const file = String(req.file.buffer);
    const resp = cleanCsv(file)
  
    fs.writeFileSync('assets/usuarios-data.csv', resp , 'utf8', function (err) {
      if (err) {
        return res.status(500).json({
          ok:false,
          msg:"Error en el servidor"
        })
      }
    });
    
    return res.status(200).download("./assets/usuarios-data.csv")
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok:false,
      msg:"Error en el servidor"
    })
  }
}

module.exports = {
  cleanData,
}