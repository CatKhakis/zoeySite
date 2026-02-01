Title: Feature Complete*
Category: ramblings
Date: 2026-1-30
Day: 30
Month: January
Year: 2026
Tags: Development, LarkBarks
status: hidden

{% from 'macros.html' import clean_break %}

## We're (mostly) feature complete!

Development on this site started way back in July of 2025 and now after many *many* revisions, it's ready to be public. I included the asterisk in the title because I am always going to be improving this site and there's already so many things I'd still like to add, but I needed to make it *exist* before I can make it *perfect*. Details about what I'd like to still add are at the bottom of this post underneath the **Roadmap** section.

This site is made almost entirely from scratch using [Pelican](https://getpelican.com) to generate all the final pages. The 'simple' Pelican theme was used as a starting point but almost none of the original code remains. When looking for ways to make my own blog I tried out [Ghost](https://ghost.org) but it was far too 'polished' and business-minded for my tastes. I wanted something where I could make the site itself on my own, but not have to manually write every page with just HTML. This decision was practically decided for me as [Eevee](https://eev.ee) had *just* updated her site when I started looking into this. Pelican lets me type pages and posts in Markdown and then it will generate the correct HTML from that.

### Ethos

Dillan Stock of The Stock Pot on Youtube posted [this fantastic video](https://youtu.be/3zfIUSg9lm4?si=EwVH8olMrU9eg_5c) discussing his goals for his smart home and I find his thought process absolutely genius. I highly recommend his channel- nothing but the best content, especially if you're interesting in smart home automation in the slightest. he breaks it down into what he actually *wants* rather than being influenced by what flashy smart home gadgets exist out there. finding specific devices is about what fits your desires, not picking up the cool devices and trying to force your desires to fit that product. this is why Ghost wasn't the right pick for this site. yes- its a good product as far as I can tell but its not primarily addressing what I want out of a blog. its the flashy smart home device that I could learn, but I'd be tackling it the wrong way. 

i want to build a really nice toolkit NOW so that future me can write articles quickly and easily without having to fuss about with making things look the way they should

i'm so excited to get to make my own place on the internet. I've been wanting to make a blog for the longest time, but im a very busy puppy and starting is always the hardest part. I'll probably write a more indepth analysis but I really believe that more critters should focus on blogs rather than social media. social media is great in a lot of ways but I think its eroded a lot of *intentionality*. I'll expand on this when I write about ipods, physical photos, and my friend's amazing idea for bringing physical media back in the modern era.


{{ clean_break() }}


## Development

It is truly incredible how far I've come with web development since starting this project. When I started, working with Pelican seemed so complex and intricate, but now on the other side I've fallen in love with it. I've gained so much knowledge for CSS and it makes me even more excited to continue using it. Having a good framework that can be expanded upon is so difficult to really understand until you've started. Making this website isn't just building for a single page, it's building for dozens of pages all with different sizes and amounts of content. It's crazy!

- be a place where I can *really* get into the weeds on projects im doing. 
- function as a digital busniess card like caard or other sites do.
- allow me a place to write long form *nuanced* opinion pieces that wouldnt work well on the bird app.
- be a portfolio for all of my different projects: fursuit making, web development, microcontroller tinkering, and whatever else I end up getting my paws on.
- be a home for my silly little projects that dont fit elsewhere in the world i.e. I'd love to make a nice sudoku app.
- share accounts of my convention experiences.
- let me have fun !!!


## tangent

something interesting about the modern internet is how browsers are SOOO advanced. the amount of things you can do purely via html and css is mind boggling. so then... why does the internet feel so dead now? its too sleek and too 'perfect'. its obviously not about the technology!

{{ clean_break() }}

## Roadmap

### Gallery

Funny enough the button to access the gallery is fully implemented into the sidebar and the gallery page even displays "gallery is under construction!" when loaded, but I have the button element removed for now until I have it developed.

<img class="smallImg" alt="Photo" src="/images/projects/larkbarksdev/gallery.png">

It will be nice to be able to host all of the art of Zoey that people have drawn, pictures from conventions I've gone to, and pictures of projects all in one place. I have some ideas for how to implement this with Pelican so that I can filter images by tags and such, but it will take awhile to fully work out all the issues with it.


### Mobile compatibility

Making this site mobile-friendly isn't super high on my list of priorities because I feel as though a blog is best experienced on a proper monitor, but I'll admit being able to at least read the content on the site is important... Luckily I have been keeping this thought in the back of my head from the beginning and it really shouldn't be that hard to implement. All I'll really need is to make the sidebar collapsible when a mobile device is detected and then have the center content take up the whole screen. 

For now the following text is displayed when a screen less than 600px wide is detected.

```This website is intended to be viewed on a computer. The mobile version is under construction. Please view this site on a computer instead :)```

### Interactive Zoey sprite

<img class="smallImg" alt="Photo" style="image-rendering: pixelated" src="/images/zoey/sprites/zoeysprite.gif">

Zoey's sprites are based upon the desktop pet [Neko](https://en.wikipedia.org/wiki/Neko_(software)) which started out on old home computers but has been ported to countless modern programs and sites. I used [oneko.js](https://github.com/adryd325/oneko.js/) as a starting point to implement my own version, but I ended up writing my own functions and just using oneko.js as inspiration. 

I love Zoey sleeping soundly on the sidebar (p.s. you can pet the dog), but I want to make it so that you can pick her up and have her sit on top of any onscreen element. I think it would be cute for her to jump up or down from section to section once shes close to the edge of the window. In the top left of her sprite sheet I have a tennis ball and a plushie that she could interact with eventually. 

### Project index

The amount of projects on the sidebar right now is perfectly acceptable, but I know it will quickly become a mess once I have more and more content on here. At some point I'll need an index of all the projects with a way to filter them along with a way to pin certain ones to the sidebar.

{{ clean_break() }}

If you've read this far, **thank you**. If just one single person reads any of my blog posts in full I consider it a massive success. Thank you.