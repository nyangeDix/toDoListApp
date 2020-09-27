let today = new Date();
let dateSpan = document.querySelector('#timingYear');
// let year = today.getFullYear();
// console.log(year);

let day = (dateInit) => {
    return dateInit.getDate();
}


let swithMonth = (monthNo) => {
    switch (monthNo) {
        case 0:
            return 'January';
            break;
        case 1:
            return 'February';
            break;
        case 2:
            return 'March';
            break;
        case 4:
            return 'May';
            break;
        case 5:
            return 'June';
            break;
        case 6:
            return 'July';
            break;
        case 7:
            return 'August';
            break;
        case 8:
            return 'September';
            break;
        case 9:
            return 'October';
            break;
        case 10:
            return 'November';
            break;
        case 11:
            return 'December';
            break;
        default:
            return 'HTML ERROR';
            break;
    }
}

let month = (dateInit) => {
    let monthNum = dateInit.getMonth();
    return swithMonth(monthNum);
}

let year = (dateInit) => {
    return dateInit.getFullYear();
}

let fullYear = (getInit) => {
    return `${day(getInit)}, ${month(getInit)} ${year(getInit)}`; 
}

//print year to the dom.
dateSpan.innerHTML = fullYear(today);