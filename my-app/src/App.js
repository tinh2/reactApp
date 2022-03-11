import PersonCard from './components/PersonCard'
import './App.css';

const getData = () => {
  return [
    {
      name: 'Adam',
      picture: 'https://media.istockphoto.com/photos/happy-smiling-man-looking-away-picture-id1158245623?k=20&m=1158245623&s=612x612&w=0&h=rGmn02kNdoQySPEoQmbbDBxOayL4sdW3QWqP9rjgxCg=',
      description: 'new to react'
    },
    {
      name: 'Carlton',
      picture: 'https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls=',
      description: 'i like chimken'
    },
    {
      name: 'Tho',
      picture: 'https://media.istockphoto.com/photos/successful-asian-businessman-in-a-modern-coworking-space-picture-id1143933272?k=20&m=1143933272&s=612x612&w=0&h=UIak73zWVjoGHtAYtecrsskju7yxMgh1-vd5xDuqEeg=',
      description: 'van lifer'
    }
  ]
}

function App() {
  const peopleArray = getData().map((person) => {
    let updatedPerson = {
      ...person,
    }
    if (person.name === 'Adam') {
      updatedPerson.age = 32
      updatedPerson.hobbiesUrl = 'https://npr.brightspotcdn.com/dims4/default/95997a5/2147483647/strip/true/crop/2000x1050+0+138/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwesa%2Ffiles%2F201901%2F010419_disc_golf_2.jpg'
      updatedPerson.emoji = "👨🏻‍❤️‍👩🏿"
    } else if (person.name === 'Carlton') {
      updatedPerson.age = 33
      updatedPerson.hobbiesUrl = 'https://www.contiki.com/six-two/wp-content/uploads/2021/01/Queens-Gambit-Netflix.jpg'
      updatedPerson.emoji =  "⚜️"
    } else {
      updatedPerson.age = 37
      updatedPerson.hobbiesUrl ='https://www.rochesterfirst.com/wp-content/uploads/sites/66/2020/08/Smoking-weed-marijuana-420.jpg'
      updatedPerson.emoji =  "🤓"
    }
    return updatedPerson
  })

  return (
    <div className="App">
      {
        peopleArray.map((person) => {
          const { name, picture, description, age, hobbiesUrl , emoji} = person
          return (
            <div>
              <PersonCard name={name} picture={picture} description={description} age={age} hobbiesUrl={hobbiesUrl} emoji={emoji}/>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;

