function download(url, callback) {
    console.log(`Downloading ${url}....`);

    setTimeout(() => {
    // console.log(`Downloading ${url}....`);
    console.log('Downoad completed');
    callback(url);
  }, 2000);
}

function process(picture) {
  console.log(`Processing ${picture}......`);
}

let url = "https://www.javascripttutorial.net/pic/jpg";

download(url, process);
// process(url);
