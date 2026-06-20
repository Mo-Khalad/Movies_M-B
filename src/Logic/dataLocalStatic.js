import { fireTV , googleIcon , TV , googlePlay } from '../Shared/Images'

// 
const slideImageData =[
    {
        URL: `bg-[url('/src/assets/images/publicHomeSlider/slider1.webp')]`,
        TEXT: "Kids Morning Special",
        TIME: "09:00 AM - 11:30 AM ",
        DAY: "12/07",
    },{
        URL: `bg-[url('/src/assets/images/publicHomeSlider/slider2.webp')]`,
        TEXT: "Kids Morning Special",
        TIME: "09:00 AM - 11:30 AM ",
        DAY: "12/07",
      },
      {
        URL: `bg-[url('/src/assets/images/publicHomeSlider/slider3.webp')]`,
        TEXT: "Kids Morning Special",
        TIME: "09:00 AM - 11:30 AM ",
        DAY: "12/07",
      },
      {
        URL: `bg-[url('/src/assets/images/publicHomeSlider/slider4.webp')]`,
        TEXT: "Kids Morning Special",
        TIME: "09:00 AM - 11:30 AM ",
        DAY: "12/07",
      },
      {
        URL: `bg-[url('/src/assets/images/publicHomeSlider/slider5.webp')]`,
        TEXT: "Kids Morning Special",
        TIME: "09:00 AM - 11:30 AM ",
        DAY: "12/07",
      },
      {
        URL: `bg-[url('/src/assets/images/publicHomeSlider/slider6.webp')]`,
        TEXT: "Kids Morning Special",
        TIME: "09:00 AM - 11:30 AM ",
        DAY: "12/07",
      },
];


// 
const subscriptionsData=[
  {
    type:"economy",
    title:"🎬 CineLite",
    month:"mo",
    price:"$29",
    features:[
      ['Watch on 1 device at a time'],
      ['Standard Definition (SD) quality'],
      ['Limited movie library'] 
    ]
  } ,
  {
    type:"most popular",
    title:"🎬 CineLite",
    month:"mo",
    price:"$29",
    features:[
      ['Watch on 1 device at a time'],
      ['Standard Definition (SD) quality'],
      ['Limited movie library'] 
    ]
  },
  {
    type:"economy",
    title:"🎬 CineLite",
    month:"mo",
    price:"$29",
    features:[
      ['Watch on 1 device at a time'],
      ['Standard Definition (SD) quality'],
      ['Limited movie library'] 
    ]
  } ,
]
const appsIcons =[ 
  { image:googleIcon , width:30 } , 
  { image:googlePlay , width:30 } ,
  { image:fireTV , width:50 } ,
  { image:TV , width:50 } ,
]

//Information about Ticket
//seats count 
const seatsCountOptions=['One seat' , 'Two seat' , 'Three seat' , 'Four seat']
// movie time
const movieTimeOptions =['09.00  am ' ,  '12.00 pm' , '02.00 pm' ,  
'05.00 pm' ,'07.00 pm' , '10.00 pm']

// Navbar Links
const navItems = [
  { label: "Home", to: "/" },
  { label: "Movies", to: "/Movies" },
  { label: "TV Shows", to: "/TVShows" },
  { label: "Watchlist", to: "/WatchList" },
  { label: "Favorites", to: "/Favorite" },
];

export {
    slideImageData ,
    subscriptionsData ,
    appsIcons , 
    seatsCountOptions ,
    movieTimeOptions ,
    navItems
}

