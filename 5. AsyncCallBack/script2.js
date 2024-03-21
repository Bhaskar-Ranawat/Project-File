function download (url, callback) {
    setTimeout(()=>{
        console.log(`Downloading ${url}......`);
        callback(url);
    },2000);
}

let url = 'https://www.javascripttutorial.net/pic.jpg';

download(url, function (picture){
    console.log(`Processing ${picture}`);
})