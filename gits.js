var child_process = require('child_process');

const commitMsg = process.argv[2]

const cmds = [
    'git add .', `git commit -m ${commitMsg}`, 'git push github main',
    // 'cd ./codes',
    // 'git init', 'git add -A', `git commit -m ${commitMsg}`,
    // 'git push -f git@github.com:AnonBug/blog.git master:gh-pages',
    // 'cd -'
]

try {
    for (let cmd of cmds) {
        console.log(cmd);
        child_process.execSync(cmd)
    }
    child_process.execSync('bash deploy.sh')
} catch (e) {
    console.log(e);
}
