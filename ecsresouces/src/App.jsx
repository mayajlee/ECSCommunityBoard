import './App.css';
import Card from './components/Card';

function App() {
  //Styling 
  const headerStyle= {
    color: "#F76900",
    fontFamily: "Trebuchet MS",
  };
  const subheader= {
    color: "#000E54",
    fontFamily: "Trebuchet MS",
    paddingBottom: "20px"
  };
  
  //
  const academicCards = [
    {
      eventName: 'AEW Peer Office Hours',
      imgLink: '#',
      orgName: 'AEW Program',
      date: '',
      description: 'Free course support is available in CEN 252, ECS 104, ECS 221/222/325, MAE 251 and MAT 194/295/296/397/485 hosted by the AEW Facilitators and open to all ECS students',
      bttnLink: 'https://calendar.google.com/calendar/u/0?cid=Y19mamVibzdiczRoOGljb3BvbWM2Z2tidGFnb0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t'
    },
    {
      eventName: 'CLASS Tutoring Services',
      imgLink: '#',
      orgName: 'CLASS Office',
      date: '',
      description: 'Sessions for multiple courses including MAT, etc. Free tutoring vouchers throught Success Advising',
      bttnLink: 'https://class.syr.edu/'
    },
    {
      eventName: 'NSBE/SHPE iStudy',
      imgLink: '#',
      orgName: 'NSBE',
      date: '',
      description: 'Need help with your classes, solving complex problems, or just a nice enviroment for studying, we got you!',
      bttnLink: 'https://www.instagram.com/nsbe_su/'
    },
    {
      eventName: 'Math Clinic',
      imgLink: '#',
      orgName: 'College of Arts & Science',
      date: '',
      description: 'This page collects the available help resources, in addition to the office hours of professors and teaching assistants.',
      bttnLink: 'https://docs.google.com/document/d/1Gq5yboOu7tzZpu5pdlT4j8vLat_354dygtlcPYtbQX8/edit'
    }
  ];

  const societyCards = [
    {
      eventName: 'General Body Meeting',
      orgName: 'SWE',
      date: 'Wednesday Mar 6 7-8PM',
      description: 'Sessions for multiple courses including MAT, etc. Free tutoring vouchers throught Success Advising',
      bttnLink: 'https://class.syr.edu/'
    },
    {
      eventName: 'Build Your Brand Workshop',
      orgName: 'Career and Success Advising',
      date: 'Monday Mar 4 4P-5P',
      description: 'Need help with your classes, solving complex problems, or just a nice enviroment for studying, we got you!',
      bttnLink: 'https://www.instagram.com/nsbe_su/'
    },
    {
      eventName: 'Resume & Linkedin Workshop',
      orgName: 'NSBE & BLISTS',
      date: 'Tuesday Mar 19  7P-8P | Hinds 117',
      description: 'Come join BLISTS and NSBE to elevate your resume and LinkedIn with tips and tricks from Jeffrey Fouts',
      bttnLink: 'https://www.instagram.com/blists_su/?hl=en'
    },
    {
      eventName: 'Cuse Hacks Beta',
      orgName: 'CuseHacks',
      date: 'Mar 1 - Mar 31',
      description: 'Create an awesome project during CuseHacks Beta 2024, a month-long virtual hackathon to develop a comprehensive project!',
      bttnLink: 'https://www.instagram.com/p/C2aIwMuM7qK/?img_index=1'
    },
    {
      eventName: 'Rumman Chowdhury: Generative AI and the future of humanity',
      orgName: 'SU',
      date: 'Mar 1 - Mar 31',
      description: 'She will discuss how AI will impact the lives of students, what policymakers have missed that will significantly affect students—both positively and negatively—and what bearing AI will have on the upcoming U.S. election cycle.',
      bttnLink: 'https://www.instagram.com/p/C373DW5Lm6T/'
    },
    {
      eventName: 'SWE Talent Showcase',
      orgName: 'SWE',
      date: 'Mar 28',
      description: 'A celebration of women engineers and their many talents!',
      bttnLink: 'https://www.instagram.com/swe.syracuse/'
    }
  ];

  return (
    <>
      <h1 style={headerStyle}>SU ECS Society Events!</h1>
      <h3 style={subheader}>We hope to See U at our events!</h3>

      <h2 style={headerStyle}>Academic Resources</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {
        academicCards.map((acCard, i) => {
          return (<Card 
            eventName={acCard.eventName} 
            key={i}
            orgName={acCard.orgName}
            date={acCard.date}
            description={acCard.description} 
            bttnLink={acCard.bttnLink} />)
        })
      }
      </div>

      <h2 style={headerStyle}>Society Resources</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {
        societyCards.map((socCard, i) => {
          return (<Card 
            eventName={socCard.eventName} 
            key={i}
            orgName={socCard.orgName}
            date={socCard.date}
            description={socCard.description} 
            bttnLink={socCard.bttnLink} />)
        })
      }
      </div>
    </>
  )
}

export default App
