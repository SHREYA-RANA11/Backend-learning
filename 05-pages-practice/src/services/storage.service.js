const ImageKit = require("@imagekit/nodejs").default;

const imagekit = new ImageKit({
  publicKey: "process.env.IMAGEKIT_PUBLIC_KEY",
  privateKey: "process.env.IMAGEKIT_PRIVATE_KEY",
  urlEndpoint: "process.env.IMAGEKIT_URL_ENDPOINT",
});

async function uploadFile(buffer, fileName) {
  console.log("DEBUG:", imagekit); // 🔥 check this

  const result = await imagekit.upload({
    file: buffer,
    fileName: fileName,
  });

  return result;
}

module.exports = uploadFile;


// const ImageKit = require("@imagekit/nodejs");


// const imagekit = new ImageKit({
//   publicKey: "public_THgx39bSls/oGEbEg2UVJooEe3Q=",
//   privateKey: "private_WeqwFKR6z0nV4vY0BlU1PDHrm6s=",
//   urlEndpoint: "https://ik.imagekit.io/d4sym6tns"
// });
// async function uploadFile(buffer) {
//   console.log(buffer);

//   const result = await imagekit.upload({
//     file: buffer.toString("base64"),
//     fileName: "image.jpg",
//   });
//   res.send({
//     message: "Upload successful",
//     url: result.url,
//   });

//   return result;
// }

// module.exports = uploadFile;
