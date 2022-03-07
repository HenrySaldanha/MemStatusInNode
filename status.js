const os = require('os')
const log = require('./logger')

setInterval(() => {
    const { freemem, totalmem } = os

    const total = BytesToMegaBytes(totalmem())
    const mem = BytesToMegaBytes(freemem())
    const usage_mem = total - mem
    const percents = ToPercentValue(usage_mem / total)

    const status = {
        time: `${GetISOFormattedDate()}`,
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`,
    }

    DisplayMemotyStatus(status)
    log(`${JSON.stringify(status)}\n`)

}, 1000)

function BytesToMegaBytes(memory) {
    return parseInt(memory / 1024 / 1024)
}

function ToPercentValue(value) {
    return parseInt(value * 100)
}

function DisplayMemotyStatus(memory_status){
    console.clear()
    console.log("===== PC MEM STATUS =====")
    console.table(memory_status)
}

function GetISOFormattedDate(){
    return new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
}
