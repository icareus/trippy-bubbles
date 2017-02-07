let ctx = CanvasContext(window.innerWidth, window.innerHeight)
const corners = {
    topLeft: {x: 0, y: 0},
    topRight: {x: ctx.canvas.width, y: 0},
    botLeft: {x: 0, y: ctx.canvas.height},
    botRight: {x: ctx.canvas.width, y: ctx.canvas.height}
}
ctx.canvas.id = 'canvas'
document.body.appendChild(ctx.canvas)
document.body.style.cursor = 'none'
document.body.style.margin = 0
const onResize = () => {
	ctx.canvas.width = window.innerWidth
	ctx.canvas.height = window.innerHeight
}

window.addEventListener('resize', onResize)

