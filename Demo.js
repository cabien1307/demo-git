function Demo() {
    this.name = '';
    console.log("Demo GIT COMMIT !");
}

function sum(a, b) {
    console.log(a + b);
}
sum(1, 2)
Demo();
module.exports = { Demo, sum };