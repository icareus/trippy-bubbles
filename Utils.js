// Generating a canvas
const CanvasContext = (x, y) => {
    const canvas = document.createElement('canvas')
    canvas.width = x
    canvas.height = y

    return canvas.getContext('2d')
}

// Drawing shapes and shit
const circlePath = (centerX, centerY, radius) => ctx.arc(centerX, centerY, radius, 0, 2*Math.PI)
const drawCircle = (x, y, r) => {
    ctx.beginPath()
    circlePath(x, y, r)
    ctx.closePath()
    ctx.fill()
}

// Maths stuff
const rand = max => max ? Math.floor(Math.random() * max) : Math.random()
const getCenter = (canvas = ctx.canvas) => ({
    x: canvas.width / 2,
    y: canvas.height / 2
})

// vec2D stuff
const vecAdd = (v1, v2) => ({
    x: v1.x + v2.x,
    y: v1.y + v2.y
})
const vecDiff = (v1, v2) => ({
    x: v2.x - v1.x,
    y: v2.y - v1.y
})
const vecSymm = (v, ref = getCenter()) => vecAdd(ref, vecDiff(v, ref))
const vecSquareDist = (v1, v2) => Math.pow(v2.x - v1.x, 2) + Math.pow(v2.y - v1.y, 2)
const vecDist = (v1, v2) => Math.sqrt(vecSquareDist(v1, v2))
const distTo = v1 => v2 => vecDist(v1, v2)

// color
const randColor = () => ({
    r: rand(256),
    g: rand(256),
    b: rand(256),
    a: rand()
})
const rgbaToString = ({r, g, b, a}) => `rgba(${r},${g},${b},${a})`
