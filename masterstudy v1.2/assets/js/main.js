

let ms_app = new Vue({
  el:'#ms_app',
  data:{
    logo:"assets/img/header/MasterStudy_logo.svg",
    languageSelect:[
      {language:"English",link:"#"},
      {language:"Deutsch",link:"#"},
      {language:"Italian",link:"#"}
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
      {icon:"fa-twitter",link:"https://twitter.com/login?lang=it"},
      {icon:"fa-instagram",link:"https://www.instagram.com"},
      {icon:"fa-behance",link:"https://www.behance.net/"},
      {icon:"fa-dribbble",link:"https://dribbble.com/"},
      {icon:"fa-flickr",link:"https://www.flickr.com/"},
      {icon:"fa-git",link:"https://github.com/Quant85"},
      {icon:"fa-linkedin",link:"https://www.linkedin.com/in/antonioquattrocchi/"},
      {icon:"fa-pinterest",link:"https://www.pinterest.it/"}
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
      active: 1,//è l'id corrispondente al class:"active" di default
      categories:[
        {id:1,text:"All categories",class:"active"},//default active
        {id:2,text:"art",class:""},
        {id:3,text:"exsercise",class:""},
        {id:4,text:"material design",class:""},
        {id:5,text:"music",class:""},
        {id:6,text:"photography",class:""},
        {id:7,text:"software development",class:""}
      ],
      starFull:"assets/img/main/courses/starfull.svg",
      starEmptyl:"assets/img/main/courses/staremptyl.svg",
      courses:[
        {
          id:1,
          badge1:"",
          badge2:"",
          img:"assets//img/main/courses/photo-1461749280684-dccba630e2f6-272x161.jpeg",
          category:"software development",
          subcategory:"Apache",
          name:"Web Coding and Apache Basics",
          duration:"6 hours",
          vote:null,
          price:"",
          fullPrice:"Free",
        },
        {
          id:2,
          link:"",
          badge1:"featured",
          badge2:"new",
          img:"assets//img/main/courses/cat_2-272x161.jpg",
          category:"art",
          subcategory:"art",
          name:"Real Things Art Painting by Jason Ni",
          duration:"6 hours",
          vote:null,
          price:"$45",
          fullPrice:"$60",
        },
        {
          id:3,
          link:"",
          badge1:"",
          badge2:"hot",
          img:"assets/img/main/courses/course-preview-272x161.jpg",
          category:"software development",
          subcategory:"software development",
          name:"Basics of Masterstudy",
          duration:null,
          vote:5,
          price:null,
          fullPrice:"Free",
        },
        {
          id:4,
          badge1:"",
          badge2:"special",
          img:"assets/img/main/courses/photo-1496307042754-b4aa456c4a2d-272x161.jpeg",
          category:"music",
          subcategory:"electronic",
          name:"How to be a DJ? Make Electronic Music",
          duration:null,
          vote:5,
          price:"$59",
          fullPrice:"$49",
        },
        {
          id:5,
          link:"",
          badge1:"",
          badge2:"",
          img:"assets/img/main/courses/photo-1416339134316-0e91dc9ded92-scaled-272x161.jpeg",
          category:"material design",
          subcategory:"communication",
          name:"Design Instruments for Communication",
          duration:"6 hours",
          vote:null,
          price:"",
          fullPrice:"",
        },
        {
          id:6,
          link:"",
          badge1:"",
          badge2:"",
          img:"assets/img/main/courses/cathryn-lavery-67852-unsplash-272x161.jpg",
          category:"art",
          subcategory:"art",
          name:"Make your Concept Right and Beautiful",
          duration:"6 hours",
          vote:null,
          price:"",
          fullPrice:"$70",
        },
        {
          id:7,
          link:"",
          badge1:"featured",
          badge2:"",
          img:"assets/img/main/courses/photo-1475452779376-caebfb988090-272x161.jpeg",
          category:"exsercise",
          subcategory:"Bicycling",
          name:"Road Bike Manual or How to Be a Champion.",
          duration:"6 hours",
          vote:null,
          price:"",
          fullPrice:"$20",
        },
        {
          id:8,
          link:"",
          badge1:"",
          badge2:"",
          img:"assets/img/main/courses/cristian-grecu-762012-unsplash-min-scaled-272x161.jpg",
          category:"photography",
          subcategory:"Documentary",
          name:"How to Make Beautiful Landscape photos?",
          duration:"6 hours",
          vote:null,
          price:"",
          fullPrice:"$60",
        },
        {
          id:9,
          link:"",
          badge1:"",
          badge2:"",
          img:"assets/img/main/courses/landscape-272x161.jpg",
          category:"art",
          subcategory:"art",
          name:"Let`s paint Van Gogh`s Starry Night",
          duration:"6 hours",
          vote:null,
          price:"",
          fullPrice:"$79",
        },
        {
          id:10,
          link:"",
          badge1:"",
          badge2:"special",
          img:"assets/img/main/courses/12345-1-272x161.png",
          category:"software development",
          subcategory:"nvidia",
          name:"Nvidia and UE4 Technologies Practice",
          duration:"",
          vote:5,
          price:"",
          fullPrice:"Free",
        },
        {
          id:11,
          link:"",
          badge1:"",
          badge2:"special",
          img:"assets/img/main/courses/jakob-owens-198234-unsplash-min-1-272x161.png",
          category:"art",
          subcategory:"art",
          name:"How to Work with Legendary RED camera?",
          duration:"6 hours",
          vote:null,
          price:"",
          fullPrice:"Free",
        },
        {
          id:12,
          link:"",
          badge1:"",
          badge2:"",
          img:"assets/img/main/courses/promo_tf-272x161.jpg",
          category:"software development",
          subcategory:"software development",
          name:"MasterStudy Mobile LMS App",
          duration:"2 hours",//se al posto di una stringa usiamo un valore numerico, può esser usato come discriminante per classificare in funzione della durata
          vote:null,
          price:"",
          fullPrice:"Free",
        }
      ],
      filterRsesults:"",
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
    newsletter:{
      title:"<h3>Subscribe our newsletter</h3> <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>",
      description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
      error:[],
      email:"",
      emails:[],
    },
    carouselSection:{
      start:0,
      end:5,
      carouselBox:null,
    },
    sectionBusinessBox:{
      teacher:{
        img:"assets/img/main/business/image_box_1-221x231.png",
        title:"Become an Instructor",
        subtitle:"Teach what you love. Masterstudy gives you the tools to create a course.",
        valueLink:"start teaching",
        link:"https://www.starwars.com/",
      },
      company:{
        img:"assets/img/main/business/image_box_2-234x231.png",
        title:"Setup For Business",
        subtitle:"Get unlimited access to 2,500 of Udemy’s top courses for your team.",
        valueLink:"doing business",
        link:"https://www.boolean.careers/",
      }

    },
    testimonialSection:{
      primo:{
        bgImg:"background-image: url(assets/css/../img/main/testimonial/brooke-cagle-224821-unsplash-1-1920x700.jpg)",
        txt:"<h2>Come as you are</h2><p>MasterStudy used is an excellent workshop whether you come as a counselor, advisor, administrator, or faculty member. I am going home empowered. I am looking forward to attending the On Course MasterStudy and the MasterStudy National Conference next year and facilitating the use of this excellent retention/student success course at my college.</p><h3>Tim Sab</h3><h4> General Developer, Stylemix Themes</h4>",
      },
      secondo:{
        bgImg:"background-image: url(assets/css/../img/main/testimonial/brooke-cagle-224821-unsplash-1-1920x700.jpg)",
        txt:"",
      },
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
  },
  methods: {
    activeCategory: function(value,id){
      console.log(id);
      let activeState = this.recentCourses.active;
      let categories = this.recentCourses.categories;
      //--------------
      if (this.recentCourses.active === id) return;
      //se la classe attiva è quella indicata non va oltre - 
      categories.find(item =>item.id === activeState).class ='';// rimuove la classe precedentemente attivata
      this.recentCourses.active = id;//memorizza il nuovo id attivo - scrivere con this, alrimenti il dato viene sovrascritto (se associo activeState in quanto è in scope locale)
      categories.find(item =>item.id === id).class ='active';// imposta la nua classe attiva
      this.filterCategories(value);
    },
    //divido i due methods per un'organizzazione visiva e logica semantica, non per altro
    filterCategories(value){
      let recentCourses = this.recentCourses.courses;
      if (value == "All categories") {
        this.recentCourses.filterRsesults = recentCourses;
      } else{
        this.recentCourses.filterRsesults = recentCourses.filter((elem => elem.category.includes(value)));
      }
    },
    /* checkForm(inputText){
      const mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
      if(inputText.value.match(mailformat)){
        this.newsletter.emails.push(inputText);
        return true;
      }else {return false;}
      inputText.preventDefault();
    }, */
    carouselScrollNext(){
      const courses = this.recentCourses.courses;
      const coursesLengt = courses.length;
      start = this.carouselSection.start + 1;
      end = this.carouselSection.end + 1;
      if (end<=coursesLengt) {
        let carouselArray= courses.slice(start,end).map(i => i);
        this.carouselSection.carouselBox = carouselArray;
        this.carouselSection.start = start;
        this.carouselSection.end = end;
      }
    },
    carouselScrollPrev(){
      start = this.carouselSection.start - 1;
      end = this.carouselSection.end - 1;
      if (start >= 0) {
        let carouselArray= this.recentCourses.courses.slice(start,end).map(i => i);
        this.carouselSection.carouselBox = carouselArray;
        this.carouselSection.start = start;
        this.carouselSection.end = end;
      }
    }
  },
  mounted() {
    //,i permette di avere l'array filtrato "carico" ad ogni avvio prefiltraggio ;)
    this.recentCourses.filterRsesults = this.recentCourses.courses;
    this.carouselSection.carouselBox = this.recentCourses.courses.slice(0,5).map(i => i);
  },
});
