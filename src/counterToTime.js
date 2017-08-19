function counterToTime(counter) {
    let centiSeconds = counter;
    const hours = Math.floor(centiSeconds / 360000);
    centiSeconds = centiSeconds - 360000 * hours;
    const minutes = Math.floor(centiSeconds / 6000);
    centiSeconds = centiSeconds - 6000 * minutes;
    const seconds = Math.floor(centiSeconds / 100);
    centiSeconds = centiSeconds - 100 * seconds;
    return  `0${hours}`.slice(-2) + ':' +
            `0${minutes}`.slice(-2) + ':' +
            `0${seconds}`.slice(-2) + '.' +
            `0${centiSeconds}`.slice(-2);
}
export default counterToTime;