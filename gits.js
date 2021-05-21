var exec = require('child_process').exec;

const ADD = 'git add .'
const COMMIT = `git commit -m ${process.argv[2]}`
const PUSH = 'git push github main'

exec(ADD, (err) => {
    if (err) console.log(err);
    exec(COMMIT, (err) => {
        if (err) console.log(err);
        exec(PUSH, (err, stdout, stderr) => {
            if (err) console.log(err);

            console.log(stdout);
            exec('./deploy.sh', (err, stdout, stderr) => {
                if (err) console.log(err);
                console.log(stdout);
            })
        })
    })
})