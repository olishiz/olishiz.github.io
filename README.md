# olishiz.github.io

This GitHub Pages site now redirects to **https://olishiz.com**.

`index.html` and `404.html` send visitors to the same page on olishiz.com when it exists
(`/experience`, `/blog`, `/projects`, `/thoughts`, `/guestbook`), keeping the query string and hash;
any other path goes to the olishiz.com home page.

Project sites served from other repos (for example `/portfolio/`) are not affected.

The previous Vue build (forked from dwightjack/marco.solazzi.me) is kept in git history;
revert this commit to restore it.
