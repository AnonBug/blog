var child_process = require('child_process');

const commitMsg = process.argv[2]

const cmds = [
    'git add .', `git commit -m ${commitMsg}`, 'git push github main',
    // 'cd ./codes',
    // 'git init', 'git add -A', `git commit -m ${commitMsg}`,
    // 'git push -f git@github.com:AnonBug/blog.git master:gh-pages',
    // 'cd -'
]

/* 同步实现异步代码 */
const execAsync = cmd => {
    return new Promise((resolve, reject) => {
        exec(cmd, (err, stdout, stderr) => {
            if (err) reject(err)
            resolve(stdout)
        })
    })
}

try {
    for (let cmd of cmds) {
        console.log(cmd);
        child_process.execSync(cmd)
    }
} catch (e) {
    console.log(e);
}

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