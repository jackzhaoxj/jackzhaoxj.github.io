function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

// 获取当前时间时间戳
var currentTime = Date.now();
 
// 获取指定时间时间戳
// 注1：这里写的是2012年9月1日0时0分0秒
// 注2：Javascript中月份是实际数字减1
var targetTime = (new Date(2019, 7, 31, 0, 0, 0)).getTime();
 
// 获取差值，如果指定日期早于现在，则为负数
var offsetTime = targetTime-currentTime ;
 
// 求绝对值，获取相差的时间
//offsetTime = Math.abs(offsetTime);
 
// 将时间转位天数
// 注：Javascript中时间戳的单位是毫秒
//var offsetDays = Math.floor(offsetTime / (3600 * 24 * 1e3));

var deadline = new Date(Date.parse(new Date())+ offsetTime); //Days, Hours, Minutes, Seconds 
initializeClock('clockdiv', deadline);
