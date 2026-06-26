/* set interval docs on w3school
clear interval

Features to add:
option for use to chose start date and end date
notification for mail send that 5 mints or 10m remaining
*/

const endDate = new Date("24 Aug, 2025 20:33:00").getTime()
const startDate = new Date().getTime() // current date

let x = setInterval(function updateTimer() {
    const now = new Date().getTime()

    const distanceCovered = now - startDate
    const distancePending = endDate - now

    // calculate days, min, hrs, sec
    // 1 day = 24 * 60 * 60 * 1000 ms
    // const days = Math.floor(distancePending / (24 * 60 * 60 * 1000))
    // const hrs = Math.floor((distancePending % (24 * 60 * 60 * 1000) / (60 * 60 * 1000)))
    // const mins = Math.floor((distancePending % (60 * 60 * 1000)) / (60 * 1000))
    // const secs = Math.floor((distancePending % (60 * 1000)) / (1000))


    // calculate days, min, hrs, sec
    // 1 day = 24 * 60 * 60 * 1000 ms
    const oneDayInMillis = (24 * 60 * 60 * 1000)
    const oneHourInMIllis = (60 * 60 * 1000)
    const oneMinInMillis = (60 * 1000)
    const oneSecondInMillis = (1000)

    const days = Math.floor(distancePending / (oneDayInMillis))
    const hrs = Math.floor((distancePending % (oneDayInMillis) / (oneHourInMIllis)))
    const mins = Math.floor((distancePending % (oneHourInMIllis)) / (oneMinInMillis))
    const secs = Math.floor((distancePending % (oneMinInMillis)) / (oneSecondInMillis))

    // populate in UI
    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = hrs
    document.getElementById('minutes').innerHTML = mins
    document.getElementById('seconds').innerHTML = secs

    // calculate width percentage for progress bar
    const totalDistance = endDate - startDate
    const percentageDistance = (distanceCovered / totalDistance) * 100

    // set width for progress bar
    document.getElementById('progress-bar').style.width = percentageDistance + '%'

    if (distancePending < 0) {
        console.log("Total distance:", totalDistance);
        console.log("Percentage distance:", percentageDistance);
        console.log("Distance covered 100%");
        clearInterval(x)
        document.getElementById('countdown').innerHTML = "EXPIRED!"
        document.getElementById('progress-bar').style.width = '100%'
    }

}, 1000)

