// let date = new Date();
// console.dir(date)
// app.js:2 Thu Aug 15 2024 11:57:28 GMT+0530 (India Standard Time)
// index.html:40 Live reload enabled.
// :5500/favicon.ico:1 
        
        
//        Failed to load resource: the server responded with a status of 404 (Not Found)
// date
// Thu Aug 15 2024 11:57:28 GMT+0530 (India Standard Time)
// date.toLocaleDateString('en-gb')
// '15/08/2024'
// new Date(179300)
// Thu Jan 01 1970 05:32:59 GMT+0530 (India Standard Time)
// date
// Thu Aug 15 2024 11:57:28 GMT+0530 (India Standard Time)
// date.toString()
// 'Thu Aug 15 2024 11:57:28 GMT+0530 (India Standard Time)'
// const myDate = 2003-10-23T02:45:00
// VM309:1 Uncaught SyntaxError: Invalid or unexpected token
// const myDate = '2003-10-23T02:45:00'
// undefined
// myDate
// '2003-10-23T02:45:00'
// myDate.getTime()
// VM381:1 Uncaught TypeError: myDate.getTime is not a function
//     at <anonymous>:1:8
// (anonymous) @ VM381:1
// const myRealDate = new Date(myDate)
// undefined
// myRealDate()
// VM524:1 Uncaught TypeError: myRealDate is not a function
//     at <anonymous>:1:1
// (anonymous) @ VM524:1
// myRealDate
// Thu Oct 23 2003 02:45:00 GMT+0530 (India Standard Time)
// myRealDate.getTime()
// 1066857300000
// myRealDate.valueOf()
// 1066857300000
// new Date('2003-10-23T02:45')
// Thu Oct 23 2003 02:45:00 GMT+0530 (India Standard Time)
// new Date('2003-10-23')
// Thu Oct 23 2003 05:30:00 GMT+0530 (India Standard Time)
// new Date('10/23/2003')
// Thu Oct 23 2003 00:00:00 GMT+0530 (India Standard Time)
// new Date(0)
// Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
// new Date('en-gb','10/23/2003')
// Invalid Date
// new Date('2003-10-23').toUTCString()
// 'Thu, 23 Oct 2003 00:00:00 GMT'
// new Date('2003-10-23').toISOString()
// '2003-10-23T00:00:00.000Z'
// new Date('2003-10-23T00:00:00.000Z')
// Thu Oct 23 2003 05:30:00 GMT+0530 (India Standard Time)
// new Date('2003-10-23T00:00:00.0530Z')
// Thu Oct 23 2003 05:30:00 GMT+0530 (India Standard Time)
// new Date('2003-10-23T00:00:00.0730Z')
// Thu Oct 23 2003 05:30:00 GMT+0530 (India Standard Time)

// const normalDate = '23-10-2003'
// const reversedDate = normalDate.split('-').reverse().join('-')
// console.log(`Normal date: ${normalDate} \nReversed date: ${reversedDate}`)

// const [day,month,year] = normalDate.split('-');
// console.log(new Date(year,month,day))

let input = document.querySelector("input[type='submit']")
let flag = false;
let prev = null;
input.addEventListener('click',()=> {

    const date = document.querySelector(`input[type='date']`).value;
    const newDate = new Date(date)
    console.log(date,newDate)
    const el = document.createElement('textarea');
    el.value = newDate;
    el.classList.add('set')

        if(prev)
            prev.remove()
            document.body.appendChild(el);
            prev = el;

})
