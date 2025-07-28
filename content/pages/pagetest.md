Title: pagetest
Category: test
Date: 2025-7-11
Day: 11
Month: July
Year: 2025

{% from 'macros.html' import polaroid, clean_break %}

{% from 'macros/sections.html' import sectionStart, sectionEnd, body, side %}



<div class="flexRow">

{{ polaroid("/images/zoey/xxangelgutzxx.png", "zoey art", "30% 50%", true, "small") }}

{{ polaroid("/images/conventions/AC25/IMG_6153.jpeg", "convention pics", "left", true, "small") }}

</div>


# before

{{ clean_break() }}

# after

home > dev logs > ipod classic datamining






{{ sectionStart() }}

{{ body('

test

# test

') }}

{{ polaroid("/images/conventions/AC25/IMG_6153.jpeg", "convention pics", "left", false, "large") }}

{{ sectionEnd() }}

lah lah lah

[//]: # (This may be the most platform independent comment)


{{ sectionStart() }}

{{ side('

test

# test

') }}

{{ body('

test

# test

') }}

{{ sectionEnd() }}


awawaw