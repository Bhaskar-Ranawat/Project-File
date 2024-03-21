function download (url, success, failure) {
    setTimeout(()=>{
        console.log(`Downloading the picture from${url}...`);
        // !url ? failure(url) : success(url);
    },2000);
}

download ( 
    '', 
    (url)=> console.log(`Processing the picture ${url}`, 
    (url)=> console.log(`The ${url} is not valid`))
);
let url = 'https://www.javascripttutorial.net/pic.jpg';


// some issues in this code, need to debug