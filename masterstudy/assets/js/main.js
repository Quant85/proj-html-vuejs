

let ms_app = new Vue({
  el:'#ms_app',
  data:{
      languageSelect:["English","Deutsch","Italian"],
      itemsMenu: [
        {
          badge:false,
          badgeTitle:"new",
          title:"Courses"
        },
        {
          badge:true,
          badgeTitle:"new",
          title:"Zoom"
        },
        {
          badge:false,
          badgeTitle:"new",
          title:"Pages"
        },
        {
          badge:false,
          badgeTitle:"new",
          title:"Bundles"
        },
        {
          badge:false,
          badgeTitle:"new",
          title:"Course Formats"
        },
        {
          badge:true,
          badgeTitle:"new",
          title:"Add course"
        },
        {
          badge:false,
          badgeTitle:"new",
          title:"Demos"
        },
      ],
      socialIcons:[]
  }

});