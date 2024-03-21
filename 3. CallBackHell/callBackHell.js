const url = 'https://www.facebook.com/user/profile.jpg';

function downloadFile(path, downloaded) {
    console.log(`Downloading started from ${path}`);
    setTimeout(()=>{
        // console.log('File downloaded succesfully');
        downloaded(path.split('/').pop());
    },3000);
}

function compressFile(fileName, compressed){
    console.log(`Compression started ${fileName}`);
    setTimeout(()=>{
        compressed(fileName.replace('jpg','zip'));
    },2000)
}

function uploadFile (compressFileName, uploaded) {
    console.log(`Uploading started ${compressFileName}`);
    setTimeout(()=>{
        uploaded('http://facebook.cloud/'+compressFileName);
    },3000)
}

downloadFile(url, function (fileName) {
    console.log(`download successfull ${fileName}`);

    compressFile(fileName, function (compressFileName){
        console.log(`compressed succesfully ${compressFileName}`);

        uploadFile(compressFileName, function (uploadedFileName){
            console.log(`uploaded successfully at path ${uploadedFileName}`);
        })
    });
})





// lec-14 1:53:37-- continued in morning




// 2:13:35 14th may , promise is coming ahead
// 1:21:06 30Th may