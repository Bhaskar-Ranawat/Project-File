let kalMilunga = false;

function kalMilungaYaNhi() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (kalMilunga) resolve();
      else reject();
    }, 3000);
  });
}

kalMilungaYaNhi()
  .then(() => {
    console.log("Hum mil gaye!");
  })
  .then(() => {
    console.log("Panipuri khate h fir!");
  })
  .catch(() => {
    console.log("Nhi mile, dhoka diya");
  });

// 2:24:38 promise
