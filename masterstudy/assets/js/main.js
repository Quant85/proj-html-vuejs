

let ms_app = new Vue({
  el:'#ms_app',
  data:{
    logo:"assets/img/header/MasterStudy_logo.svg",
    languageSelect:[
      {
        language:"English",
        link:"#",
      },
      {
        language:"Deutsch",
        link:"#",
      },
      {
        language:"Italian",
        link:"#",
      }
    ],
    itemsMenu: [
      {
        badge:false,
        badgeLink:"https://boolean.teachable.com/",
        badgeTitle:"new",
        title:"Courses",
        link:"https://boolean.teachable.com/"
      },
      {
        badge:true,
        badgeLink:"https://boolean.teachable.com/",
        badgeTitle:"new",
        title:"Zoom",
        link:"https://boolean.teachable.com/"
      },
      {
        badge:false,
        badgeLink:"https://boolean.teachable.com/",
        badgeTitle:"new",
        title:"Pages",
        link:"https://boolean.teachable.com/"
      },
      {
        badge:false,
        badgeLink:"https://boolean.teachable.com/",
        badgeTitle:"new",
        title:"Bundles",
        link:"https://boolean.teachable.com/"
      },
      {
        badge:false,
        badgeLink:"https://boolean.teachable.com/",
        badgeTitle:"new",
        title:"Course Formats",
        link:"https://boolean.teachable.com/"
      },
      {
        badge:true,
        badgeLink:"https://boolean.teachable.com/",
        badgeTitle:"new",
        title:"Add course",
        link:"https://boolean.teachable.com/"
      },
      {
        badge:false,
        badgeLink:"https://boolean.teachable.com/",
        badgeTitle:"new",
        title:"Demos",
        link:"https://boolean.teachable.com/"
      },
    ],
    socialIcons:[
      {
        icon:"fa-twitter",
        link:"https://twitter.com/login?lang=it",
      },
      {
        icon:"fa-instagram",
        link:"https://www.instagram.com",
      },
      {
        icon:"fa-behance",
        link:"https://www.instagram.com",
      },
      {
        icon:"fa-dribbble",
        link:"https://dribbble.com/",
      },
      {
        icon:"fa-flickr",
        link:"https://dribbble.com/",
      },
      {
        icon:"fa-git",
        link:"https://github.com/Quant85",
      },
      {
        icon:"fa-linkedin",
        link:"https://www.linkedin.com/in/antonioquattrocchi/",
      },
      {
        icon:"fa-pinterest",
        link:"https://www.pinterest.it/",
      }
    ],
    searchCourses:"",
    categories:{
      type:"category",
      state:false,
      category:[
        {
          categoryName:"software development",
          courses:{
            numberCourses:5,
            src:"assets/img/main/preview/cat_1-770x375.jpg",
          },
        },
        {
          categoryName:"art",
          link:"#",
          courses:{
            numberCourses:8,
            link:"#",
            src:"assets/img/main/preview/cat_2-370x155.jpg"
          },
        },
        {
          categoryName:"material design",
          courses:{
            numberCourses:5,
            link:"#",
            src:"assets/img/main/preview/cat_3-370x155.jpg"
          },
        },
        {
          categoryName:"music",
          courses:{
            numberCourses:5,
            link:"#",
            src:"assets/img/main/preview/cat_5-370x155.jpg"
          },
        },
        {
          categoryName:"exsercise",
          courses:{
            numberCourses:7,
            link:"#",
            src:"assets/img/main/preview/cat_4-370x155.jpg"
          },
        },
        {
          categoryName:"photography",
          courses:{
            numberCourses:4,
            link:"#",
            src:"assets/img/main/preview/cat_6-370x155.jpg"
          },
        },
      ],
    },
    linkNavbarButtom:[
      {
        txt:"Become an Instructor",
        icon:"fal fa-bullhorn",
        link:"#",//potremmo collegarlo alla sezione Sectorized Offers 
      },
      {
        txt:"For Enterprise",
        icon:"fal fa-briefcase",
        link:"#",//potremmo collegarlo alla sezione Sectorized Offers 
      }
    ],
    login:[
      {
        class:"",
        txt:"Log in",
        link:"#",
        icon:"far fa-user",
      },
      {
        class:"btn_signup",
        txt:"SIGN UP",
        link:"#",
        icon:"",
      },
      {
        class:"favourite_like",
        txt:"",
        link:"#",
        icon:"fad fa-bookmark",//si potrebbe inserire l'icona piena alla condizione active
      }
    ],
    imgBox: [
      {
        src:"assets/img/header/jumbotron/base.png",
        name:"base",
      },
      {
        src:"assets/img/header/jumbotron/book1.png",
        name:"book1",
      },
      {
        src:"assets/img/header/jumbotron/book2.png",
        name:"book2",
      },
      {
        src:"assets/img/header/jumbotron/bubblespeech.png",
        name:"bubblespeech",
      },
      {
        src:"assets/img/header/jumbotron/magnifier.png",
        name:"magnifier",
      },
      {
        src:"assets/img/header/jumbotron/moon.png",
        name:"moon",
      }
    ],
    previewCard:[
      {
        icon:"fal fa-globe-americas",
        txt:"Worldwide Recognize",
        description:"Our online course certificates can be used around the world and also in most popular universities and companies.",
      },
      {
        icon:"fal fa-desktop-alt",
        txt:"Mostly Online Learning (sd)",
        description:"Masterstudy online certificates can be obtained in a range of specialized areas and typically take about a year to complete.",
      },
      {
        icon:"fal fa-calendar-check",
        txt:" Graduate in as little as 1 Year",
        description:"Online post-graduate certificates are a popular way to develop your professional qualifications of Masterstudy",
      }
    ],
  }
});