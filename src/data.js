import {  MAP_TYPE, VIDEO_TYPE, IMAGE_TYPE, PROCESSING_TYPE} from './ContentGrid/constants';
// import {  COLOR_TYPE} from './ContentGrid/constants';

const data = [
  {
    id: 1,
    title: "Strawberry Mansion",
    isGrid:true,
    grid: {
      rows: 4,
      cols: 3,
      m_rows: 6,
      m_cols: 3,
      modules:[
        {
          type:MAP_TYPE,
          link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24454.867806501945!2d-75.19231844229078!3d39.98926793267725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c792ace88039%3A0x8b90a2aa5e25a819!2sStrawberry%20Mansion%2C%20Philadelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1630374856051!5m2!1sen!2sus",
          row_range: {start: 1, end:5},
          col_range: {start: 1, end:2},
          m_row_range: {start: 5, end:7},
          m_col_range: {start: 1, end:4}
        },
        {
          type: VIDEO_TYPE,
          id: "SGGW51EGUrA",
          row_range: {start: 1, end:5},
          col_range: {start: 2, end:4},
          m_row_range: {start: 1, end:5},
          m_col_range: {start: 1, end:4}
        }
      ]
    }
  },
  {
    id: 2,
    title: "The Invariant Be",
    isGrid:true,
    grid: {
      gap_color: "black",
      rows: 10,
      cols: 14,
      m_rows: 11,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "SwaUa7Umu-A",
          row_range: {start: 1, end:6},
          col_range: {start: 1, end:10},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 7, end:12}
        },
        {
          type:IMAGE_TYPE,
          href:"https://www.uni-due.de/SVE/VARS_AfricanAmericanEnglish.htm",
          src: "footnote2.1.png",
          col_range: {start: 10, end:15},
          row_range: {start: 1, end:6},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 3, end:7}
        },
        {
          type:IMAGE_TYPE,
          href:"https://ygdp.yale.edu/phenomena/invariant-be",
          src: "footnote2.2.png",
          img_size: 300,
          img_pos:{x:20, y:0},
          col_range: {start: 1, end:15},
          row_range: {start: 6, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:3}
        }
      ]
    }
  },
  {
    id: 3,
    title: "My Murder capital",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:MAP_TYPE,
          link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24454.867806501945!2d-75.19231844229078!3d39.98926793267725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c792ace88039%3A0x8b90a2aa5e25a819!2sStrawberry%20Mansion%2C%20Philadelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1630374856051!5m2!1sen!2sus",
          col_range: {start: 5, end:15},
          row_range: {start: 1, end:7},
          m_col_range: {start: 1, end:3},
          m_row_range: {start: 1, end:11}
        },
        {
          type:VIDEO_TYPE,
          id: "mftYzullK-U",
          muted: false,
          loop: true,
          col_range: {start: 1, end:8},
          row_range: {start: 1, end:11},
          m_col_range: {start: 3, end:8},
          m_row_range: {start: 1, end:8}
        },
        {
          type:VIDEO_TYPE,
          id: "HbL5J9AGflc",
          muted: false,
          loop: true,
          col_range: {start: 8, end:15},
          row_range: {start: 7, end:11},
          m_col_range: {start: 3, end:8},
          m_row_range: {start: 8, end:11}
        }
      ]
    }
  },
  {
    id: 4,
    title: "My ghost",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:IMAGE_TYPE,
          href:"https://www.atlasobscura.com/articles/architectural-history-of-philadelphia-rowhouses",
          src: "footnote4.1.png",
          img_pos:{x: 0, y:0},
          img_size: 120,
          col_range: {start: 1, end:15},
          row_range: {start: 8, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 7, end:11}
        },
        {
          type:IMAGE_TYPE,
          href:"https://whyy.org/articles/philadelphias-imminent-vacant-land-plan-major-progress-or-major-letdown/",
          src: "footnote4.2.png",
          img_size: 210,
          col_range: {start: 10, end:15},
          row_range: {start: 1, end:8},
          m_col_range: {start: 5, end:8},
          m_row_range: {start: 1, end:7}
        },
        {
          type:IMAGE_TYPE,
          href:"https://photos.google.com/photo/AF1QipONM4EnvJsRHhq1eNPt4OtrCtA8Pf4zj_lYY8M",
          src: "footnote4.3.jpeg",
          img_size: 250,
          img_pos:{x: 50, y:100},
          col_range: {start: 1, end:10},
          row_range: {start: 1, end:8},
          m_col_range: {start: 1, end:5},
          m_row_range: {start: 1, end:7}
        }
      ]
    }
  },
  {
    id: 5,
    title: "5221's Sheetrock",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:MAP_TYPE,
          link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.7992791740016!2d-75.16638298414594!3d39.968240179419816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c7d06852d25f%3A0x785457a937eaac12!2s1618%20Brown%20St%2C%20Philadelphia%2C%20PA%2019130!5e0!3m2!1sen!2sus!4v1633306085442!5m2!1sen!2sus",
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:3},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 1, end:3}
        },
        {
          type:VIDEO_TYPE,
          id: "5S6oVOpqNDQ",
          muted: false,
          loop: true,
          col_range: {start: 1, end:5},
          row_range: {start: 3, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 8, end:11}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote5.1.jpeg",
          img_size: 100,
          col_range: {start: 5, end:15},
          row_range: {start: 3, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 3, end:11}
        }
      ]
    }
  },
  {
    id: 6,
    title: "Last Chance",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:IMAGE_TYPE,
          src: "footnote6.1.png",
          href: "https://www.inquirer.com/philly/news/crime/nafis-owens-francisville-shooting-rainey-simmons-stokes-unsolved-20180529.html",
          img_size: 100,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 7,
    title: "Beirut in a hooptee",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "WvDFi1nebJQ",
          muted: false,
          loop: true,
          col_range: {start: 1, end:8},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 8, end:11}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote7.1.png",
          href: "https://www.phillymag.com/news/2021/07/10/philly-inferiority-complex/",
          img_pos:{x: 50, y:0},
          img_size: 100,
          col_range: {start: 9, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 8,
    title: "a biblical curse",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "NPkTR01zXZo",
          muted: false,
          loop: true,
          col_range: {start: 1, end:8},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 8, end:11}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote9.2.png",
          href: "https://en.wikipedia.org/wiki/Canaan",
          img_pos:{x: 0, y:0},
          img_size: 120,
          col_range: {start: 8, end:9},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 3, end:11}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote9.1.png",
          href: "https://www.google.com/search?q=what%27s+wrong+with+black+men&sxsrf=AOaemvJxc2NgnIOIytpzda4Y25oERFbs2Q:1633310841430&ei=eVhaYaXnGcO7ggetio-wCg&start=30&sa=N&ved=2ahUKEwjlh4uEza_zAhXDneAKHS3FA6Y4FBDw0wN6BAgBEEk&biw=896&bih=984&dpr=2",
          img_pos:{x: 0, y:0},
          img_size: 120,
          col_range: {start: 9, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 1, end:5}
        }
      ]
    }
  },
  {
    id: 9,
    title: "Family of Disease",
    url: "https://www.pulmonologyadvisor.com/home/topics/asthma/exploring-autoimmunity-in-asthma-a-clinical-overview-plus-qa/"
  },
  {
    id: 10,
    title: "Strapped electrodes",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "8UEd7GntHxg",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 11,
    title: "Lock yo doors",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "hMtZfW2z9dw",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 12,
    title: "Raisining chest",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "h0U2QUGKbSE&t=44s",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 13,
    title: "my porn torso",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "_w-hqwNWd6A",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 14,
    title: "Sweet, docile little man",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "SXCMdxvu5Sk&t=121s",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 15,
    title: "Jehovah knows the meat",
    url: "https://www.jw.org/en/bible-teachings/questions/end-of-the-world/"
  },
  {
    id: 16,
    title: "The first time she hit me",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "MwJYv5F__zw&t=750s",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 17,
    title: "Does he understand hurt?",
    url: "https://www.phillytrib.com/news/study-shows-black-men-in-philly-are-more-likely-to-experience-poor-mental-health-after/article_aba3cbd0-5f3f-5c85-916c-75cd918ea967.html"
  },
  {
    id: 18,
    title: "A good cop",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "tJXiAImt2Sk",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 19,
    title: "Arc of Decay",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "Sem-uJwGswo",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 20,
    title: "You go for a walk",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "A7ue7udsgx4",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 21,
    title: "Toothy smile",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "RfrhnjAkaRE",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 22,
    title: "Cloudy and Coconut",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "tH9-9IC7qyY",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 23,
    title: "A terrorist fist jab",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "8B5GP0AiQMc&t=923s",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 24,
    title: "The Sky",
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "TTKWkJt1QIw",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 25,
    title: "Infinity Poem",
    isGrid:true,
    grid: {
      cols: 14,
      rows: 10,
      m_cols: 7,
      m_rows: 10,
      modules:[
        {
          type:PROCESSING_TYPE,
          id: "1311025",
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 26,
    title: "Variable Poem",
    url: "https://openprocessing.org/sketch/1195392"
  },
  {
    id: 27,
    title: "Open Source",
    url: "https://www.google.com/search?q=baldwinhttps://giphy.com/gifs/esports-machine-learning-65Ehp0SVELsVqYhyJT"
  },
  {
    id: 28,
    title: "Function Poem",
    url: "https://openprocessing.org/sketch/444445"
  },
  {
    id: 29,
    title: "Startup 2021",
    url: "https://openprocessing.org/sketch/444445"
  },
  {
    id: 30,
    title: "Object Oriented Poem 4",
    url: "https://openprocessing.org/sketch/1170914"
  },
  {
    id: 31,
    title: "Series C",
    url: "https://d2zqka2on07yqq.cloudfront.net/wp-content/uploads/2020/07/series-c-funding.gif"
  },
  {
    id: 32,
    title: "The NP Problem",
    url: "https://www.youtube.com/watch?v=NtMvNh0WFVM"
  },
  {
    id: 33,
    title: "Object Oriented Poem 3",
    url: "https://openprocessing.org/sketch/1117787"
  },
  {
    id: 34,
    title: "Objective as Enemy",
    url: "https://www.youtube.com/watch?v=AGCH1GR7pPU"
  },
  {
    id: 35,
    title: "No one knows what they are doing at Microsoft",
    url: "https://www.youtube.com/watch?v=VM-2OVNt-eQ"
  },
  {
    id: 36,
    title: "It is mid-afternoon",
    url: "https://photos.google.com/photo/AF1QipNaOqVtnfZ3A9iKtAFIB1ivUy-SJqFTQaYdT-c"
  },
  {
    id: 37,
    title: "First Day of Lockdown",
    url: "https://photos.google.com/photo/AF1QipN0M-pJyk3Cdz8rdxzRnkJ0NK90Ahn8loioDSY"
  },
  {
    id: 38,
    title: "Fractal of ivy covered fingers",
    url: "https://photos.google.com/search/_tv_Videos/photo/AF1QipNeD6O5l2gvdHwylx-xiJhSNHhQvb1UgUttmtA"
  },
  {
    id: 39,
    title: "Murder me",
    url: "https://photos.google.com/photo/AF1QipO2KM0DVcVUzK3CpdHOjZDBDkZyAI5UjsXLZX0"
  },
  {
    id: 40,
    title: "Floridian tarot reader",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 41,
    title: "It's Ok",
    url: "https://www.youtube.com/watch?v=tbsIWv33JO4"
  },
  {
    id: 42,
    title: "Aretha Franklin",
    url: "https://www.youtube.com/watch?v=Fj8pY4IFoeU"
  },
  {
    id: 43,
    title: "Drake",
    url: "https://www.youtube.com/watch?v=Eru6INv-hSw"
  },
  {
    id: 44,
    title: "Kanye West",
    url: "https://www.youtube.com/watch?v=oiXdMaSAvqw"
  },
  {
    id: 45,
    title: "You don’t have to look good",
    url: "https://photos.google.com/photo/AF1QipM64DewyOQkxMb1x_0TgRCu4PBuAGL7PFHJBhI"
  },
  {
    id: 46,
    title: "Hooptee",
    baseRoute: "/opensource/hooptee",
    url: "https://www.youtube.com/watch_popup?v=F-xLBNYxdlk"
  },
  {
    id: 47,
    title: "AutoImmune",
    baseRoute: "/opensource/autoimmune",
    url: "https://www.youtube.com/watch_popup?v=F-xLBNYxdlk"
  },
  {
    id: 48,
    title: "A Strange Place For Snow",
    baseRoute: "/opensource/a_strange_place_for_snow",
    url: "https://www.youtube.com/watch_popup?v=F-xLBNYxdlk"
  },
  {
    id: 49,
    title: "No One Knows What They Are Doing At Microsoft",
    baseRoute: "/opensource/no_one_knows_what_they_are_doing_at_microsoft",
    url: "https://www.youtube.com/watch_popup?v=F-xLBNYxdlk"
  },
  {
    id: 50,
    title: "Basic Income Experiment",
    baseRoute: "/opensource/basic_income_experiment",
    url: "https://www.youtube.com/watch_popup?v=F-xLBNYxdlk"
  }
];

export default data;