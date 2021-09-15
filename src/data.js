import {  MAP_TYPE, VIDEO_TYPE, IMAGE_TYPE} from './ContentGrid/constants';
// import {  COLOR_TYPE} from './ContentGrid/constants';

const data = [
  {
    id: 1,
    title: "Strawberry Mansion",
    isGrid:true,
    grid: {
      index: 1,
      headline: "Strawberry Mansion",
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
      index: 2,
      gap_color: "black",
      headline: "The Invariant Be",
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
      index: 3,
      headline: "My Murder Capital",
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
      index: 4,
      headline: "My ghost",
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
          img_size: 260,
          img_pos:{x: 10, y:0},
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
    url: "https://photos.google.com/search/_tv_Videos/photo/AF1QipOnqAco7GZeJeG2aLaDG5vXWJ46E3PZt3ahu1M"
  },
  {
    id: 6,
    title: "Last Chance",
    url: "https://www.google.com/maps/place/Last+Chance+Lounge/@39.9721934,-75.1660183,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMQ_I074ZfrYlSMMuDSbPzJsn6PCsZ7CDW1h-GO!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMQ_I074ZfrYlSMMuDSbPzJsn6PCsZ7CDW1h-GO%3Dw224-h398-k-no!7i3024!8i5376!4m11!1m2!2m1!1slast+chance+lounge!3m7!1s0x0:0xda58642df922ba4e!8m2!3d39.9721934!4d-75.1660183!14m1!1BCgIgAQ!15sChJsYXN0IGNoYW5jZSBsb3VuZ2WSAQNiYXI"
  },
  {
    id: 7,
    title: "Beirut in a hooptee",
    url: "https://www.google.com/maps/place/Last+Chance+Lounge/@39.9721934,-75.1660183,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMQ_I074ZfrYlSMMuDSbPzJsn6PCsZ7CDW1h-GO!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMQ_I074ZfrYlSMMuDSbPzJsn6PCsZ7CDW1h-GO%3Dw224-h398-k-no!7i3024!8i5376!4m11!1m2!2m1!1slast+chance+lounge!3m7!1s0x0:0xda58642df922ba4e!8m2!3d39.9721934!4d-75.1660183!14m1!1BCgIgAQ!15sChJsYXN0IGNoYW5jZSBsb3VuZ2WSAQNiYXI"
  },
  {
    id: 8,
    title: "a just world",
    url: "https://www.youtube.com/watch?v=WvDFi1nebJQ"
  },
  {
    id: 9,
    title: "Family of Disease",
    url: "https://www.youtube.com/watch?v=yH1Zkn_6sO8&t=372s"
  },
  {
    id: 10,
    title: "Strapped electrodes",
    url: "https://minorityhealth.hhs.gov/omh/browse.aspx?lvl=4&lvlid=15"
  },
  {
    id: 11,
    title: "Lock yo doors",
    url: "https://www.mentalhealthtoday.co.uk/using-evidence-from-the-race-disparity-audit-to-reform-the-mental-health-act"
  },
  {
    id: 12,
    title: "Raisining chest",
    url: "https://www.youtube.com/watch?v=hMtZfW2z9dw"
  },
  {
    id: 13,
    title: "my porn torso",
    url: "https://www.youtube.com/watch?v=h0U2QUGKbSE"
  },
  {
    id: 14,
    title: "Sweet, docile little man",
    url: "https://www.goodreads.com/quotes/6597420-negroes-sweet-and-docile-meek-humble-and-kind-beware-the"
  },
  {
    id: 15,
    title: "Jehovah knows the meat",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 16,
    title: "The first time she hit me",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 17,
    title: "Does he understand hurt?",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 18,
    title: "A good cop",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 19,
    title: "Arc of Decay",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 20,
    title: "You go for a walk",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 21,
    title: "Toothy smile",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 22,
    title: "Cloudy and Coconut",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 23,
    title: "A terrorist fist jab",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 24,
    title: "The Sky",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 25,
    title: "Infinity Poem",
    url: "https://www.youtube.com/watch?v=RJS3Z2DYEO4&t=114s"
  },
  {
    id: 26,
    title: "Variable Poem",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 27,
    title: "Open Source",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 28,
    title: "Function Poem",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 29,
    title: "Startup 2021",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 30,
    title: "Object Oriented Poem 4",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 31,
    title: "Series C",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 32,
    title: "The NP Problem",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 33,
    title: "Object Oriented Poem 3",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 34,
    title: "Objective as Enemy",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 35,
    title: "No one knows what they are doing at Microsoft",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 36,
    title: "It is mid-afternoon",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 37,
    title: "First Day of Lockdown",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 38,
    title: "Fractal of ivy covered fingers",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 39,
    title: "Murder me",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 40,
    title: "Floridian tarot reader",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 41,
    title: "It's Ok",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 42,
    title: "Aretha Franklin",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 43,
    title: "Drake",
    url: "https://www.google.com/search?q=baldwin"
  },
  {
    id: 44,
    title: "Kanye West",
    url: "https://www.urbandictionary.com/define.php?term=hooptee"
  },
  {
    id: 45,
    title: "You don’t have to look good",
    url: "https://medlineplus.gov/autoimmunediseases.html"
  },
  {
    id: 46,
    title: "Hooptee",
    baseRoute: "/opensource/hooptee",
    url: "https://www.ecosia.org/search?q=a+strange+place+for+snw&addon=chrome&addonversion=3.4.0&method=topbar"
  },
  {
    id: 47,
    title: "AutoImmune",
    baseRoute: "/opensource/autoimmune",
    url: "https://www.microsoft.com/en-us/"
  },
  {
    id: 48,
    title: "A Strange Place For Snow",
    baseRoute: "/opensource/a_strange_place_for_snow",
    url: "https://www.vox.com/future-perfect/2020/2/19/21112570/universal-basic-income-ubi-map"
  },
  {
    id: 49,
    title: "No One Knows What They Are Doing At Microsoft",
    baseRoute: "/opensource/no_one_knows_what_they_are_doing_at_microsoft",
    url: "https://www.vox.com/future-perfect/2020/2/19/21112570/universal-basic-income-ubi-map"
  },
  {
    id: 50,
    title: "Basic Income Experiment",
    baseRoute: "/opensource/basic_income_experiment",
    url: "https://www.vox.com/future-perfect/2020/2/19/21112570/universal-basic-income-ubi-map"
  }
];

export default data;