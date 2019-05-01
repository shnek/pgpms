const ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: "git@github.com:shnek/pgpms.git"
    },
    () => console.log("Deploy Complete")
)