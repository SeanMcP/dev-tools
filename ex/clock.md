---
title: Clock
script: clock.js
styles: clock.css
---

For the following exercises, we'll be referencing this clock:

<div id="clock">
    <div id="display"></div>
    <div id="options">
        <label>
            <input type="radio" name="convention" id="twelve" value="twelve">
            <span>12-hour</span>
        </label>
        <label>
            <input type="radio" name="convention" id="twenty-four" value="twenty-four" checked>
            <span>24-hour</span>
        </label>
    </div>
</div>

It updates every second and gives you the option of toggling between 12- and 24-hour time.