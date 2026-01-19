// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Some of my projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "My background and experience",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/Jeremy_Hui_CV.pdf";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses I have assisted with",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "news-site-mostly-up-to-date-with-the-latest-information",
          title: 'Site mostly up to date with the latest information!',
          description: "",
          section: "News",},{id: "projects-assignment-guru",
          title: 'Assignment Guru',
          description: "Creating assignments for CS111/CS112 that demonstrating the social impact of computing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AssignmentGuru/";
            },},{id: "projects-cs336-project",
          title: 'CS336 Project',
          description: "Shoe shopping website with SQL backend",
          section: "Projects",handler: () => {
              window.location.href = "/projects/CS336Project/";
            },},{id: "projects-high-performance-computing-secure-agent-for-confidential-containers",
          title: 'High-Performance Computing Secure Agent for Confidential Containers',
          description: "Designed an agent to automate deployment of Confidential Containers (CoCo) for DNNs and detect malware",
          section: "Projects",handler: () => {
              window.location.href = "/projects/HPCAgent/";
            },},{id: "projects-lumisense",
          title: 'LumiSense',
          description: "A Non-Intrusive Device for Sleep Cycle Detection",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LumiSense/";
            },},{id: "projects-musik",
          title: 'MUSIK',
          description: "MIDI Utilized System Interface for Keyboards",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MUSIK/";
            },},{id: "projects-pc-composer",
          title: 'PC Composer',
          description: "Computer shopping with AI chatbot",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PCComposer/";
            },},{id: "projects-concurrent-proxy-server",
          title: 'Concurrent Proxy Server',
          description: "Web proxy that forwards multiple requests in parallel",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Proxy/";
            },},{id: "projects-robotic-iot-smartspace-testbed",
          title: 'Robotic IoT SmartSpace Testbed',
          description: "Developing an IoT experimentation platform to understand indoor spaces",
          section: "Projects",handler: () => {
              window.location.href = "/projects/RobotTestbed/";
            },},{id: "projects-performing-rowhammer-like-attacks-on-openssd-nand-flash",
          title: 'Performing Rowhammer-like Attacks on OpenSSD NAND Flash',
          description: "Testing whether repeated write and erases can result in Rowhammer effects",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Rowhammer/";
            },},{id: "projects-wooshi-39-s-notes",
          title: 'Wooshi&amp;#39;s Notes',
          description: "Notes accumulated from courses taken at Rutgers University",
          section: "Projects",handler: () => {
              window.location.href = "/projects/WooshisNotes/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%65%72%65%6D%79%77%68%75%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jeremywhui", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jeremywhui", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
