const os = require('os')
const log = require('./logger')

setInterval(() => {
    const { freemem, totalmem } = os

    const total = parseInt(totalmem() / 1024 / 1024)
    const mem = parseInt(freemem() / 1024 / 1024)
    const usage_mem = total-mem
    const percents = parseInt((usage_mem / total) * 100)
    
    const stats = {
        time: `${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}`,
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`,
    }
    
    console.clear()
    console.log("===== PC MEM STATUS =====")
    console.table(stats)

    log(`${JSON.stringify(stats)}\n`)

}, 1000)