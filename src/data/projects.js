const projects = [
    {
        id: 11,
        title: "Personal Design Work",
        categories: ["graphicdesign"],
        thumbnail: "images/projects/designthumb.png",
        images: ["images/projects/personal/img2.jpg", "images/projects/personal/img1.jpg", "images/projects/personal/img3.jpg", "images/projects/personal/img4.jpg","images/projects/personal/img5.jpg","images/projects/personal/img6.jpg","images/projects/personal/img7.jpg","images/projects/personal/img8.jpg","images/projects/personal/img9.jpg","images/projects/personal/img10.jpg","images/projects/personal/img11.jpg","images/projects/personal/img12.jpg","images/projects/personal/img13.jpg","images/projects/personal/img14.jpg","images/projects/personal/img15.jpg","images/projects/personal/img16.jpg","images/projects/personal/img17.jpg","images/projects/personal/img18.jpg","images/projects/personal/img19.jpg","images/projects/personal/img20.jpg","images/projects/personal/img21.jpg","images/projects/personal/img22.jpg","images/projects/personal/img23.jpg",],
        short_description: "Over the last 20 years I have worked on numerous personal design projects. These projects have consisted of full stream design packages, simple one off graphics, or animated designs.\n\nI have utiliized and am well versed in the majority of the latest design applications (Figma, Photoshop, Illustrator, InDesign) and have a lot of expereince with various video applications as well (After Effects, Premiere, Animate, Character Creator)",
        technologies: ["aftereffects", "premiere", "photoshop", "illustrator", "figma"],
      },
    {
        id: 0,
        title: "SportsLights for Hue",
        categories: ["appdev"],
        images: ["images/projects/sportslights/img5.png", "images/projects/sportslights/img1.png", "images/projects/sportslights/img2.png", "images/projects/sportslights/img3.png"],
        thumbnail: "images/projects/slthumb.png",
        short_description: "I developed an iPhone app that syncs with your Philips Hue lights and triggers based on sports events (goals, runs, etc).\n\nThe app was developed in XCode with a SwiftUI and integrates with Apple's StoreKit2.",
        technologies: ["xcode", "swift"],
        video: "https://www.youtube.com/watch?v=7SdCrFHtrEM",
        case_study: {
          challenge: "Synchronizing a mobile app with Philips Hue lights in real-time based on sports event triggers.",
          solution: "Using SwiftUI for a smooth user interface and integrating with Apple's StoreKit2 for subscription management, while ensuring real-time communication between the app and the lighting hardware.",
          outcome: "A functional and user-friendly app that enhances the sports viewing experience by integrating ambient lighting effects that respond to live sports events.",
        }    
    },
    {
    id: 1,
    title: "Rink Rivals",
    categories: ["webdev", "graphicdesign", "appdev", "video"],
    images: ["images/projects/rinkrivals/img5.png","images/projects/rinkrivals/img6.png","images/projects/rinkrivals/img7.png","images/projects/rinkrivals/img4.png", "images/projects/rinkrivals/img1.png", "images/projects/rinkrivals/img2.png", "images/projects/rinkrivals/img3.png", ],
    thumbnail: "images/projects/rrthumb.png",
    short_description: "Rink Rivals was a league I helped create with 4 other players. My job was to be responsive for everything tech and graphic wise.\n\nI developed an entire stat tracking website from the ground up. A discord full of various bot commands & an interactive stream for viewers to watch twice a week.\n\nI also developed an iOS app for the league to easily track all things league related. The app was developed in Xcode with SwiftUI",
    technologies: ["photoshop", "illustrator", "premiere", "aftereffects", "figma", "xcode", "swift","python","obs"],
    video: "https://www.youtube.com/watch?v=d9fIVZnkIHo",
    case_study: {
      challenge: "Creating a comprehensive platform for a sports league that includes a stat tracking website, mobile app, and interactive streaming.",
      solution: "Utilizing a range of technologies (Photoshop, Illustrator, Figma, Xcode, SwiftUI, Python, OBS, etc) to build a cohesive system that supports live data updates, user interaction, and engaging broadcasts.",
      outcome: "A well-integrated ecosystem that enhances user engagement and streamlines the management and viewing of league activities.",
    } 
  },

  {
    id: 3,
    title: "Jack Han - Hockey Tactics",
    categories: ["graphicdesign"],
    thumbnail: "images/projects/jhthumb.png",
    images: ["images/projects/jackhan/img1.png","images/projects/jackhan/img2.png","images/projects/jackhan/img3.png","images/projects/jackhan/img4.png","images/projects/jackhan/img5.png","images/projects/jackhan/img6.png"],
    short_description: "Working closely with Jack I helped design the 2024 version of his Hockey Tactics ebook. The book featured a look at all 32 NHL teams and the strategies each team deploys.\n\nI used InDesign, Illustrator, Photoshop and Figma to put together the complete book. ",
    technologies: ["photoshop", "illustrator", "indesign", "figma"],
    case_study: {
      challenge: "Designing a visually appealing and informative eBook on hockey tactics that appeals to a broad audience.",
      solution: "Using a combination of InDesign, Illustrator, Photoshop, and Figma to design a comprehensive eBook that is both informative and easy to navigate.",
      outcome: "A well-received publication that effectively communicates complex hockey strategies in a visually engaging format.",
    } 
  },
  {
    id: 6,
    title: "SportsGamer",
    categories: ["webdev", "graphicdesign","video"],
    thumbnail: "images/projects/sgthumb.png",
    images: ["images/projects/sg/img1.jpg", "images/projects/sg/img2.jpg", "images/projects/sg/img3.jpg", "images/projects/sg/img4.jpg", "images/projects/sg/img5.jpg", "images/projects/sg/img6.jpg", "images/projects/sg/img7.jpg", "images/projects/sg/img8.jpg", "images/projects/sg/img9.jpg", "images/projects/sg/img15.jpg", "images/projects/sg/img12.jpg", "images/projects/sg/img13.jpg", "images/projects/sg/img14.jpg"],
    short_description: "For SportsGamer (formally NHLGamer) I have helped assist in various tasks over the years. Everything ranging from stream broadcast design, social media graphics, landing page design/code, video editing & more.\n\nWorking closely with Ken and the rest of the team I utilizied many type of design & web technologies. Two of my biggest positive takeaways from working with SportsGamer has been my coding work on their predicition page as well as my work using Figma working with interactive data.",
    technologies: ["photoshop", "illustrator", "premiere", "aftereffects", "figma", "react"],
    video: "https://www.youtube.com/watch?v=0TDk-216ycg",
    case_study: {
      challenge: "Help delivery a multi-functional platform that includes live streaming, social media integration, and graphic design.",
      solution: "Implementing technologies like React, Photoshop, and After Effects to create a visually appealing and responsive design that supports real-time data and community interaction.",
      outcome: "A dynamic and interactive set of projects to help increase the SportsGamer brand awareness.",
    } 
  },
  {
    id: 2,
    title: "Puck Stats",
    categories: ["appdev"],
    thumbnail: "images/projects/psthumb.png",
    images: ["images/projects/puckstats/img3.png","images/projects/puckstats/img1.png", "images/projects/puckstats/img2.png"],
    short_description: "I developed an iPhone application that interacts with the NHL 24 EASHL Api. Users are able to track their player and club stats quickly and easily.\n\nThe app was developed in Xcode with SwiftUI",
    technologies: ["xcode", "swift"],
    case_study: {
      challenge: "Developing a mobile app that integrates with the NHL EASHL API to track real-time player and club stats.",
      solution: "Using Xcode and SwiftUI to build a seamless interface that fetches and displays data efficiently, with a focus on user experience and performance optimization.",
      outcome: "An efficient and user-friendly app that provides NHL players with immediate access to their stats, enhancing their gameplay and strategic planning.",
    } 
  },
  {
    id: 4,
    title: "SportsHex",
    categories: ["webdev", "graphicdesign"],
    thumbnail: "images/projects/shthumb.png",
    images: ["images/projects/sportshex/img1.png", "images/projects/sportshex/img2.png", "images/projects/sportshex/img3.png"],
    short_description: "SportsHex is a website and chrome exntension that is aimed at streamlining sports design. With the SportsHex extension, users can easily access teams, leagues, search by league or team, and even export teams for data-driven designs. I created both a free and pro version for users to use. \n\nThe website/extensions utilizes a range of technologies including React JS, CSS, Tailwind, MySQL and JavaScript. I used Photoshop and After Effects for the original layout vision and marketing materials.",
    technologies: ["react", "illustrator", "figma"],
    video: "https://www.youtube.com/watch?v=VKjHRDExfOc",
    case_study: {
      challenge: "Creating a comprehensive design resource for sports enthusiasts that combines ease of use with depth of functionality.",
      solution: "Developing a platform consisting of a website and a Chrome extension using React, CSS, Tailwind, and custom JavaScript/PHP solutions, complemented by strong visual designs using Photoshop and After Effects.",
      outcome: "An increadbly quick, fully functional and aesthetically pleasing platform that simplifies the design process for sports enthusiasts and professionals alike.",
    } 
  },
  {
    id: 5,
    title: "NHL Next (Concept)",
    categories: ["graphicdesign","video"],
    thumbnail: "images/projects/nextthumb.png",
    images: ["images/projects/nhlnext/img1.png", "images/projects/nhlnext/img2.png", "images/projects/nhlnext/img3.png", "images/projects/nhlnext/img4.png", "images/projects/nhlnext/img5.png", "images/projects/nhlnext/img6.png"],
    short_description: "In my NHL Next concept project, I reimagined the EA Sports NHL series as a games-as-a-service title. With a strong focus on the growing NHL esports scene and the desires of passionate hockey fans, I envisioned a transformation that would bring new life to the series.\n\nI created a trailer to showcase my vision, highlighting the importance of team-based esports and introducing exciting customization options for players. To bring my concept to life, I utilized popular design tools like Photoshop and Illustrator for creating graphic elements, Figma for prototyping and refining the user experience, and relied on After Effects and Premiere for the trailer.",
    technologies: ["photoshop", "illustrator", "premiere", "aftereffects", "figma"],
    video:"https://www.youtube.com/watch?v=3LggueS6YYk"
  },
  {
    id: 7,
    title: "Fortnite Creative DB",
    categories: ["webdev", "graphicdesign","video"],
    thumbnail: "images/projects/fncdbthumb.png",
    images: ["images/projects/fncdb/img1.jpg", "images/projects/fncdb/img2.jpg", "images/projects/fncdb/img3.jpg"],
    short_description: "Fortnite Creative DB is the ultimate hub for Fortnite Creative maps and more, offering a comprehensive platform for Fortnite Creative enthusiasts. The website showcases the best user-created maps from talented players around the world, allowing users to browse through an extensive collection and discover new creative maps crafted by the community.\n\nAdditionally, Fortnite Creative DB provides a convenient map submission feature, allowing creators to easily submit their own maps to be included in the database and potential curated collections. I have created a solution that connects with a fortnite API that helps pull data quickly saving time for users submitting maps.\n\nI created the site to serve as a central hub for all things related to Fortnite Creative, offering the latest news, tips, tricks, and opportunities to connect with like-minded players. Technologies used include WordPress, Bootstrap and various custom js/php solutions, to power the website, along with provide a user-friendly and visually appealing experience.",
    technologies: ["wordpress", "aftereffects", "photoshop", "illustrator", "figma"]
  },
  {
    id: 9,
    title: "Eternal Turtles",
    categories: ["webdev", "graphicdesign","video"],
    thumbnail: "images/projects/etthumb.png",
    images: ["images/projects/et/img1.png", "images/projects/et/img2.jpg", "images/projects/et/img4.png", "images/projects/et/img5.png", "images/projects/et/img6.png"],
    short_description: "Eternal Turtles was an NFT project that I worked on various things for. The project featured an interactive whitelist page that utilizied react & a database which stored users discord/wallet information for whitelist access. The project contained various art pieces that I helped create including NFT art traits, trailer videos, social media posts. This items utilized many different technologies including, Figma, Procreate, Photoshop & Illustrator.",
    technologies: ["react", "python", "aftereffects", "photoshop", "illustrator", "figma"],
    video: "https://www.youtube.com/watch?v=edDkThxInhg"
  },
  {
    id: 10,
    title: "Dippies",
    categories: ["graphicdesign","video"],
    thumbnail: "images/projects/dippiethumb.png",
    images: ["images/projects/dippies/img4.jpg","images/projects/dippies/img5.jpg","images/projects/dippies/img6.jpg","images/projects/dippies/img7.jpg","images/projects/dippies/img8.jpg","images/projects/dippies/img1.jpg", "images/projects/dippies/img2.jpg", "images/projects/dippies/img3.jpg"],
    short_description: "Dippies was another NFT project that I helped assist with. For this project, I created various art social media art pieces along with a daily segment called the Daily Dip.\n\nI collaborated with various other team members to create pieces utilizing technologies such as, Photoshop, Illustrator, Procreate, Figma, & After Effects.",
    technologies: ["aftereffects", "photoshop", "illustrator", "figma"],
    video: "https://www.youtube.com/watch?v=PotPAdRjLXA"
  },
  {
    id: 12,
    title: "CHEL Goal Line",
    categories: ["graphicdesign", "video"],
    thumbnail: "images/projects/chelthumb.png",
    images: ["images/projects/cgl/img1.jpg","images/projects/cgl/img2.jpg","images/projects/cgl/img3.jpg","images/projects/cgl/img4.jpg","images/projects/cgl/img5.jpg","images/projects/cgl/img6.jpg"],
    short_description: "CHEL Goal Line was a stream and branding package I put together to showcase NHL esports streams. The package functioned in a similar way to NFL Redzone in that we featured multiple games simultaneously on the screen for viewers to tune into. During it's brief run, we captured NHL esports tournamnet action and created a buzz around the scene.\n\nThe various technologies used to accomplish the task were illustrator for the branding, photoshop for the look and feel of the stream. Adobe After Effects to create animated extensions to the stream layout and then OBS with various macros to broadcast the stream on Twitch.",
    technologies: ["photoshop", "illustrator", "figma", "obs"],
    video: "https://www.youtube.com/watch?v=w9rb8vqDaMk"
  },
  {
    id: 8,
    title: "Python Bots",
    categories: ["webdev"],
    thumbnail: "images/projects/pythonthumb.png",
    images: ["images/projects/python/img1.png", "images/projects/python/img2.png", "images/projects/python/img4.png", "images/projects/python/img3.jpg", "images/projects/python/img4.jpg", "images/projects/python/img5.jpg", "images/projects/python/img6.jpg"],
    short_description: "I have created various Discord, Telegram & Twitter bots for both personal and professional projects. The majority of my bot work has been done using python. I have created various items that have interacted with sports & crypto apis along with my own APIs.",
    technologies: ["python"]
  }
]

export default projects;
