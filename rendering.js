// Mouse tracking
let mousePos = null
let mouseSym = null

const trackMouse = ({clientX, clientY}) => {
    mousePos = {
        x: clientX,
        y: clientY
    }
    mouseSym = mousePos
        ? vecSymm(mousePos)
        : null
}

const render = () => {
    // don't render unless mouse is on canvas
    if (!mousePos) { return }

    const mouseDist = distTo(mousePos)
    const radius = Math.min(mouseDist(vecAdd(
        getCenter(),
        {
            x: ctx.canvas.width / 4,
            y: ctx.canvas.height / 4
        }
    )),
        mouseDist(getCenter())) / 2

    ctx.fillStyle = rgbaToString(randColor())
    drawCircle(mousePos.x, mousePos.y, radius)
    drawCircle(mouseSym.x, mouseSym.y, radius)
}

/* The actual rendering mechanism.
Note :
Mouse tracking and rendering were previously joined,
and the circle would draw on mouseMove.
Pros was optimization, cons was the framerate couldn't
be custom, and I wouldn't get that epileptic blink
effect on each frame.
*/

// Track and update mouse position
ctx.canvas.addEventListener('mousemove', trackMouse)
// Register when mouse leaves the canvas
ctx.canvas.addEventListener('mouseout', () => {
    mousePos = null
})

// refresh at framerate
let framerate = 60
let inter = setInterval(render, 1000 / framerate)