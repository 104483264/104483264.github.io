var posts=["posts/baa4bd7f.html","posts/6482513a.html","posts/270eeb2d.html","posts/b824cc2f.html","posts/bd56ed73.html","posts/91794a99.html","posts/5ea8a16.html","posts/dd9a467d.html","posts/80b37af4.html","posts/ed8caaa5.html","posts/a09209f7.html","posts/2ebdbc54.html","posts/37a68d15.html","posts/7a87d6c7.html","posts/2c57c182.html","posts/2be58d5e.html","posts/eb3884be.html","posts/32febc1f.html","posts/c0a8ef92.html","posts/b75a4e69.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};