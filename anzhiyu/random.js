var posts=["posts/baa4bd7f.html","posts/270eeb2d.html","posts/6482513a.html","posts/b824cc2f.html","posts/bd56ed73.html","posts/91794a99.html","posts/ed8caaa5.html","posts/dd9a467d.html","posts/5ea8a16.html","posts/80b37af4.html","posts/2ebdbc54.html","posts/2be58d5e.html","posts/a09209f7.html","posts/eb3884be.html","posts/32febc1f.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};