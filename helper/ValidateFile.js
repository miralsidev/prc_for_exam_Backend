
const { validateMIMEType } = require("validate-image-type");
const validate = async (req, res, next) => {
  const files = req.files;
  for (const file of files) {
    const path = file.path;
    console.log("path =", path);
    const result = await validateMIMEType(path, {
      allowMimeTypes: ["image/jpeg", "image/gif", "image/png", "image/svg+xml"],
    });
    if (!result.ok) {
      console.error(result.error);
      return res.json({ status: 400,message:'only alowd file jpg,png..!'});
    }
  }
  console.log("This image is supported!");
  next();
};
module.exports = { validate };
