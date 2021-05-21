var exec = require('child_process').exec;

const ADD = 'git add .'
const COMMIT = `git commit -m ${process.argv[2]}`
const PUSH = 'git push github main'

exec(ADD, () => {
    exec(COMMIT, () => {
        exec(PUSH, (err, stdout, stderr) => {
            console.log(stdout);
        })
    }) 
})