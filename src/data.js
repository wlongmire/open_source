import {  MAP_TYPE, VIDEO_TYPE, GIPHY_TYPE, IMAGE_TYPE, PROCESSING_TYPE} from './ContentGrid/constants';

const data = [
  {
    id: 1,
    title: "Strawberry Mansion",
    section: 1,
    attributionInfo: {
      poem: "Hooptee Intro",
      page: 1,
      attributions: [
        {
          title: "Map of Strawberry Mansion",
          titleLink: "https://www.google.com/maps?ll=39.989269,-75.174809&z=14&t=m&hl=en&gl=US&mapclient=embed&q=Strawberry+Mansion+Philadelphia,+PA",
          by: "Google Maps",
          byLink: "https://www.google.com/maps"
        },
        {
          title: "PHILADELPHIA HOODS | Strawberry Mansion on a Spring Day",
          titleLink: "https://www.youtube.com/watch?v=lKwAs-IAegQ&t=33s",
          by:"TOON215",
          byLink:"https://www.youtube.com/@TOON215"
        }
      ]
    },
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
          id: "lKwAs-IAegQ&t=33s",
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
    attributionInfo: {
      poem: "Hooptee Intro",
      page: 1,
      attributions: [
        {
          title: "Yale Grammatical Diversity Project English in North America",
          titleLink: "https://ygdp.yale.edu/phenomena/invariant-be",
          by: "Yale University",
          byLink: "https://www.yale.edu/"
        },
        {
          title: "African American English",
          titleLink: "https://www.uni-due.de/SVE/VARS_AfricanAmericanEnglish.htm",
          by:"Universität Duisburg-Essen",
          byLink:"https://www.uni-due.de/"
        },
        {
          title: "PHILLY SLANG : Talk Like You're From Philly (w/ 2 PHILLY JAWNS)",
          titleLink: "https://www.youtube.com/watch?v=SwaUa7Umu-A",
          by:"Tyneara DaVinci",
          byLink:"https://www.youtube.com/channel/UCJzkaOjFGisImQQtOlMsxeA"
        }
      ]
    },
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
    attributionInfo: {
      poem: "What's Good",
      page: 3,
      attributions: [
        {
          title: "Map of Strawberry Mansion",
          titleLink: "https://www.google.com/maps/place/Strawberry+Mansion,+Philadelphia,+PA/@39.9892679,-75.1923184,14z/data=!3m1!4b1!4m5!3m4!1s0x89c6c792ace88039:0x8b90a2aa5e25a819!8m2!3d39.9924637!4d-75.1796005",
          by: "Google Map",
          byLink: "www.google.com/maps"
        },
        {
          title: "Philly Gripped By Violence Yet Again as Murder Total Hits 98 | NBC10 Philadelphia",
          titleLink: "https://www.youtube.com/watch?v=HbL5J9AGflc",
          by:"NBC10 Philadelphia",
          byLink:"https://www.youtube.com/channel/UCD158fKWVgwCkOooKEoJ1kw"
        },
        {
          title: "Philly style double dutch",
          titleLink: "https://www.youtube.com/watch?v=mftYzullK-U",
          by:"crystal4597",
          byLink:"https://www.youtube.com/channel/UCahH7C31_vSXwXzf8YKJnOA"
        }
      ]
    },
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
    attributionInfo: {
      poem: "Philadelphia Poem",
      page: 4,
      attributions: [
        {
          title: "Open Source : North Philly Back Alley",
          titleLink: "https://www.youtube.com/watch?v=b0y-uHO4M8A",
          by: "Warren C. Longmire",
          byLink: "https://www.youtube.com/channel/UCN_EevFPOuc-jiZRqWr24eg"
        },
        {
          title: "Philadelphia’s imminent vacant land plan: major progress, or major letdown?",
          titleLink: "https://whyy.org/articles/philadelphias-imminent-vacant-land-plan-major-progress-or-major-letdown/",
          by:"Patrick Kerkstra - WHYY",
          byLink:"https://whyy.org/articles/philadelphias-imminent-vacant-land-plan-major-progress-or-major-letdown/"
        },
        {
          title: "Philadelphia’s ‘Building Ghosts’ Have a Lot to Say",
          titleLink: "https://www.atlasobscura.com/articles/architectural-history-of-philadelphia-rowhouses",
          by:"Karen Chernick - Atlas Obscura",
          byLink:"https://www.atlasobscura.com/users/karen-chernick?view=articles"
        }
      ]
    },
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
          type:VIDEO_TYPE,
          id:"b0y-uHO4M8A",
          muted: false,
          loop: true,
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
    attributionInfo: {
      poem: "Brown Off Fairmount",
      page: 7,
      attributions: [
        {
          title: "Map of 1618 Brown St",
          titleLink: "https://www.google.com/maps?ll=39.96824,-75.164194&z=15&t=m&hl=en&gl=US&mapclient=embed&q=1618+Brown+St+Philadelphia,+PA+19130",
          by: "Google Maps",
          byLink: "https://www.google.com/maps"
        },
        {
          title: "Photo of Former Francisville Apartment",
          titleLink: "#",
          by:"Warren C. Longmire",
          byLink:"#"
        },
        {
          title:"Exploring Fairmount: A Real Estate Tour of Philly",
          titleLink:"https://www.youtube.com/watch?v=kUvoJMw8Ngo&t=37s",
          by:"LIVING IN PHILADELPHIA",
          byLink:"https://www.youtube.com/@realestatebul"
        }
      ]
    },
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "kUvoJMw8Ngo&t=37s",
          muted: false,
          loop: true,
          col_range: {start: 1, end:5},
          row_range: {start: 3, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 8, end:11}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote5.1.jpeg",
          img_size: 100,
          col_range: {start: 5, end:15},
          row_range: {start: 3, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 3, end:8}
        },
        {
          type:MAP_TYPE,
          link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.7992791740016!2d-75.16638298414594!3d39.968240179419816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c7d06852d25f%3A0x785457a937eaac12!2s1618%20Brown%20St%2C%20Philadelphia%2C%20PA%2019130!5e0!3m2!1sen!2sus!4v1633306085442!5m2!1sen!2sus",
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:3},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:3}
        }
      ]
    }
  },
  {
    id: 6,
    title: "Last Chance",
    section: 1,
    attributionInfo: {
      poem: "Hood Bar",
      page: 9,
      attributions: [
        {
          title: "Map of 1618 Brown St",
          titleLink: "https://www.google.com/maps?ll=39.96824,-75.164194&z=15&t=m&hl=en&gl=US&mapclient=embed&q=1618+Brown+St+Philadelphia,+PA+19130",
          by: "Google Maps",
          byLink: "https://www.google.com/maps"
        },
        {
          title: "3 charged, none convicted: Why a North Philly murder remains unsolved",
          titleLink: "https://www.inquirer.com/philly/news/crime/nafis-owens-francisville-shooting-rainey-simmons-stokes-unsolved-20180529.html",
          by:"Mensah M. Dean - The Philadelphia Inquirer",
          byLink:"https://www.inquirer.com/author/dean_mensah_m/"
        }
      ]
    },
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      gap_color:"black",
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:MAP_TYPE,
          link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1528.8197271279337!2d-75.16662920227549!3d39.97181305102556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda58642df922ba4e!2sLast%20Chance%20Lounge!5e0!3m2!1sen!2sus!4v1637524458399!5m2!1sen!2sus",
          col_range: {start: 1, end:6},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:4},
          m_row_range: {start: 1, end:11}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote6.2.png",
          img_size: 200,
          img_pos:{x: 65, y:0},
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 4, end:8},
          m_row_range: {start: 1, end:4}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote6.3.png",
          img_size: 150,
          img_pos:{x: 65, y:48},
          // href: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1528.8197271279337!2d-75.16662920227549!3d39.97181305102556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xda58642df922ba4e!2sLast%20Chance%20Lounge!5e0!3m2!1sen!2sus!4v1637524458399!5m2!1sen!2sus",
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 4, end:8},
          m_row_range: {start: 8, end:11}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote6.4.png",
          img_size: 105,
          img_pos:{x: 0, y:0},
          href: "https://www.inquirer.com/philly/news/crime/nafis-owens-francisville-shooting-rainey-simmons-stokes-unsolved-20180529.html",
          col_range: {start: 6, end:15},
          row_range: {start: 8, end:11},
          m_col_range: {start: 4, end:8},
          m_row_range: {start: 4, end:8}
        }
      ]
    }
  },
  {
    id: 7,
    title: "Beirut in a hooptee",
    section: 1,
    attributionInfo: {
      poem: "Hooptee",
      page: 13,
      attributions: [
        {
          title: "My Neighbors Can’t Believe I Left San Francisco for Philly. I Can’t Believe I Waited This Long",
          titleLink: "https://www.phillymag.com/news/2021/07/10/philly-inferiority-complex/",
          by: "Jo Piazza | Philadelphia Magazine",
          byLink: "https://www.phillymag.com/author/jo-piazza/"
        },
        {
          title: "Streets of Philadelphia, Kensington Avenue, What happened on Friday, July 09 2021.",
          titleLink: "https://www.youtube.com/watch?v=WvDFi1nebJQ&t=65s",
          by:"kimgary",
          byLink:"https://www.youtube.com/channel/UCOuf_kStlWnhuauw4ce8l-w"
        }
      ]
    },
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
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 8, end:11}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote7.1.png",
          href: "https://www.phillymag.com/news/2021/07/10/philly-inferiority-complex/",
          img_pos:{x: 0, y:0},
          img_size: 150,
          col_range: {start: 9, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:8}
        }
      ]
    }
  },
  {
    id: 8,
    title: "the biblical curse",
    section: 1,
    attributionInfo: {
      poem: "Brown Off Fairmount",
      page: 7,
      attributions: [
        {
          title: 'Google Search for "What\'s wrong with black men"',
          titleLink: "https://www.google.com/search?q=what%27s+wrong+with+black+men&sxsrf=AOaemvJxc2NgnIOIytpzda4Y25oERFbs2Q:1633310841430&ei=eVhaYaXnGcO7ggetio-wCg&start=30&sa=N&ved=2ahUKEwjlh4uEza_zAhXDneAKHS3FA6Y4FBDw0wN6BAgBEEk&biw=896&bih=984&dpr=2",
          by: "Google",
          byLink: "https://www.google.com"
        },
        {
          title: `Youtube search for "What\'s wrong with black men"`,
          titleLink: "https://www.youtube.com/results?search_query=what%27s+wrong+with+black+men",
          by:"Youtube",
          byLink:"https://www.youtube.com"
        },
        {
          title: "Dear Black Man, ARE YOU CURSED??",
          titleLink: "https://www.youtube.com/watch?v=NPkTR01zXZo&t=1s",
          by:"james henderson",
          byLink:"https://www.youtube.com/channel/UCNFfE1KTra0UKEDwmb87f6Q"
        }
      ]
    },
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
          src: "footnote8.2.png",
          href: "https://en.wikipedia.org/wiki/Canaan",
          img_pos:{x: 0, y:0},
          img_size: 120,
          col_range: {start: 8, end:9},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 3, end:8}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote8.1.png",
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
    attributionInfo: {
      poem: "Brown Off Fairmount",
      page: 7,
      attributions: [
        {
          title: "Asthma rates among Philadelphia Boys",
          titleLink: "https://www.phila.gov/media/20190314105459/Brotherly-Love_Health-Of-Black-Men-And-Boys_3_19.pdf",
          by: "Brotherly Love: Health Of Black Men and Boys in Philadelphia",
          byLink: "https://www.phila.gov/media/20190314105459/Brotherly-Love_Health-Of-Black-Men-And-Boys_3_19.pdf"
        },
        {
          title: "Asthma Disparities and Differential Responses to Therapy",
          titleLink: "https://www.youtube.com/watch?v=9pAUe2k7uKI&t=403s",
          by:"breatherville",
          byLink:"https://www.youtube.com/channel/UCDJNzwnvP_Mit8bOQZ0nl_g"
        }
      ]
    },
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "9pAUe2k7uKI&t=403s",
          col_range: {start: 1, end:11},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 6, end:11}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote9.3.png",
          href: "https://www.pulmonologyadvisor.com/home/topics/asthma/exploring-autoimmunity-in-asthma-a-clinical-overview-plus-qa/",
          img_pos:{x: 0, y:0},
          img_size: 100,
          col_range: {start: 11, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 1, end:6}
        }
      ]
    }
  },
  {
    id: 10,
    title: "Strapped electrodes",
    section: 2,
    attributionInfo: {
      poem: "Autoimmune 1",
      page: 30,
      attributions: [
        {
          title: "New form of electroshock to treat depression",
          titleLink: "https://www.youtube.com/watch?v=8UEd7GntHxg",
          by: "WXYZ-TV Detroit | Channel 7",
          byLink: "https://www.youtube.com/channel/UC6HyKpYWmX4zsy6_bJZIK7A"
        },
        {
          title: "Study shows Black men in Philly are more likely to experience poor mental health after severe injury",
          titleLink: "https://www.phillytrib.com/news/study-shows-black-men-in-philly-are-more-likely-to-experience-poor-mental-health-after/article_aba3cbd0-5f3f-5c85-916c-75cd918ea967.html",
          by:"Sojourner Ahébée | The Philadelphia Tribune",
          byLink:"https://www.phillytrib.com/"
        }
      ]
    },
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
          col_range: {start: 1, end:11},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 1, end:4}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote10.2.png",
          href:"https://www.phillytrib.com/news/study-shows-black-men-in-philly-are-more-likely-to-experience-poor-mental-health-after/article_aba3cbd0-5f3f-5c85-916c-75cd918ea967.html",
          img_pos:{x: 20, y:0},
          img_size: 100,
          col_range: {start: 11, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 4, end:11}
        }
      ]
    }
  },
  {
    id: 11,
    title: "Lock yo doors",
    section: 2,
    attributionInfo: {
      poem: "Untitled (A lack of love...)",
      page: 31,
      attributions: [
        {
          title: "BED INTRUDER SONG!!!",
          titleLink: "https://www.youtube.com/watch?v=hMtZfW2z9dw",
          by: "schmoyoho",
          byLink: "https://www.youtube.com/channel/UCNYrK4tc5i1-eL8TXesH2pg"
        },
        {
          title: "Chris Rock - Black People vs. N****** [クリス・ロックー黒人VS.ニガー]",
          titleLink: "https://www.youtube.com/watch?v=_w-hqwNWd6A",
          by:"KUG Studio",
          byLink:"https://www.youtube.com/channel/UCvQJkgoO9d0qRHsBXcgDZBw"
        },
        {
          title: "Black Buck Article",
          titleLink: "https://en.wikipedia.org/wiki/Black_Buck",
          by:"From Wikipedia, the free encyclopedia",
          byLink:"https://en.wikipedia.org/wiki/Main_Page"
        },
      ]
    },
    isGrid:true,
    grid: {
      gap_color:"black",
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
          col_range: {start: 1, end:11},
          row_range: {start: 1, end:7},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 1, end:4}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote11.2.png",
          href:"https://en.wikipedia.org/wiki/Black_Buck",
          img_pos:{x: 35, y:20},
          img_size: 200,
          col_range: {start: 11, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 4, end:8}
        },
        {
          type:VIDEO_TYPE,
          id: "_w-hqwNWd6A",
          muted: false,
          loop: true,
          col_range: {start: 1, end:11},
          row_range: {start: 7, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 8, end:11}
        }
      ]
    }
  },
  {
    id: 12,
    title: "Raisining chest",
    section: 2,
    attributionInfo: {
      poem: "Autoimmune 2",
      page: 32,
      attributions: [
        {
          title: "Young men of color in Philly stay home to stay safe. A new study reveals a high cost.",
          titleLink: "https://www.inquirer.com/news/philadelphia/temple-university-professor-jamie-fader-criminology-dont-have-time-for-drama-20210311.html",
          by: "Samantha Melamed | The Philadelphia Inquirer",
          byLink: "https://www.inquirer.com/author/melamed_samantha/"
        },
        {
          title: "Black Men Have the Shortest Lifespans of Any Americans. This Theory Explains Why.",
          titleLink: "https://www.youtube.com/watch?v=FTOGwn6DSs4",
          by:"ProPublica",
          byLink:"https://www.youtube.com/channel/UCtCL58_DaVdVRmev3yHK7pg"
        }
      ]
    },
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "FTOGwn6DSs4",
          muted: false,
          loop: true,
          col_range: {start: 1, end:7},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 8, end:11}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote12.1.png",
          href:"https://www.inquirer.com/news/philadelphia/temple-university-professor-jamie-fader-criminology-dont-have-time-for-drama-20210311.html",
          col_range: {start: 7, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 1, end:8}
        }
      ]
    }
  },
  {
    id: 13,
    title: "my porn torso",
    section: 2,
    attributionInfo: {
      poem: "Autoimmune 3",
      page: 34,
      attributions: [
        {
          title: "Portrait without eyes",
          titleLink: "#",
          by: "Warren C. Longmire",
          byLink: "#"
        },
        {
          title: "Hurricane Weeds",
          titleLink: "https://www.youtube.com/watch?v=feCOwXz8acY&t=4s",
          by:"Warren C. Longmire",
          byLink:"https://www.youtube.com/channel/UCN_EevFPOuc-jiZRqWr24eg"
        },
        {
          title: "From The Man-Not by Tommy J. Curry",
          titleLink: "https://www.amazon.com/Man-Not-Class-Genre-Dilemmas-Manhood/dp/1439914869/ref=sr_1_1?crid=3IS5IVC4YYC3&keywords=the+man-not+by+dr+tommy+j+curry&qid=1637724694&qsid=134-1529633-0126933&sprefix=the+man-not%2Caps%2C173&sr=8-1&sres=1439914869%2C143847072X%2CB01DBTFO98%2CB082KZ8ZGM%2CB083JM99Q8%2CB078K93HFD%2CB01BMDAVIY%2CB078SH8WGC%2CB07FZ8S74R%2CB094PFBWWB%2CB01I7BJD9C%2CB0112M60KI%2CB01FYD2CP8%2CB01KE592JU%2CB06W5PD1KY%2CB08T959SZJ&srpt=ABIS_BOOK",
          by:"Tommy J. Curry",
          byLink:"https://www.amazon.com/Tommy-J-Curry/e/B074M4RX2G/ref=dp_byline_cont_book_1"
        },
      ]
    },
    isGrid:true,
    grid: {
      gap_color:"black",
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:IMAGE_TYPE,
          //article
          src: "footnote13.2.jpeg",
          img_pos:{x: 20, y:60},
          img_size: 120,
          col_range: {start: 11, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 1, end:5}
        },
        {
          type:VIDEO_TYPE,
          id: "feCOwXz8acY",
          muted: false,
          loop: true,
          col_range: {start: 1, end:11},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:10},
          m_row_range: {start: 5, end:8}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote13.1.jpg",
          img_pos:{x: 20, y:0},
          img_size: 135,
          col_range: {start: 11, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 8, end:11}
        }
      ]
    }
  },
  {
    id: 14,
    title: "Sweet, docile little man",
    attributionInfo: {
      poem: "Untitled (Boyfriend called a cool tool)",
      page: 35,
      attributions: [
        {
          title: "Black Men Have Never Been High Value Men",
          titleLink: "https://www.youtube.com/watch?v=hgT4qKY-Zzk&t=300s",
          by: "Cynthia G",
          byLink: "https://www.youtube.com/channel/UC5ksavsuuri0tJpcVS2gCBg"
        },
        {
          title: "From The Man-Not by Tommy J. Curry",
          titleLink: "https://www.amazon.com/Man-Not-Class-Genre-Dilemmas-Manhood/dp/1439914869/ref=sr_1_1?crid=3IS5IVC4YYC3&keywords=the+man-not+by+dr+tommy+j+curry&qid=1637724694&qsid=134-1529633-0126933&sprefix=the+man-not%2Caps%2C173&sr=8-1&sres=1439914869%2C143847072X%2CB01DBTFO98%2CB082KZ8ZGM%2CB083JM99Q8%2CB078K93HFD%2CB01BMDAVIY%2CB078SH8WGC%2CB07FZ8S74R%2CB094PFBWWB%2CB01I7BJD9C%2CB0112M60KI%2CB01FYD2CP8%2CB01KE592JU%2CB06W5PD1KY%2CB08T959SZJ&srpt=ABIS_BOOK",
          by:"Tommy J. Curry",
          byLink:"https://www.amazon.com/Tommy-J-Curry/e/B074M4RX2G/ref=dp_byline_cont_book_1"
        }
      ]
    },
    isGrid:true,
    section: 2,
    grid: {
      gap_color:"black",
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:IMAGE_TYPE,
          src: "footnote14.1.jpeg",
          img_pos:{x: 20, y:30},
          img_size: 110,
          col_range: {start: 11, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 1, end:8}
        },
        {
          type:VIDEO_TYPE,
          id: "SXCMdxvu5Sk&t=121s",
          muted: false,
          loop: true,
          col_range: {start: 1, end:11},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 8, end:11}
        }
      ]
    }
  },
  {
    id: 15,
    title: "Jehovah knows the meat",
    section: 2,
    attributionInfo: {
      poem: "Autoimmune 4",
      page: 7,
      attributions: [
        {
          title: "What is Sin?",
          titleLink: "https://www.jw.org/en/bible-teachings/questions/what-is-sin/",
          by: "jw.org",
          byLink: "https://www.jw.org/"
        },
        {
          title: "From The Man-Not by Tommy J. Curry",
          titleLink: "https://www.amazon.com/Man-Not-Class-Genre-Dilemmas-Manhood/dp/1439914869/ref=sr_1_1?crid=3IS5IVC4YYC3&keywords=the+man-not+by+dr+tommy+j+curry&qid=1637724694&qsid=134-1529633-0126933&sprefix=the+man-not%2Caps%2C173&sr=8-1&sres=1439914869%2C143847072X%2CB01DBTFO98%2CB082KZ8ZGM%2CB083JM99Q8%2CB078K93HFD%2CB01BMDAVIY%2CB078SH8WGC%2CB07FZ8S74R%2CB094PFBWWB%2CB01I7BJD9C%2CB0112M60KI%2CB01FYD2CP8%2CB01KE592JU%2CB06W5PD1KY%2CB08T959SZJ&srpt=ABIS_BOOK",
          by:"Tommy J. Curry",
          byLink:"https://www.amazon.com/Tommy-J-Curry/e/B074M4RX2G/ref=dp_byline_cont_book_1"
        }
      ]
    },
    isGrid:true, 
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:IMAGE_TYPE,
          src: "footnote15.2.jpeg",
          img_pos:{x:35, y:-40},
          img_size: 110,
          col_range: {start: 11, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 4, end:11}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote15.1.png",
          href: "https://www.jw.org/en/bible-teachings/questions/what-is-sin/",
          col_range: {start: 1, end:11},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 1, end:8}
          
        }
      ]
    }
  },
  {
    id: 16,
    title: "The first time she hit me",
    section: 2,
    attributionInfo: {
      poem: "Untitled (Why not get what your deserve?)",
      page: 38,
      attributions: [
        {
          title: "Dr. Tommy Curry: The Man Not",
          titleLink: "https://www.youtube.com/watch?v=MwJYv5F__zw&t=756s",
          by: "Question Lane",
          byLink: "https://www.youtube.com/channel/UCEMGVViAGMvZyQOF4X4OjYw"
        },
        {
          title: "From The Man-Not by Tommy J. Curry",
          titleLink: "https://www.amazon.com/Man-Not-Class-Genre-Dilemmas-Manhood/dp/1439914869/ref=sr_1_1?crid=3IS5IVC4YYC3&keywords=the+man-not+by+dr+tommy+j+curry&qid=1637724694&qsid=134-1529633-0126933&sprefix=the+man-not%2Caps%2C173&sr=8-1&sres=1439914869%2C143847072X%2CB01DBTFO98%2CB082KZ8ZGM%2CB083JM99Q8%2CB078K93HFD%2CB01BMDAVIY%2CB078SH8WGC%2CB07FZ8S74R%2CB094PFBWWB%2CB01I7BJD9C%2CB0112M60KI%2CB01FYD2CP8%2CB01KE592JU%2CB06W5PD1KY%2CB08T959SZJ&srpt=ABIS_BOOK",
          by:"Tommy J. Curry",
          byLink:"https://www.amazon.com/Tommy-J-Curry/e/B074M4RX2G/ref=dp_byline_cont_book_1"
        }
      ]
    },
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:IMAGE_TYPE,
          src: "footnote16.1.jpeg",
          img_pos:{x: 20, y:0},
          img_size: 100,
          col_range: {start: 11, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 1, end:7}
        },
        {
          type:VIDEO_TYPE,
          id: "MwJYv5F__zw&t=750s",
          muted: false,
          loop: true,
          col_range: {start: 1, end:11},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 7, end:11}
        }
      ]
    }
  },
  {
    id: 17,
    title: "Does he understand hurt?",
    section: 2,
    attributionInfo: {
      poem: "Untitled (Why not get what your deserve?)",
      page: 38,
      attributions: [
        {
          title: "Who is the Nigger? -James Baldwin (clip)",
          titleLink: "https://www.youtube.com/watch?v=L0L5fciA6AU",
          by: "twreflect",
          byLink: "https://www.youtube.com/channel/UCd807WaChWS8REGsTb6cR3A"
        },
        {
          title: "From The Man-Not by Tommy J. Curry",
          titleLink: "https://www.amazon.com/Man-Not-Class-Genre-Dilemmas-Manhood/dp/1439914869/ref=sr_1_1?crid=3IS5IVC4YYC3&keywords=the+man-not+by+dr+tommy+j+curry&qid=1637724694&qsid=134-1529633-0126933&sprefix=the+man-not%2Caps%2C173&sr=8-1&sres=1439914869%2C143847072X%2CB01DBTFO98%2CB082KZ8ZGM%2CB083JM99Q8%2CB078K93HFD%2CB01BMDAVIY%2CB078SH8WGC%2CB07FZ8S74R%2CB094PFBWWB%2CB01I7BJD9C%2CB0112M60KI%2CB01FYD2CP8%2CB01KE592JU%2CB06W5PD1KY%2CB08T959SZJ&srpt=ABIS_BOOK",
          by:"Tommy J. Curry",
          byLink:"https://www.amazon.com/Tommy-J-Curry/e/B074M4RX2G/ref=dp_byline_cont_book_1"
        }
      ]
    },
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:IMAGE_TYPE,
          src: "footnote17.2.jpg",
          img_pos:{x: 20, y:0},
          img_size: 150,
          col_range: {start: 11, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 1, end:8}
        },
        {
          type:VIDEO_TYPE,
          id: "L0L5fciA6AU",
          muted: false,
          loop: true,
          col_range: {start: 1, end:11},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 8, end:11}
        }
      ]
    }
  },
  {
    id: 18,
    title: "A good cop",
    section: 2,
    attributionInfo: {
      poem: "Autoimmune 5",
      page: 39,
      attributions: [
        {
          title: "Why abused black men are staying silent. - BBC News",
          titleLink: "https://www.youtube.com/watch?time_continue=1&v=tJXiAImt2Sk",
          by: "BBC News",
          byLink: "https://www.youtube.com/channel/UC16niRr50-MSBwiO3YDb3RA"
        },
        {
          title: "From The Man-Not by Tommy J. Curry",
          titleLink: "https://www.amazon.com/Man-Not-Class-Genre-Dilemmas-Manhood/dp/1439914869/ref=sr_1_1?crid=3IS5IVC4YYC3&keywords=the+man-not+by+dr+tommy+j+curry&qid=1637724694&qsid=134-1529633-0126933&sprefix=the+man-not%2Caps%2C173&sr=8-1&sres=1439914869%2C143847072X%2CB01DBTFO98%2CB082KZ8ZGM%2CB083JM99Q8%2CB078K93HFD%2CB01BMDAVIY%2CB078SH8WGC%2CB07FZ8S74R%2CB094PFBWWB%2CB01I7BJD9C%2CB0112M60KI%2CB01FYD2CP8%2CB01KE592JU%2CB06W5PD1KY%2CB08T959SZJ&srpt=ABIS_BOOK",
          by:"Tommy J. Curry",
          byLink:"https://www.amazon.com/Tommy-J-Curry/e/B074M4RX2G/ref=dp_byline_cont_book_1"
        }
      ]
    },
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:IMAGE_TYPE,
          src: "footnote18.2.jpg",
          img_pos:{x: 20, y:0},
          img_size: 120,
          col_range: {start: 11, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 1, end:8}
        },
        {
          type:VIDEO_TYPE,
          id: "tJXiAImt2Sk",
          muted: false,
          loop: true,
          col_range: {start: 1, end:11},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:14},
          m_row_range: {start: 8, end:11}
        }
      ]
    }
  },
  {
    id: 19,
    title: "Arc of Decay",
    section: 3,
    attributionInfo: {
      poem: "Bitter Offerings",
      page: 7,
      attributions: [
        {
          title: "Young Fathers - In My View (Official Video)",
          titleLink: "https://www.youtube.com/watch?v=qQFPikYSalg",
          by: "YOUNG FATHERS",
          byLink: "https://www.youtube.com/channel/UC5VzbZjtOxnjoEFog5rb2kg"
        },
        {
          title: "Photo of Mindblown image at the De Young Musuem",
          titleLink: "#",
          by:"Warren C. Longmire",
          byLink:"#"
        }
      ]
    },
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "qQFPikYSalg",
          muted: false,
          loop: true,
          col_range: {start: 1, end:8},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:5}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote19.1.jpeg",
          img_pos:{x: 50, y:40},
          img_size: 105,
          col_range: {start: 8, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 5, end:11}
        }
      ]
    }
  },
  {
    id: 20,
    title: "You go for a walk",
    section: 3,
    attributionInfo: {
      poem: "A Strange Place for Snow",
      page: 7,
      attributions: [
        {
          title: "Map of 1618 Brown St",
          titleLink: "https://www.google.com/maps?ll=39.96824,-75.164194&z=15&t=m&hl=en&gl=US&mapclient=embed&q=1618+Brown+St+Philadelphia,+PA+19130",
          by: "Google Maps",
          byLink: "https://www.google.com/maps"
        },
        {
          title: "Walking the cow. (original video. TV On the Radio Cover of Daniel Johnston",
          titleLink: "https://www.youtube.com/watch?v=tb-rudMA32k",
          by:"cocolenstv",
          byLink:"https://www.youtube.com/channel/UCtD0mNLoe1gdByCt8OgVoFQ"
        }
      ]
    },
    isGrid:true,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "tb-rudMA32k",
          muted: false,
          loop: true,
          col_range: {start: 1, end:8},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 7, end:11}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote20.1.jpeg",
          img_pos:{x: 20, y:50},
          img_size: 110,
          col_range: {start: 8, end:15},
          row_range: {start: 1, end:11},

          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:7}
          
        }
      ]
    }
  },
  {
    id: 21,
    title: "Toothy smile",
    section: 3,
    attributionInfo: {
      poem: "Fuckboi",
      page: 49,
      attributions: [
        {
          title: "Tyler, The Creator: NPR Music Tiny Desk Concert",
          titleLink: "https://www.google.com/maps?ll=39.96824,-75.164194&z=15&t=m&hl=en&gl=US&mapclient=embed&q=1618+Brown+St+Philadelphia,+PA+19130",
          by: "NPR Music",
          byLink: "https://www.youtube.com/channel/UC4eYXhJI4-7wSWc8UNRwD4A"
        },
        {
          title: "Self-Portrait with Teeth",
          titleLink: "#",
          by:"Warren C. Longmire",
          byLink:"#"
        },
        {
          title: "Jukebox Challenge Creator Follow @Djjukeboxlive &25 hfh4s T Lo All day",
          titleLink: "https://www.youtube.com/watch?v=kZz6jrt_ZbU",
          by: "Da Edge",
          byLink: "https://www.youtube.com/channel/UCwrFNQf5efrW3c9IdcTV8Kw"
        }
      ]
    },
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
          src: "footnote21.1.jpeg",
          img_pos:{x: -210, y:40},
          img_size: 175,
          col_range: {start: 8, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        },
        {
          type:VIDEO_TYPE,
          id: "N1w-hDiJ4dM&t=28s",
          muted: false,
          loop: true,
          col_range: {start: 1, end:8},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:5}
        },
        {
          type:VIDEO_TYPE,
          id: "kZz6jrt_ZbU",
          muted: true,
          loop: true,
          col_range: {start: 8, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 7, end:11}
        }
      ]
    }
  },
  {
    id: 22,
    title: "Cloudy and Coconut",
    isGrid:true,
    attributionInfo: {
      poem: "Tree of the Knowledge of Good & Bad",
      page: 51,
      attributions: [
        {
          title: "Alabama Shakes - Miss you",
          titleLink: "https://www.youtube.com/watch?v=NHA2f0hzMTE&t=1s",
          by: "Diablo5Rojo",
          byLink: "https://www.youtube.com/channel/UCuVgQkR9ukMxGQoXPntpw6A"
        },
        {
          title: "Rihanna - We Found Love ft. Calvin Harris",
          titleLink: "https://www.youtube.com/watch?v=tg00YEETFzg",
          by:"Rihanna",
          byLink:"https://www.youtube.com/channel/UCcgqSM4YEo5vVQpqwN-MaNw"
        }
      ]
    },
    section: 3,
    grid: {
      gap_color: "black",
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "NHA2f0hzMTE",
          muted: false,
          loop: true,
          col_range: {start: 1, end:8},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 5, end:11}
        },
        {
          type:VIDEO_TYPE,
          id: "tg00YEETFzg",
          muted: true,
          loop: true,
          col_range: {start: 8, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:5}
        }
      ]
    }
  },
  {
    id: 23,
    title: "A terrorist fist jab",
    isGrid:true,
    attributionInfo: {
      poem: "Instructions for a Secret Handshake",
      page: 53,
      attributions: [
        {
          title: "Modified Version of Sade Cover art",
          titleLink: "#",
          by: "Warren C. Longmire",
          byLink: "#"
        },
        {
          title: 'Bosley - "Just Like You" Official Video',
          titleLink: "https://www.youtube.com/watch?v=UlS7UjFQCrM&feature=emb_title",
          by:"Bosley Music",
          byLink:"https://www.youtube.com/channel/UCajqJaNgMGRi1lM6G6994fA"
        }
      ]
    },
    section: 3,
    grid: {
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:VIDEO_TYPE,
          id: "UlS7UjFQCrM",
          muted: false,
          loop: true,
          col_range: {start: 1, end:8},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 8, end:11}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote23.1.jpg",
          img_pos:{x: 20, y:50},
          img_size: 125,
          col_range: {start: 8, end:15},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:8}
        }
      ]
    }
  },
  {
    id: 24,
    title: "The Sky",
    attributionInfo: {
      poem: "Never Talk About Your Pain or X",
      page: 59,
      attributions: [
        {
          title: "Santigold - L.E.S Artistes (Official Music Video)",
          titleLink: "https://www.youtube.com/watch?v=ciJDA0tcQfs&t=5s",
          by: "Santigold",
          byLink: "https://www.youtube.com/channel/UCai-drGTTaIIvJ6OTnn5ixw"
        },
        {
          title: "Photo of MACHO NNE 15 Image | Zeitz Musuem",
          titleLink: "https://www.collater.al/en/extravagant-glasses-cyrus-kabiru/",
          by:"Cyrus Kabiru",
          byLink:"https://www.collater.al/en/extravagant-glasses-cyrus-kabiru/"
        }
      ]
    },
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
          id: "ciJDA0tcQfs",
          muted: false,
          loop: true,
          col_range: {start: 1, end:6},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 8, end:11}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote24.1.jpeg",
          img_pos:{x: 45, y:40},
          img_size: 150,
          col_range: {start: 6, end:10},
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:8}
        },
        {
          type:VIDEO_TYPE,
          id: "ciJDA0tcQfs",
          muted: true,
          loop: true,
          col_range: {start: 10, end:15 },
          row_range: {start: 1, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 8, end:11}
        },
      ]
    }
  },
  {
    id: 25,
    title: "Infinity Poem",
    attributionInfo: {
      poem: "Brown Off Fairmount",
      page: 7,
      attributions: [
        {
          title: "Fractal land P5 Program",
          titleLink: "https://openprocessing.org/sketch/1311025",
          by: "Warren C. Longmire",
          byLink: "https://openprocessing.org/sketch/1311025"
        }
      ]
    },
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
    attributionInfo: {
      poem: "Variable Poem",
      page: 66,
      attributions: [
        {
          title: "Photo of Andy Warhol / Apple Colaboration",
          titleLink: "#",
          by: "The Andy Warhol Museum",
          byLink: "https://www.warhol.org/museum/?utm_source=google&utm_medium=cpc&utm_campaign=brand-search-mb&utm_content=brand_terms"
        },
        {
          title: 'Ep.2 Processing art tutorial | GRID 02 (Creative coding and procedural art)',
          titleLink: "https://www.youtube.com/watch?v=1dPFgWT2Aio",
          by:"thedotisblack creative coding",
          byLink:"https://www.youtube.com/channel/UCX4GSh1gpRuugPpjxu0gLmw"
        }
      ]
    },
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
    attributionInfo: {
      poem: "Open Source",
      page: 67,
      attributions: [
        {
          title: "Artificial Intelligence Tech GIF",
          titleLink: "https://giphy.com/gifs/esports-machine-learning-65Ehp0SVELsVqYhyJT?utm_source=iframe&utm_medium=embed&utm_campaign=Embeds&utm_term=http%3A%2F%2Flocalhost%3A3000%2F",
          by: "Woodblock",
          byLink: "https://giphy.com/woodblock"
        },
        {
          title: "Richard Stallman: Free v Open Source Software",
          titleLink: "https://www.youtube.com/watch?v=lrcdhzr2qnk",
          by:"Tech Perspectives",
          byLink:"https://www.youtube.com/channel/UCwbAMcdzAm1GKKW9xrdDL3Q"
        }
      ]
    },
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
    attributionInfo: {
      poem: "Function Poem",
      page: 68,
      attributions: [
        {
          title: "function google search",
          titleLink: "https://www.google.com/search?q=function&oq=function&aqs=chrome..69i57j69i60l2.1307j0j9&sourceid=chrome&ie=UTF-8",
          by: "Google",
          byLink: "https://www.google.com"
        },
        {
          title: "OpenAI Plays Hide and Seek…and Breaks The Game! 🤖",
          titleLink: "https://www.youtube.com/watch?time_continue=6&v=Lu56xVlZ40M&feature=emb_title",
          by:"Two Minute Papers",
          byLink:"https://www.youtube.com/watch?v=3wHbeq61Wn0"
        }
      ]
    },
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
          img_pos:{x: 0, y:0},
          img_size: 200,
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
    attributionInfo: {
      poem: "Startup 2021",
      page: 69,
      attributions: [
        {
          title: "From Tiffany Blue to Louboutin Red: The Power of Owning a Colour",
          titleLink: "https://www.businessoffashion.com/articles/luxury/from-tiffany-blue-to-louboutin-red-the-power-of-owning-a-colour/",
          by: "Business Of Fashion",
          byLink: "https://www.businessoffashion.com/"
        },
        {
          title: "Barcode Processing Sketch",
          titleLink: "https://openprocessing.org/sketch/1311095",
          by:"Warren C. Longmire",
          byLink:"https://openprocessing.org/user/30859?view=sketches"
        }
      ]
    },
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
    attributionInfo: {
      poem: "Object Oriented Poem 4",
      page: 71,
      attributions: [
        {
          title: '"what is an object in programming" Google Search',
          titleLink: "https://www.google.com/search?q=what+is+an+object+in+programming&sxsrf=AOaemvJijl9BkH39ziU4O_7UMkXQ07bqDg%3A1634346263254&ei=FyVqYZb_DvCpytMPsI-VqAc&oq=what+is+an+object+in+programming&gs_lcp=Cgdnd3Mtd2l6EAMYADIECAAQQzIECAAQQzIKCAAQgAQQhwIQFDIECAAQQzIFCAAQgAQyBAgAEEMyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAEEcQsAM6BAgjECc6BQgAEJECOggIABCxAxCRAjoICAAQgAQQsQM6BQgAELEDOgsIABCABBCxAxCDAToHCAAQgAQQCjoECAAQCkoECEEYAFCecFjNkAFg7ZgBaAhwAngAgAHdAYgB4RaSAQY2LjE1LjGYAQCgAQHIAQjAAQE&sclient=gws-wiz",
          by: "Google",
          byLink: "https://www.google.com"
        },
        {
          title: "Daniel Rozin: Penguins Mirror",
          titleLink: "https://www.youtube.com/watch?v=QlrnjjfLkTI",
          by:"Lawrence Arts Center",
          byLink:"https://www.youtube.com/channel/UCqoea-RRK1W8EiRk4g8aPyQ"
        }
      ]
    },
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
    attributionInfo: {
      poem: "Series C",
      page: 72,
      attributions: [
        {
          title: "Series C Funding Gif / Google Search",
          titleLink: "https://www.google.com/search?q=series+c+funding&oq=series+c+funding&aqs=chrome..69i57j69i60l2.3050j0j4&sourceid=chrome&ie=UTF-8",
          by: "Google Maps",
          byLink: "https://www.google.com/maps"
        },
        {
          title: "Bill Gates Quote",
          titleLink: "#",
          by:"Bill Gates",
          byLink:"#"
        }
      ]
    },
    isGrid:true,
    section: 4,
    grid: {
      gap_color: "#6673fe",
      rows: 10,
      cols: 14,
      m_rows: 10,
      m_cols: 7,
      modules:[
        {
          type:IMAGE_TYPE,
          src: "footnote31.1.gif",
          href: "https://www.google.com/search?q=series+c+funding&oq=series+c+funding&aqs=chrome..69i57j69i60l2.3050j0j4&sourceid=chrome&ie=UTF-8",
          img_size: 118,
          img_pos:{x: 0, y:50},
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:5},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:4}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote31.2.jpeg",
          col_range: {start: 1, end:15},
          row_range: {start: 5, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 4, end:11}
        }
      ]
    }
  },
  {
    id: 32,
    title: "The NP Problem",
    attributionInfo: {
      poem: "The NP Problem",
      page: 73,
      attributions: [
        {
          title: "Steve Ballmer: Developers x 3",
          titleLink: "https://www.youtube.com/watch?v=Vhh_GeBPOhs",
          by: "MrWueb007",
          byLink: "https://www.youtube.com/channel/UCHQybm5RUV-GGGsleh7fTMw"
        }
      ]
    },
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
    attributionInfo: {
      poem: "Object Oriented Poem 3",
      page: 75,
      attributions: [
        {
          title: "Sam Aaron live coding an ambient electro set w/ Sonic Pi",
          titleLink: "https://www.youtube.com/watch?v=G1m0aX9Lpts&t=118s",
          by: "Sam Aaron",
          byLink: "https://www.youtube.com/channel/UCQB04t2hxSBVTjxpbIHdI-w"
        },
        {
          title: "Tribal African Inspired Pattern in Adobe Illustrator",
          titleLink: "https://www.youtube.com/watch?v=KvBfld47Mmg",
          by:"Muka's Corner",
          byLink:"https://www.youtube.com/channel/UCaVoxIYBwCBAYpzD7fF85IQ"
        }
      ]
    },
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
    attributionInfo: {
      poem: "Objective as Enemy",
      page: 77,
      attributions: [
        {
          title: "Math is RACIST? Glenn Loury and John McWhorter Respond",
          titleLink: "https://www.youtube.com/watch?v=hiLNdsggbqg",
          by: "Common Sense Productions",
          byLink: "https://www.youtube.com/channel/UCgT9T9gBmd0lIjai00VdScg"
        },
        {
          title: "Robot Gif",
          titleLink: "#",
          by:"Gif",
          byLink:"#"
        }
      ]
    },
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
          src: "footnote34.2.gif",
          col_range: {start: 1, end:15},
          row_range: {start: 5, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:4}
        },
        {
          type:VIDEO_TYPE,
          id: "hiLNdsggbqg",
          muted: false,
          loop: false,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:5},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 4, end:8}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote34.2.gif",
          col_range: {start: 1, end:15},
          row_range: {start: 5, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 8, end:11}
        } 
      ]
    }
  },
  {
    id: 35,
    title: "No one knows what they are doing at Microsoft",
    attributionInfo: {
      poem: "No one knows what they are doing at Microsoft",
      page: 79,
      attributions: [
        {
          title: "Reclaim your freedom with free libre software now - Richard Stallman of Free Software Movement",
          titleLink: "https://www.youtube.com/watch?v=n9YDz-Iwgyw",
          by: "Google Maps",
          byLink: "https://www.google.com/maps"
        },
        {
          title: "Burning Down an Entire Virtual Forest! 🌲🔥",
          titleLink: "https://www.youtube.com/watch?v=AGCH1GR7pPU",
          by:"Two Minute Papers",
          byLink:"https://www.youtube.com/channel/UCbfYPyITQ-7l4upoX8nvctg"
        }
      ]
    },
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
    attributionInfo: {
      poem: "Day 2",
      page: 87,
      attributions: [
        {
          title: "Photo of West Philly Home",
          titleLink: "#",
          by: "Warren C. Longmire",
          byLink: "#"
        },
        {
          title: "Muted Video Journey Entry",
          titleLink: "#",
          by:"Warren C. Longmire",
          byLink:"#"
        }
      ]
    },
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
          col_range: {start: 1, end:15},
          row_range: {start: 7, end:11},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 8, end:14}
        },
        {
          type:IMAGE_TYPE,
          src: "footnote36.2.jpg",
          img_pos:{x: 0, y:0},
          img_size: 95,
          col_range: {start: 1, end:15},
          row_range: {start: 1, end:7},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:8}
        }
      ]
    }
  },
  {
    id: 37,
    title: "First Day of Lockdown",
    section: 5,
    attributionInfo: {
      poem: "First Day of Lockdown",
      page: 89,
      attributions: [
        {
          title: "Three ways people are reacting to coronavirus: ‘accepting’, ‘suffering’ and ‘resisting’",
          titleLink: "https://theconversation.com/three-ways-people-are-reacting-to-coronavirus-accepting-suffering-and-resisting-137345",
          by: "Bobby Duffy | The Conversation",
          byLink: "https://theconversation.com/profiles/bobby-duffy-98570"
        },
        {
          title: "Muted Video Journey Entry",
          titleLink: "#",
          by:"Warren C. Longmire",
          byLink:"#"
        },
        {
          title: "Pandemic TV Compilation",
          titleLink: "#",
          by:"Warren C. Longmire",
          byLink:"#"
        }
      ]
    },
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
    attributionInfo: {
      poem: "First Day of Lockdown",
      page: 90,
      attributions: [
        {
          title: "Photo of South West Philly Backyard",
          titleLink: "#",
          by:"Warren C. Longmire",
          byLink:"#"
        }
      ]
    },
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
    attributionInfo: {
      poem: "Day 20",
      page: 92,
      attributions: [
        {
          title: "Video Journey Entry",
          titleLink: "#",
          by:"Warren C. Longmire",
          byLink:"#"
        }
      ]
    },
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
    title: "It's Ok",
    section: 5,
    attributionInfo: {
      poem: "Day X",
      page: 94,
      attributions: [
        {
          title: "Things to do when you're alone",
          titleLink: "https://www.youtube.com/watch?v=9ZcXBYnOafI",
          by:"Warren C. Longmire",
          byLink:"https://www.youtube.com/channel/UCN_EevFPOuc-jiZRqWr24eg"
        }
      ]
    },
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
          m_col_range: {start: 1, end:10},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 41,
    title: "Floridian tarot reader",
    section: 5,
    attributionInfo: {
      poem: "Month 3 of Lockdown",
      page: 96,
      attributions: [
        {
          title: "Astrology Secrets: PISCES Energy #Astrology #Pisces #Energy #AstroFinesse",
          titleLink: "https://www.youtube.com/watch?time_continue=510&v=9Z0hHqoF26E",
          by: "Astro Finesse",
          byLink: "https://www.youtube.com/channel/UCZKEpiJE91G5nKGxQPdLbQA"
        },
        {
          title: 'PISCES JUNE 2020 - "Not Letting Fear Lead the Way"',
          titleLink: "https://www.youtube.com/watch?v=75rDdXQGbaI&t=932s",
          by:"ALI's Tarot",
          byLink:"https://www.youtube.com/channel/UCGS9evApv_T-ZZbSmHi4oBA"
        },
        {
          title: 'PISCES - "WHY ARE YOU ON MY MIND AGAIN?” 🦋🙄 JULY 2020 TAROT READING!',
          titleLink: "https://www.youtube.com/watch?v=bSXEVmEWYV4&t=1093s",
          by:"CancerMoons Tarot",
          byLink:"https://www.youtube.com/channel/UCAe7WnQtaik7JPefZsh2TsQ"
        },
        {
          title: 'PISCES "ON YOUR WAY TO VICTORY" | TIMELESS',
          titleLink: "https://www.youtube.com/watch?v=WVc1nkgKYDw&t=90s",
          by:"The Birthday Gift",
          byLink:"https://www.youtube.com/channel/UCArQQ39CH3BcQuE_0ZZo0zw"
        }
      ]
    },
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
    id: 42,
    title: "Aretha Franklin",
    section: 5,
    attributionInfo: {
      poem: "COVID-19 Dating Tips",
      page: 102,
      attributions: [
        {
          title: "Aretha Franklin - Something He Can Feel",
          titleLink: "https://www.youtube.com/watch?v=Fj8pY4IFoeU",
          by: "#ManILoveThatSong",
          byLink: "https://www.youtube.com/channel/UCzqbM12tl0PXmhINgRgMlZw"
        }
      ]
    },
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
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 43,
    title: "Drake",
    section: 5,
    attributionInfo: {
      poem: "COVID-19 Dating Tips",
      page: 103,
      attributions: [
        {
          title: "Drake as a Sad Indie song",
          titleLink: "https://www.youtube.com/watch?v=Eru6INv-hSw",
          by: "Nick Lutsko",
          byLink: "https://www.youtube.com/channel/UCGHiFqlkj6T7z2sW9xz8d_Q"
        }
      ]
    },
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
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 44,
    title: "Kanye West",
    section: 5,
    attributionInfo: {
      poem: "COVID-19 Dating Tips",
      page: 104,
      attributions: [
        {
          title: "'I Almost Killed My Daughter': Kanye West Cries at Campaign Rally During Abortion Diatribe",
          titleLink: "https://www.youtube.com/watch?v=eRAXruayAto",
          by: "Storyful Rights Management",
          byLink: "https://www.youtube.com/channel/UC5ovaFtNA0Jbq7mf0vdKYjg"
        }
      ]
    },
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
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 45,
    title: "You don’t have to look good",
    section: 5,
    attributionInfo: {
      poem: "Postmortem",
      page: 107,
      attributions: [
        {
          title: 'Video from "Black Art: In the Absence of Light"',
          titleLink: "https://www.hbo.com/documentaries/black-art-in-the-absence-of-light",
          by: "Warren C. Longmire",
          byLink: "#"
        }
      ]
    },
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
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 46,
    title: "Hooptee",
    section: 1,
    sectionHeading: true,
    baseRoute: "/opensource/hooptee",
    attributionInfo: {
      poem: "",
      page: null,
      attributions: []
    },
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
          id: "xE4SEGE4nNY",
          muted: false,
          loop: true,
          img_pos:{x: 0, y:0},
          img_size: 100,
          col_range: {start: 1, end:14},
          row_range: {start: 1, end:10},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 47,
    title: "AutoImmune",
    baseRoute: "/opensource/autoimmune",
    section: 2,
    sectionHeading: true,
    attributionInfo: {
      poem: "",
      page: null,
      attributions: []
    },
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
          id: "F-xLBNYxdlk",
          muted: false,
          loop: true,
          img_pos:{x: 0, y:0},
          img_size: 100,
          col_range: {start: 1, end:14},
          row_range: {start: 1, end:10},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 48,
    title: "A Strange Place For Snow",
    baseRoute: "/opensource/a_strange_place_for_snow",
    section: 3,
    sectionHeading: true,
    attributionInfo: {
      poem: "",
      page: null,
      attributions: []
    },
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
          id: "uoVx85SSxFQ",
          muted: false,
          loop: true,
          img_pos:{x: 0, y:0},
          img_size: 100,
          col_range: {start: 1, end:14},
          row_range: {start: 1, end:10},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
  },
  {
    id: 49,
    title: "No One Knows What They're Doing At Microsoft",
    baseRoute: "/opensource/no_one_knows_what_they_are_doing_at_microsoft",
    section: 4,
    sectionHeading: true,
    attributionInfo: {
      poem: "",
      page: null,
      attributions: []
    },
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
          id: "xB4gR5b8Lq8",
          muted: false,
          loop: true,
          img_pos:{x: 0, y:0},
          img_size: 100,
          col_range: {start: 1, end:14},
          row_range: {start: 1, end:10},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
    // url: "https://www.youtube.com/watch?v=xB4gR5b8Lq8"
  },
  {
    id: 50,
    title: "Basic Income Experiment",
    baseRoute: "/opensource/basic_income_experiment",
    section: 5,
    sectionHeading: true,
    attributionInfo: {
      poem: "",
      page: null,
      attributions: []
    },
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
          id: "F-xLBNYxdlk",
          muted: false,
          loop: true,
          img_pos:{x: 0, y:0},
          img_size: 100,
          col_range: {start: 1, end:14},
          row_range: {start: 1, end:10},
          m_col_range: {start: 1, end:8},
          m_row_range: {start: 1, end:11}
        }
      ]
    }
    // url: "https://www.youtube.com/watch?v=F-xLBNYxdlk"
  },
  {
    id: 51,
    title: "Insta Poem 1: Objectified",
    baseRoute: "/opensource/1",
    url: "https://www.youtube.com/watch?v=F-xLBNYxdlk" //"https://www.youtube.com/watch_popup?v=F-xLBNYxdlk"
  },
  {
    id: 52,
    title: "Insta Poem 2: How to be white",
    baseRoute: "/opensource/2",
    url: "https://youtu.be/oH4MGvIRQS0" //"https://www.youtube.com/watch_popup?v=F-xLBNYxdlk"
  },
  {
    id: 53,
    title: "Insta Poem 3: Open Source",
    baseRoute: "/opensource/3",
    url: "https://youtu.be/u-eJcozEgTI" //"https://www.youtube.com/watch_popup?v=F-xLBNYxdlk"
  },
  {
    id: 54,
    title: "Insta Poem 4: Meditations of Photo Of Historic Railwomen",
    baseRoute: "/opensource/4",
    url: "https://youtu.be/oiHkgEPtS5A" //"https://www.youtube.com/watch_popup?v=F-xLBNYxdlk"
  }
];

