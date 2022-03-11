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
    } else if (person.name === 'Carlton') {
      updatedPerson.age = 33
    } else {
      updatedPerson.age = 37
    }
    return updatedPerson
  })

  return (
    <div className="App">
      {
        peopleArray.map((person) => {
          const { name, picture, description, age } = person
          return (
            <div>
              <PersonCard name={name} picture={picture} description={description} age={age} />
            </div>
          )
        })
      }
    </div>
  );
}

export default App;

