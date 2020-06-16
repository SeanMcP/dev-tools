---
title: Dog Photo
script: dog-photo.js
styles: dog-photo.css
---

Click the button below to retrieve a new dog photo. You can select been a lovable mutt or a random breed.

<div id="dog-photo">
    <form data-form>
        <button data-button>Fetch!</button>
        <label>
            <input type="radio" name="breed" value="mix" checked><span>Mutt</span>
        </label>
        <label>
            <input type="radio" name="breed" value="random"><span>Random</span>
        </label>
    </form>
    <img data-image aria-hidden="true" >
</div>