

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
        link:"https://www.behance.net/",
      },
      {
        icon:"fa-dribbble",
        link:"https://dribbble.com/",
      },
      {
        icon:"fa-flickr",
        link:"https://www.flickr.com/",
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
          link:"#",
          courses:{
            numberCourses:5,
            link:"#",
            src:"assets/img/main/preview/cat_3-370x155.jpg"
          },
        },
        {
          categoryName:"photography",
          link:"#",
          courses:{
            numberCourses:4,
            link:"#",
            src:"assets/img/main/preview/cat_6-370x155.jpg"
          },
        },
        {
          categoryName:"music",
          link:"#",
          courses:{
            numberCourses:5,
            link:"#",
            src:"assets/img/main/preview/cat_5-370x155.jpg"
          },
        },
        {
          categoryName:"exercise",
          link:"#",
          courses:{
            numberCourses:7,
            link:"#",
            src:"assets/img/main/preview/cat_4-370x155.jpg"
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
    infoBanner:[
      {
        title:"Limitless learning, more possibilities",
        description:"Online courses open the opportunity for learning to almost anyone, regardless of their scheduling commitments.",
        src:"../img/main/banner/Untitled-1-1-1-1-1.png",
        link:"#",
      }
    ],
    recentCourses:{
        active: true,
        categories:["art","exsercise","material design","music","photography","software development"],
    },
    numberSection:{
      title:"We are Proud",
      description:"Certificate courses are instructed by highly educated and qualified instructors who hold doctoral and master’s level degrees.",
      numbers:[
        {
          reference:"students",
          numb:2000,
        },
        {
          reference:"courses",
          numb:950,
        },
        {
          reference:"hours video",
          numb:1600,
        },
        {
          reference:"countries reached",
          numb:150,
        }
      ]
    },
    footer:{
      sectionAbout:{
        title:"about",
        societyLink:{
          link:"#header_nav",
          name:"Masterstudy",
        },
        description:" is Education WordPress theme featured by Learning Management System (LMS) for online education.",
        by:{
          link:"https://github.com/Quant85",
          txt:"StylemixThemes.",
        },        
        socialContacts:{
          facebook:{
            title:"facebook",//potrei anche utilizzare la key
            icon:"fab fa-facebook",
            link:"https://www.facebook.com/",
          },
          twitter:{
            title:"twitter",//potrei anche utilizzare la key
            icon:"fab fa-twitter",
            link:"https://twitter.com/login?lang=it",
          },
          instagram:{
          title:"instagram",//potrei anche utilizzare la key
          icon:"fab fa-instagram",
          link:"https://www.instagram.com",
          },
        }
      },
      sectionContact:{
        title:"contact",
        address:"USA, Callifornia 20, First Avenue, Callifornia",
        numbers:{
          tel:"Tel.: +1 212 458 300 32",
          fax:"Fax.: +1 212 375 24 14",
        },
        email:{
          txt:"info@masterstudy.com",
          link:"mailto:antonio.85.q@gmail.com",
        }
      },
      sectionPage:{
        title:"pages",
        pages:{
          blog:{
          txt:"Blog",
          link:"#",
          },
          home:{
            txt:"Home",
            link:"#",
          },
          shortcodes:{
            txt:"Shortcodes",
            link:"#",
          },
          courses:{
            txt:"courses",
            link:"#",
          },
          membership:{
            txt:"membership a...",
            link:"#",
          },
          typography:{
            txt:"typography",
            link:"#",
          },
        }
      },
      sectionBlog:{
        title:"blog",
        articles:{
          art1:{
            title:'Our main target is to “Developing Yourself as a Leader”',
            img:"assets/img/footer/photo-1517520287167-4bbf64a00d66-75x75.jpeg",
            link:"#",
            date:" August 9, 2018",
          },
          art2:{
            title:'Those Other College Expenses You Aren`t Thinking About',
            img:"assets/img/footer/photo-1490376840453-5f616fbebe5b-75x75.jpeg",
            link:"#",
            date:" June 3, 2015",
          }
        }
      }
    },
    scrollMenu:{
      desk:{
        icon:"fal fa-desktop",
        link:"#ms_header",
      },
      help:{
        icon:"far fa-life-ring",
        link:"",
      },
      tool:{
        icon:"fal fa-wrench",
        link:"",
      },
      cart:{
        icon:"fal fa-cart-plus",
        link:"",
      },
      appMobile:{
        icon:"fal fa-mobile-alt",
        link:"",
      }
    }
  }
});