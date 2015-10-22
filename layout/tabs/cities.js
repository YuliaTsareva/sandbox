var data = {
  cities: [
    {
      name: 'Shanghai',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/PudongSkyline-pjt_%28cropped%29.jpg/250px-PudongSkyline-pjt_%28cropped%29.jpg',
      population: '24,150,000',
      density: '3,809',
      country: 'China',
      countryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/45px-Flag_of_the_People%27s_Republic_of_China.svg.png'
    },
    {
      name: 'Karachi',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Karachi_sky_line.jpg/250px-Karachi_sky_line.jpg',
      population: '23,500,000',
      density: '6,663',
      country: 'Pakistan',
      countryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/45px-Flag_of_Pakistan.svg.png'
    },
    {
      name: 'Lagos',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lagos_Island.jpg/250px-Lagos_Island.jpg',
      population: '21,324,000',
      density: '18,206',
      country: 'Nigeria',
      countryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/46px-Flag_of_Nigeria.svg.png'
    },
    {
      name: 'Delhi',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Supreme_Court_of_India_-_200705.jpg/250px-Supreme_Court_of_India_-_200705.jpg',
      population: '16,787,941',
      density: '11,320',
      country: 'India',
      countryImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/45px-Flag_of_India.svg.png'
    },
    {
      name: 'Tianjin',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/%E7%82%AB%E5%BD%A9%E6%B4%A5%E9%97%A899%E6%B5%B7%E6%B2%B3%E5%A4%9C%E6%99%AF.jpg/250px-%E7%82%AB%E5%BD%A9%E6%B4%A5%E9%97%A899%E6%B5%B7%E6%B2%B3%E5%A4%9C%E6%99%AF.jpg',
      population: '14,722,100',
      density: '3,647',
      country: 'China',
      countryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/45px-Flag_of_the_People%27s_Republic_of_China.svg.png'
    },
    {
      name: 'Istanbul',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Halic.png/250px-Halic.png',
      population: '14,377,019',
      density: '2,633',
      country: 'Turkey',
      countryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/45px-Flag_of_Turkey.svg.png'
    },
    {
      name: 'Tokyo',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Skyscrapers_of_Shinjuku_2009_January_%28revised%29.jpg/250px-Skyscrapers_of_Shinjuku_2009_January_%28revised%29.jpg',
      population: '13,297,629',
      density: '6,075',
      country: 'Japan',
      countryImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/45px-Flag_of_Japan.svg.png'
    },
    {
      name: 'Guangzhou',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Guangzhou_skyline.jpg/250px-Guangzhou_skyline.jpg',
      population: '12,700,800',
      density: '3,305',
      country: 'China',
      countryImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/45px-Flag_of_the_People%27s_Republic_of_China.svg.png'
    },
    {
      name: 'Mumbai',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mumbai_Skyline_at_Night.jpg/250px-Mumbai_Skyline_at_Night.jpg',
      population: '12,478,447',
      density: '20,680',
      country: 'India',
      countryImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/45px-Flag_of_India.svg.png'
    },
    {
      name: 'Moscow',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kremlevskaya_Naberezhnaja_Moscow.hires.jpg/250px-Kremlevskaya_Naberezhnaja_Moscow.hires.jpg',
      population: '12,197,596',
      density: '4,859',
      country: 'Russia',
      countryImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/45px-Flag_of_Russia.svg.png'
    }
  ]
};

var headerTemplate = Handlebars.compile(document.getElementById('headerTemplate').innerHTML);
document.getElementsByClassName('tab-headers-inner')[0].innerHTML = headerTemplate(data);

var contentTemplate = Handlebars.compile(document.getElementById('contentTemplate').innerHTML);
document.getElementsByClassName('tab-content')[0].innerHTML = contentTemplate(data);

var header = document.querySelector('.tab-headers-inner .tab-header');
header.className = header.className + " active";

var tab = document.getElementsByClassName('tab')[0];
tab.className = tab.className + " active";
