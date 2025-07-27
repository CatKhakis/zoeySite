Title: Hello World!
Category: Dev Log
Date: 2025-7-11
Day: 11
Month: July
Year: 2025

{% from 'macros.html' import clean_break %}

### What could be a more fitting hello world than a dev log documenting making this very site?

orignally i had intended on using Ghost for blogging purposes but it was far too 'polished' for me. i wanted something that i could really make my own rather than something that looks nice by default. i have been very inspired by [eevee's site](https://eev.ee) that she recently redesigned at the time of writing this. her blog post [Fresh start](https://eev.ee/blog/2024/12/03/fresh-start/) details her feelings about the blog itself and the direction she wants to take it. she gave her reasoning for opting to use pelican as the backbone for the site and since i trust her knowledge and enjoy the design of it i thought i might as well follow her paw prints and go the same route.

i'd like to outline my goals and methodology in this first post and will update links to future posts about developing specific features.
Dillan Stock of The Stock Pot on Youtube posted [this fantastic video](https://youtu.be/3zfIUSg9lm4?si=EwVH8olMrU9eg_5c) discussing his goals for his smart home and i find his thought process absolutely genius. i highly reccomend his channel- nothing but the best content, especially if you're interesting in smart home automation in the slightest. he breaks it down into what he actually *wants* rather than being influenced by what flashy smart home gadgets exist out there. finding specific devices is about what fits your desires, not picking up the cool devices and trying to force your desires to fit that product. this is why Ghost wasnt the right pick for this site. yes- its a good product as far as i can tell but its not primarily addressing what i want out of a blog. its the flashy smart home device that i could learn, but i'd be tackling it the wrong way. 

{{ clean_break() }}

### i want this site to

- be a place where i can *really* get into the weeds on projects im doing. 
- function as a digital busniess card like caard or other sites do.
- allow me a place to write long form *nuanced* opinion pieces that wouldnt work well on the bird app.
- be a portfolio for all of my different projects: fursuit making, web development, microcontroller tinkering, and whatever else i end up getting my paws on.
- be a home for my silly little projects that dont fit elsewhere in the world i.e. i'd love to make a nice sudoku app.
- share accounts of my convention experiences.
- let me have fun !!!

i'm so excited to get to make my own place on the internet. i've been wanting to make a blog for the longest time, but im a very busy puppy and starting is always the hardest part. i'll probably write a more indepth analysis but i really believe that more critters should focus on blogs rather than social media. social media is great in a lot of ways but i think its eroded a lot of *intentionality*. i'll expand on this when i write about ipods, physical photos, and my friend's amazing idea for bringing physical media back in the modern era.

{{ clean_break() }}
# pelican

wow. this is a lot. 
the version of me at the end of this post will be a lot smarter than i am now.

the first time i dipped my paws into web dev was a few months ago and it has gotten me hooked. i started out using Processing javascript, hacking with some quickstart templates, and then going full into making ExpressJS backends and frontends. with how much i've fallen in love with js it's going to be weird departing it to build this site. 
i'd like to have fun little interactable javascript elements, but the core of the website should be as lightweight as possible. modern web design really struggles with optimization and that is another facet of a lack of *intentionality*.

making it is more important than making it perfect.

# goals

[ ] - business card top left with socials
[ ] - zoey ref sheet page
[ ] - fursuit work
[ ] - list of projects with articles and pages inside


## business card 'header'

whats funny is that you can see this element right now! even though i havent designed it yet as of writing this!

i've mocked up this concept for a business card that can sit on the left side of the site which can have a link to all my socials on the back. i'd like it to flip over with a nice 3d effect when its clicked but show the front side otherwise. i *think* this can be implemented with just css, but we will have to see if thats really possible.

![Photo]({attach}card_mockup.png)

from digging into it this absolutely could be done with pure css. BUT it would not be dyanmic at all and would only be able to be a toggle. I'd like the card to "lift" a corner based on where the cursor is in relation to it. as far as i can tell thats not something that i can do with just css.

pelican doesnt natively support javascript files so ill be using the [webassets](https://github.com/pelican-plugins/webassets) plugin rather than pelican_javascript which seems to be deprecated.

I'm realizing that pure css for text cant give me the embossed look i want, so its time to delve into the very scary world of svg... i'm not going to act like i fully understand whats going on but ive gotten this to work:





## tangent

something interesting about the modern internet is how browsers are SOOO advanced. the amount of things you can do purely via html and css is mind boggling. so then... why does the internet feel so dead now? its too sleek and too 'perfect'. its obviously not about the technology!

the web went from something that was only accessed by the biggest nerds ever to something that ***everyone*** uses. i know from working retail that the average person is very *very* dumb. knowing that it makes plenty of sense to converge on the most simplistic streamlined design ever. the bastardizeation of the web isnt all bad i have to admit, sites are way more accessible than ever before and thats obviously a great thing. 


i want to build a really nice toolkit NOW so that future me can write articles quickly and easily without having to fuss about with making things look the way they should

