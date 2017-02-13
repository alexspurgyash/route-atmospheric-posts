var divMain = document.getElementById('main');

var district = [
    'Заводского',
    'Ленинского',
    'Московского',
    'Октябрьского',
    'Партизанского',
    'Первомайского',
    'Советского',
    'Фрунзенского',
    'Центрального'
];

var month = [
    'январе',
    'феврале',
    'марте',
    'апреле',
    'мае',
    'июне',
    'июле',
    'августе',
    'сентябре',
    'октябре',
    'ноябре',
    'декабре'
];

var table = [
    '<table><tbody><tr class="conclusion"><td>В <strong>',
    ' года</strong> на территории <strong>',
    ' района</strong>',
    ' </strong>атмосферного воздуха.<br><br>Проб с превышением гигиенических нормативов* не обнаружено.<br><br>В целом по городу',
    '</strong>. Проб с превышением гигиенических нормативов* не обнаружено. Комплексный показатель загрязнения атмосферного воздуха составил <strong>',
    '</strong>, что соответствует допустимой степени загрязнения атмосферы.</td></tr><tr class="footnote"><td>* Нормативы предельно допустимых концентраций загрязняющих веществ в атмосферном воздухе и нормативы ориентировочно безопасных уровней воздействия загрязняющих веществ в атмосферном воздухе населенных пунктов и мест массового отдыха населения, утвержденные постановлением Министерства здравоохранения Республики Беларусь от 08.11.2016 № 113.<br>** Методические рекомендации «Гигиеническая оценка качества атмосферного воздуха и эколого-эпидемиологическая оценка риска для здоровья населения» от 10.02.1998 №113-9711.</td></tr></tbody></table><br><br><br>'
];

var date = new Date();

var lastMonth = date.getMonth() - 1;
var currentYear = date.getFullYear();

var monthPlusYear = month[lastMonth] + ' ' + currentYear;

function makeStr(num) {
    this.num = num;
    num = String(num);
    var res = '';
    var lastNum = +num.slice(-1);
    if (lastNum == 0 || lastNum > 4 || +num > 4 && +num < 21) {
        res += ' отобрано и исследовано <strong>';
        res += num;
        res += ' проб';
    } else if (lastNum == 1) {
        res += ' отобрана и исследована <strong>';
        res += num;
        res += ' проба';
    } else if (lastNum > 1 && lastNum <5) {
        res += ' отобраны и исследованы <strong>';
        res += num;
        res += ' пробы';
    }
    return res;
}

do {
    var cityAir = prompt('Введите число проб в целом по городу:');
    var cityResult = prompt('Введите комплексный показатель загрязнения:');
} while ( cityAir <= 0 && cityResult <= 0);

for (var i = 0; i < district.length; i++) {    
    do {
        var districtAir = prompt('Введите число отобранных проб ' + district[i] + ' района:');
    } while (districtAir <= 0);
    
    var resultTable = '';
    
    for (var j = 0; j < table.length; j++) {
        resultTable += table[j];
        if (j == 0) {
            resultTable += monthPlusYear;
        } else if (j == 1) {
            resultTable += district[i];
        } else if (j == 2) {
            resultTable += makeStr(districtAir);
        } else if (j == 3) {
            resultTable += makeStr(cityAir);
        } else if (j == 4) {
            resultTable += cityResult;
        }
    }
    
    divMain.innerHTML += resultTable;
}