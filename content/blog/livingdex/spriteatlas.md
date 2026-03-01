Title: Pokedex Sprite Atlas
Category: devlog
Date: 2026-2-23
Day: 23
Month: February
Year: 2026
Tags: Vue, Pokemon
Status: hidden

{% from 'macros.html' import clean_break %}

<img alt="Photo" src="/images/projects/livingDex/livingDexAtlas/atlas2.png">



While working on a program to help track the progress of creating a "living dex", I've made extremely faithful recreations of the Pokemon Black/White and Black 2/White 2 (BW/BW2) Pokedex. The overall program is still a work in progress, but I want to share the system I'm using for displaying sprites in a browser.

Filling out a standard Pokedex usually means catching a Pokemon and having it evolve, this counts the pre-evolved and evolved forms as caught. This means that you may not have a pokemon counted as caught anymore because it evolved, a living dex has every pokemon at the same time. 

When making a UI entirely out of sprites I am weary of having separate files for each sprite. This could get very confusing to organize and add extra loading time. Rather than this clunky solution, I use a **sprite atlas**. This isn't a solution I made up by any means, games have been using sprite atlases forever! Theres a good chance the Pokedex im trying to recreate uses an atlas, but without access to that I'm stuck recreating my own.

Aseprite allows placing *slices* on the canvas 

<img alt="Photo" src="/images/projects/livingDex/livingDexAtlas/slice_properties.png">

<img alt="Photo" src="/images/projects/livingDex/livingDexAtlas/sliceJSON.png">

<img class="smallImg" alt="Photo" src="/images/projects/livingDex/LivingDexScreenshots/RecreationBW.png">

<img style="image-rendering: pixelated" class="smallImg" alt="Photo" src="/images/projects/livingDex/LivingDexScreenshots/BW2Pokedex.png">

<img style="image-rendering: pixelated" class="smallImg" alt="Photo" src="/images/projects/livingDex/LivingDexScreenshots/BWPokedexbottom.png">

<img class="smallImg" alt="Photo" src="/images/projects/livingDex/livingDexAtlas/dexEntry_hover.png">

<img class="smallImg" alt="Photo" src="/images/projects/livingDex/livingDexAtlas/habitat.png">

<img class="smallImg" alt="Photo" src="/images/projects/livingDex/livingDexAtlas/habitat_selected.png">