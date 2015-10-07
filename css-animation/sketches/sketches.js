var data = {
    sketches: [
        {
            image: "1_preview.jpg",
            comment: "Еще одна небезызвестная актриса #sketch #nightsketch Сходство с оригиналом чисто условное, но если сравнивать с тем, что было год назад, то, кажется, есть какой-то прогресс.",
            likes: 16
        },
        {
            image: "2_preview.jpg",
            comment: "Испанская актриса Чус Лампреаве (Chus Lampreave) #sketch #nightsketch",
            likes: 11
        },
        {
            image: "3_preview.jpg",
            comment: "По мотивам Дюрера #sketch #nightsketch",
            likes: 17
        },
        {
            image: "4_preview.jpg",
            comment: "Возвращаясь к моим упражнениям #sketch<br>What matters in life is not what happens to you but what you remember and how you remember it",
            likes: 9
        },
        {
            image: "5.jpg",
            comment: "Моя версия Хулио Кортасара #sketch<br>Определенно, утром я еще пожалею о бесцельно проведенной ночи.",
            likes: 11
        },
        {
            image: "6_preview.jpg",
            comment: "Еженочные зарисовки #sketch<br>Мужчин я тоже иногда рисую, но с ними все сложно. Длинные волосы упрощают дело.",
            likes: 18
        },
        {
            image: "7_preview.jpg",
            comment: "#sketch #100 в этом году. Адриана Лима",
            likes: 12
        },
        {
            image: "8_preview.jpg",
            comment: "Традиционный ночной #sketch. Портрет актрисы, но лицо не похоже, поэтому я не скажу какой :)",
            likes: 14
        }]
};

var template = Handlebars.compile(document.getElementById('template').innerHTML);
document.getElementById('sketches').innerHTML = template(data);
