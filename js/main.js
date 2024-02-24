const photosArr = []
photosArr.length = 25
const descriptionsArr = ['Глобус', "Сурфінг", "Іллюзія", "Космічний корабль", "Dartwaider", "Військовий", "Космічний корабель у космосі", "Космічний костюм", "Хоррор", "Підбитий боінг", "Фантастика", "Жінка-воїн", "Авто", "Двигун ксмічного корабля", "Апокаліпсис", "Військова", "Захистники", "ДЕПО", "Пришелець", "ранок під час війни", "Зупинка майбутнього", "сутичка в космосі", "Світ машин", "Один на один", "Космічне майбутнє"]

console.log(descriptionsArr);


for(let i = 1; i<=photosArr.length; i++) {
    photosArr[i-1] = photosObj (i)
}


console.log(photosArr);



function photosObj (i) {
    const photo = {}
    photo.id = i
    photo.url = `./photos/${i}.jpg`
    photo.description = descriptionsArr[i-1]
    photo.likes = randomCount (15, 200)
  photo.comments = comments ()
   return photo
    
}


function randomCount(min, max) {

    return Math.floor(Math.random()*(max - min + 1) + min)
}

function comments(){
    const commentsArr = []
    const comMin = 3;
    const comMax = 10
    const commentsCount = Math.floor(Math.random()*(comMax - comMin + 1) + comMin)
    for(let i = 1; i<=commentsCount; i++) {
        commentsArr.push(commentsObj())
    }
    return commentsArr
}

function commentsObj (){
    const comment = {}
    comment.id = randomCount (1, 200)
    comment.avatar = avatarComment ()
    comment.message = createMessage ()
    comment.name = nameComment ()
    return comment
}

function avatarComment () {
    const avatarNumb = randomCount (1, 6);
    return `./img/avatar-${avatarNumb}.svg`
}

function createMessage (){
    const messageArr = ['Все відмінно!', 'Загалом все непогано. Але не всі.', 'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.', 'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.', 'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.', 'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?']
    const min = 0;
    const max = messageArr.length;
    const message = messageArr[Math.floor(Math.random()*(max - min) + min)];
    return message;
}

function nameComment (){
    const namesArr = ['Ірина', 'Олександр', 'Олексій', 'Степан', 'Олена', 'Ольга', 'Кирило', 'Марія']
    const name = namesArr[randomCount (0, namesArr.length)] ;
    return name;
}




