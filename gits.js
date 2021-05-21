var exec = require('child_process').exec;

const ADD = 'git add .'
const COMMIT = `git commit -m ${process.argv[2]}`
const PUSH = 'git push github main'

/* 同步实现异步代码 */
const execAsync = cmd => {
    return new Promise((resolve, reject) => {
        exec(cmd, (err, stdout, stderr) => {
            if (err) reject(err)
            resolve(stdout)
        })
    })
}

(async () => {
    await execAsync(ADD)
    await execAsync(COMMIT)
    await execAsync(PUSH)
})()

// exec(ADD, (err) => {
//     if (err) console.log(err);
//     exec(COMMIT, (err) => {
//         if (err) console.log(err);
//         exec(PUSH, (err, stdout, stderr) => {
//             if (err) console.log(err);

//             console.log(stdout);
//             exec('./deploy.sh', (err, stdout, stderr) => {
//                 if (err) console.log(err);
//                 console.log(stdout);
//             })
//         })
//     })
// })