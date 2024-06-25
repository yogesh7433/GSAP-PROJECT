var tl=gsap.timeline()

tl.from("h3",{
    y:-50,
    duration:0.7,
    delay:0.5,
    opacity:0,
    stagger:0.3
})

tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:2,
    stagger:0.3
})

tl.from("img",{
    x:100,
    duration:2,
    opacity:0,
    stagger:0.5
})