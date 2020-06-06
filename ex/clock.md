---
title: Clock
script: clock.js
styles: clock.css
---

For the following exercises, we'll be referencing this clock:

<div id="clock">
    <div data-display></div>
    <div data-options>
        <label>
            <input type="radio" name="convention" value="twelve">
            <span>12-hour</span>
        </label>
        <label>
            <input type="radio" name="convention" value="twenty-four" checked>
            <span>24-hour</span>
        </label>
    </div>
</div>

It updates every second and gives you the option of toggling between 12- and 24-hour time.