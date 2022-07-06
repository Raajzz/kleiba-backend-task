const searchToysByName = (req, res, next) => {
  res.status(200).json({
    success:true,
    message:"search toys"
  })
}

const getToyById = (req, res, next) => {
  res.status(200).json({
    success:true,
    message:"get toy"
  })
}

const addToy = (req, res, next) => {
  res.status(200).json({
    success:true,
    message:"add toy"
  })
}

const editToy = (req, res, next) => {
  res.status(200).json({
    success:true,
    message:"edit toy"
  })
}

const deleteToy = (req, res, next) => {
  res.status(200).json({
    success:true,
    message:"delete toy"
  })
}

module.exports = {
  searchToysByName,
  getToyById,
  addToy,
  editToy,
  deleteToy
}