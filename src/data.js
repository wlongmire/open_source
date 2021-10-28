import {  MAP_TYPE, VIDEO_TYPE, GIPHY_TYPE, IMAGE_TYPE, PROCESSING_TYPE} from './ContentGrid/constants';
// import {  COLOR_TYPE} from './ContentGrid/constants';

const data = [
  {
    id: 1,
    title: "Strawberry Mansion",
    section: 1,
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
    section: 1,
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
    section: 1,
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
    section: 1,
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
    section: 1,
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
    section: 1,
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
    section: 1,
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
    section: 1,
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
    section: 2,
    url: "https://www.pulmonologyadvisor.com/home/topics/asthma/exploring-autoimmunity-in-asthma-a-clinical-overview-plus-qa/"
  },
  {
    id: 10,
    title: "Strapped electrodes",
    section: 2,
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
    section: 2,
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
    section: 2,
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
    section: 2,
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
    section: 2,
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
    section: 2,
    url: "https://www.jw.org/en/bible-teachings/questions/end-of-the-world/"
  },
  {
    id: 16,
    title: "The first time she hit me",
    section: 2,
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
    section: 2,
    url: "https://www.phillytrib.com/news/study-shows-black-men-in-philly-are-more-likely-to-experience-poor-mental-health-after/article_aba3cbd0-5f3f-5c85-916c-75cd918ea967.html"
  },
  {
    id: 18,
    title: "A good cop",
    section: 2,
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
    section: 3,
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
    section: 3,
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
    section: 3,
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
    section: 3,
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
    section: 3,
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
    section: 3,
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
    section: 4,
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
    isGrid:true,
    section: 4,
    grid: {
      cols: 14,
      rows: 10,
      m_cols: 7,
      m_rows: 10,
      modules:[
        {
          type:IMAGE_TYPE,
          src: "footnote25.1.jpeg",
          img_pos:{x: 0, y:-20},
          img_size: 50,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:5},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:5}
        },
        {
          type:VIDEO_TYPE,
          id: "1dPFgWT2Aio",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 5, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 5, end:11}
        }
      ]
    }
  },
  {
    id: 27,
    title: "Open Source",
    isGrid:true,
    section: 4,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:GIPHY_TYPE,
          id: "65Ehp0SVELsVqYhyJT",
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:5},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:5}
        },
        {
          type:VIDEO_TYPE,
          id: "lrcdhzr2qnk",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 5, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 5, end:11}
        }
      ]
    }
  },
  {
    id: 28,
    title: "Function Poem",
    isGrid:true,
    section: 4,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:IMAGE_TYPE,
          src: "footnote28.1.png",
          href: "https://www.google.com/search?q=function&oq=function&aqs=chrome..69i57j69i60l2.1307j0j9&sourceid=chrome&ie=UTF-8",
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:5},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:5}
        },
        {
          type:VIDEO_TYPE,
          id: "Lu56xVlZ40M",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 5, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 5, end:11}
        }
      ]
    }
  },
  {
    id: 29,
    title: "Startup 2021",
    isGrid:true,
    section: 4,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:IMAGE_TYPE,
          src: "footnote29.1.png",
          img_pos:{x: 50, y:10},
          img_size: 180,
          href: "https://www.businessoffashion.com/articles/luxury/from-tiffany-blue-to-louboutin-red-the-power-of-owning-a-colour",
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:5},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:5}
        },
        {
          type:PROCESSING_TYPE,
          id: "1311095",
          col_range: {start: 1, end:15},
          row_range: {start: 5, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 5, end:11}
        }
      ]
    }
  },
  {
    id: 30,
    title: "Object Oriented Poem 4",
    isGrid:true,
    section: 4,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:IMAGE_TYPE,
          src: "footnote30.1.png",
          href: "https://www.google.com/search?q=what+is+an+object+in+programming&sxsrf=AOaemvJijl9BkH39ziU4O_7UMkXQ07bqDg%3A1634346263254&ei=FyVqYZb_DvCpytMPsI-VqAc&oq=what+is+an+object+in+programming&gs_lcp=Cgdnd3Mtd2l6EAMYADIECAAQQzIECAAQQzIKCAAQgAQQhwIQFDIECAAQQzIFCAAQgAQyBAgAEEMyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAEEcQsAM6BAgjECc6BQgAEJECOggIABCxAxCRAjoICAAQgAQQsQM6BQgAELEDOgsIABCABBCxAxCDAToHCAAQgAQQCjoECAAQCkoECEEYAFCecFjNkAFg7ZgBaAhwAngAgAHdAYgB4RaSAQY2LjE1LjGYAQCgAQHIAQjAAQE&sclient=gws-wiz",
          img_size: 170,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:5},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:5}
        },
        {
          type:VIDEO_TYPE,
          id: "QlrnjjfLkTI",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 5, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 5, end:11}
        }
      ]
    }
  },
  {
    id: 31,
    title: "Series C",
    isGrid:true,
    section: 4,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:IMAGE_TYPE,
          src: "footnote31.1.gif",
          href: "https://www.google.com/search?q=series+c+funding&oq=series+c+funding&aqs=chrome..69i57j69i60l2.3050j0j4&sourceid=chrome&ie=UTF-8",
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:5},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:5}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote31.2.jpeg",
          col_range: {start: 1, end:15},
          row_range: {start: 5, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 5, end:11}
        }
      ]
    }
  },
  {
    id: 32,
    title: "The NP Problem",
    isGrid:true,
    section: 4,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "Vhh_GeBPOhs",
          muted: true,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:3},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:2}
        },
        {
          type:VIDEO_TYPE,
          id: "Vhh_GeBPOhs",
          muted: true,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 3, end:7},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 2, end:5}
        },
        {
          type:VIDEO_TYPE,
          id: "Vhh_GeBPOhs",
          muted: false,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 5, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 5, end:11}
        }
      ]
    }
  },
  {
    id: 33,
    title: "Object Oriented Poem 3",
    isGrid:true,
    section: 4,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "G1m0aX9Lpts",
          muted: false,
          loop: false,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:5},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:5}
        },
        {
          type:VIDEO_TYPE,
          id: "KvBfld47Mmg",
          muted: true,
          loop: true,
          col_range: {start: 1, end:15},
          row_range: {start: 5, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 5, end:11}
        }
      ]
    }
  },
  {
    id: 34,
    title: "Objective as Enemy",
    isGrid:true,
    section: 4,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "hiLNdsggbqg",
          muted: false,
          loop: false,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:5},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:5}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote34.1.jpeg",
          col_range: {start: 1, end:15},
          row_range: {start: 5, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 5, end:11}
        } 
      ]
    }
  },
  {
    id: 35,
    title: "No one knows what they are doing at Microsoft",
    isGrid:true,
    section: 4,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "n9YDz-Iwgyw",
          muted: false,
          loop: false,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:5},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:5}
        },
        {
          type:VIDEO_TYPE,
          id: "AGCH1GR7pPU",
          muted: false,
          loop: false,
          col_range: {start: 1, end:15},
          row_range: {start: 5, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 5, end:11}
        } 
      ]
    }
  },
  {
    id: 36,
    title: "It is mid-afternoon",
    section: 5,
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "KgHyDvb-uOM",
          muted: false,
          loop: true,
          col_range: {start: 9, end:15},
          row_range: {start: 7, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 4, end:7}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote36.2.jpg",
          img_pos:{x: 0, y:250},
          img_size: 95,
          col_range: {start: 1, end:9},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:4}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote36.1.jpg",
          img_pos:{x: 0, y:-110},
          img_size: 110,
          col_range: {start: 9, end:15},
          row_range: {start: 1, end:7},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 4, end:11}
          
        } 
      ]
    }
  },
  {
    id: 37,
    title: "First Day of Lockdown",
    section: 5,
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:IMAGE_TYPE,
          src: "footnote37.1.png",
          href:"https://theconversation.com/three-ways-people-are-reacting-to-coronavirus-accepting-suffering-and-resisting-137345",
          img_pos:{x: 0, y:90},
          img_size: 160,
          col_range: {start: 6, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:5}
        }, 
        {
          type:VIDEO_TYPE,
          id: "bEe-HMu3s7c",
          muted: false,
          loop: true,
          col_range: {start: 6, end:15},
          row_range: {start: 3, end:8},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 2, end:5}
        },
        {
          type:VIDEO_TYPE,
          id: "--K6oeUi8CQ",
          muted: true,
          loop: true,
          col_range: {start: 1, end:6},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 5, end:11}
        }
      ]
    }
  },
  {
    id: 38,
    title: "Fractal of ivy covered fingers",
    section: 5,
    isGrid:true,
    grid: {
      gap_color: "black",
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:IMAGE_TYPE,
          src: "footnote38.1.jpg",
          // href:"https://theconversation.com/three-ways-people-are-reacting-to-coronavirus-accepting-suffering-and-resisting-137345",
          img_pos:{x: 0, y:40},
          img_size: 120,
          col_range: {start: 1, end:8},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }, 
        {
          type:IMAGE_TYPE,
          src: "footnote38.2.jpg",
          // href:"https://theconversation.com/three-ways-people-are-reacting-to-coronavirus-accepting-suffering-and-resisting-137345",
          img_pos:{x: 100, y:0},
          img_size: 135,
          col_range: {start: 8, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 39,
    title: "Murder me",
    section: 5,
    isGrid:true,
    grid: {
      gap_color: "black",
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:IMAGE_TYPE,
          src: "footnote39.1.png",
          // href:"https://theconversation.com/three-ways-people-are-reacting-to-coronavirus-accepting-suffering-and-resisting-137345",
          img_pos:{x: 100, y:0},
          img_size: 100,
          col_range: {start: 1, end:6},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 5, end:11}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote39.2.png",
          // href:"https://theconversation.com/three-ways-people-are-reacting-to-coronavirus-accepting-suffering-and-resisting-137345",
          img_pos:{x: 100, y:0},
          img_size: 100,
          col_range: {start: 10, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 5, end:8},
          m_row_range: {start: 1, end:5}
        },
        {
          type:VIDEO_TYPE,
          id: "6yz1K6uENfQ",
          muted: false,
          loop: false,
          img_pos:{x: 0, y:0},
          img_size: 100,
          col_range: {start: 6, end:10},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:5},
          m_row_range: {start: 1, end:5}
        }
      ]
    }
  },
  {
    id: 40,
    title: "Floridian tarot reader",
    section: 5,
    isGrid:true,
    grid: {
      gap_color: "black",
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "9Z0hHqoF26E&t=510s",
          muted: false,
          loop: true,
          img_pos:{x: 0, y:0},
          img_size: 100,
          col_range: {start: 1, end:8},
          row_range: {start: 1, end:7},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:2}
        },
        {
          type:VIDEO_TYPE,
          id: "bSXEVmEWYV4&t=18m13s",
          muted: false,
          loop: true,
          img_pos:{x: 0, y:0},
          img_size: 100,
          col_range: {start: 1, end:8},
          row_range: {start: 7, end:11},
          m_col_range: {start: 2, end:7},
          m_row_range: {start: 2, end:5}
        },
        {
          type:VIDEO_TYPE,
          id: "WVc1nkgKYDw&t=90s",
          muted: false,
          loop: true,
          img_pos:{x: 0, y:0},
          img_size: 100,
          col_range: {start: 8, end:15},
          row_range: {start: 7, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 5, end:9}
        },
        {
          type:VIDEO_TYPE,
          id: "75rDdXQGbaI&t=932s",
          muted: false,
          loop: true,
          img_pos:{x: 0, y:0},
          img_size: 100,
          col_range: {start: 8, end:14},
          row_range: {start: 1, end:7},  
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 9, end:11}
        }
      ]
    }
  },
  {
    id: 41,
    title: "It's Ok",
    section: 5,
    isGrid:true,
    grid: {
      gap_color: "black",
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "9ZcXBYnOafI",
          muted: false,
          loop: true,
          img_pos:{x: 0, y:0},
          img_size: 100,
          col_range: {start: 1, end:14},
          row_range: {start: 1, end:10},
          m_col_range: {start: 1, end:7},
          m_row_range: {start: 1, end:10}
        }
      ]
    }
  },
  {
    id: 42,
    title: "Aretha Franklin",
    section: 5,
    isGrid:true,
    grid: {
      gap_color: "black",
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "Fj8pY4IFoeU",
          muted: false,
          loop: true,
          img_pos:{x: 0, y:0},
          img_size: 100,
          col_range: {start: 1, end:14},
          row_range: {start: 1, end:10},
          m_col_range: {start: 1, end:7},
          m_row_range: {start: 1, end:10}
        }
      ]
    }
  },
  {
    id: 43,
    title: "Drake",
    section: 5,
    isGrid:true,
    grid: {
      gap_color: "black",
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "Eru6INv-hSw",
          muted: false,
          loop: true,
          img_pos:{x: 0, y:0},
          img_size: 100,
          col_range: {start: 1, end:14},
          row_range: {start: 1, end:10},
          m_col_range: {start: 1, end:7},
          m_row_range: {start: 1, end:10}
        }
      ]
    }
  },
  {
    id: 44,
    title: "Kanye West",
    section: 5,
    isGrid:true,
    grid: {
      gap_color: "black",
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "eRAXruayAto",
          muted: false,
          loop: true,
          img_pos:{x: 0, y:0},
          img_size: 100,
          col_range: {start: 1, end:14},
          row_range: {start: 1, end:10},
          m_col_range: {start: 1, end:7},
          m_row_range: {start: 1, end:10}
        }
      ]
    }
  },
  {
    id: 45,
    title: "You don’t have to look good",
    section: 5,
    isGrid:true,
    grid: {
      gap_color: "black",
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "XdXkKmLwDl0",
          muted: false,
          loop: true,
          img_pos:{x: 0, y:0},
          img_size: 100,
          col_range: {start: 1, end:14},
          row_range: {start: 1, end:10},
          m_col_range: {start: 1, end:7},
          m_row_range: {start: 1, end:10}
        }
      ]
    }
  },
  {
    id: 46,
    title: "Hooptee",
    baseRoute: "/opensource/hooptee",
    url: "https://www.youtube.com/watch?v=WH4qXY5sWoM"
  },
  {
    id: 47,
    title: "AutoImmune",
    baseRoute: "/opensource/autoimmune",
    url: "https://www.youtube.com/watch?v=F-xLBNYxdlk" //"https://www.youtube.com/watch_popup?v=F-xLBNYxdlk"
  },
  {
    id: 48,
    title: "A Strange Place For Snow",
    baseRoute: "/opensource/a_strange_place_for_snow",
    url: "https://www.youtube.com/watch?v=F-xLBNYxdlk" //"https://www.youtube.com/watch_popup?v=F-xLBNYxdlk"
  },
  {
    id: 49,
    title: "No One Knows What They're Doing At Microsoft",
    baseRoute: "/opensource/no_one_knows_what_they_are_doing_at_microsoft",
    url: "https://www.youtube.com/watch?v=xB4gR5b8Lq8" //"https://www.youtube.com/watch_popup?v=F-xLBNYxdlk"
  },
  {
    id: 50,
    title: "Basic Income Experiment",
    baseRoute: "/opensource/basic_income_experiment",
    url: "https://www.youtube.com/watch?v=F-xLBNYxdlk" //"https://www.youtube.com/watch_popup?v=F-xLBNYxdlk"
  }
];

export const sections = [
  {
    title:"Hooptee"
  },
  {
    title:"AutoImmune"
  },
  {
    title:"A Strange Place For Snow"
  },
  {
    title:"No one knows what they are doing at Microsoft"
  },
  {
    title:"Basic Income Experiment"
  }
];
export default data;