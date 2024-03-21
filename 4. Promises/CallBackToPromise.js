const url = "https://facebook.com/user/profile.jpg";

function downloadFile(path) {
  return new Promise((resolve, reject) => {
    console.log("Download started", path);
    setTimeout(() => {
      console.log('File downloaded successfully', path.split('/').pop());
      resolve(path.split("/").pop());
    }, 3000);
  });
}

function compressFile(fileName) {
  return new Promise((resolve, reject) => {
    console.log(`Compressing started`);
    setTimeout(() => {
      console.log('File successfully compressed', fileName.replace('jpg','zip'));
      resolve(fileName.replace("jpg", "zip"));
      //   console.log(fileName.replace("jpg","zip")); - just to check
    }, 2000);
  });
}

function uploadFile (compressFileName, uploaded) {
  return new Promise((resolve, reject)=>{
    console.log(`Uploading started ${compressFileName}`);
  setTimeout(()=>{
    console.log('File uploaded successfully', compressFileName)
      resolve('http://facebook.cloud/'+compressFileName);
  },3000)
  })
}

/*
downloadFile(url)
  .then((fileName) => {
    console.log(`File -${fileName}- downloaded successfully`);
    compressFile(fileName)
    .then((fileName)=>{
        console.log(`File -${fileName}- compressed successfully`);
    }).catch(()=>{
        console.log('File cannot be compressed');
    });
  })
  .catch(() => {
    console.log('File cannot be downloaded');
  });
*/

// 1:21:06 30Th may
// 2:44:52- lec_14

downloadFile(url)
  .then(compressFile)
  .then(uploadFile)
  .catch(()=>{
    console.log('Failure of tasks!');
  });


  // lec-14 completed
  // callback, callback hell and promises are completed here