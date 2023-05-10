process.stdout.write('hello from spinner2.js... \rheyyy\n');

const spinArr = ['|', '/', '-', '\\', '|', '-', '\\', '|'];
let time = 0;

spinArr.forEach((char) => {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, time);
  time += 200;
});