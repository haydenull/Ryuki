const Koa = require('koa')
const app = new Koa()

// X-Response-Time
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

// Logger
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// Response
app.use(async ctx => {
  ctx.body = 'Hello World'
})

app.on('error', err => {
  log.error('server error', err)
});

app.listen(3000)