export const sections = [
  {
    title:"Hooptee",
    background: "#cc9aa3",
    color: "black"
  },
  {
    title:"AutoImmune",
    background: "#755B60",
    color: "white"
  },
  {
    title:"A Strange Place For Snow",
    background: "#B20625",
    color: "black"
  },
  {
    title:"No one knows what they are doing at Microsoft",
    background: "#426382",
    color: "white"
  },
  {
    title:"Basic Income Experiment",
    background: "#89A18C",
    color: "white"
  }
];

export const TOTAL_FOOTNOTES = 45;

export default data;

export const birdDiz = {
  citations:[
    {
      id:1,
      section: "Prelude",
      title: "Swing to Bop (1941) By Charlie Christain",
      url: "https://www.youtube.com/watch?v=Ce9Jtl9D6FQ"
    },
    {
      id:2,
      section: "Prelude",
      title: "Dizzy Gillespie 1946 “Oop Bop Sh’Bam”",
      url: "https://www.youtube.com/watch?v=Qj_8A0CAGNM"
    },
    {
      id:3,
      section: "Bridge",
      title: "Charlie Parker Interview",
      url: "https://m.youtube.com/watch?v=UvsqYo9r_dE"
    },
    {
      id:4,
      section: "Bridge",
      title: "Playboy’s Penthouse",
      url: "https://m.youtube.com/watch?v=V3ctq8ETa2A"
    },
    {
      id:5,
      section: "Bridge",
      title: "Bud Powell",
      url: "https://m.youtube.com/watch?v=VP4X7rhpec0"
    },
    {
      id:6,
      section: "Verse",
      title: "Max Roach & Abbey Lincoln",
      url: "https://m.youtube.com/watch?v=YTeacoeAm9o"
    },
    {
      id:7,
      section: "Verse",
      title: "Thelonious Monk Quartet",
      url: "https://m.youtube.com/watch?v=jgPQkMX75pY"
    },
    {
      id:8,
      section: "Chorus",
      title: "Interview with Dizzy",
      url: "https://m.youtube.com/watch?v=oqzidQ-rKSY"
    },
    {
      id:9,
      section: "Chorus",
      title: "Dizzy Gillespie: Unicorn",
      url: "https://m.youtube.com/watch?v=5UxeSyv55mg"
    },
  ]
}