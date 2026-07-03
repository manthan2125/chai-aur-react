import React from 'react'
import Card from './components/Card'

const App = () => {

  const users = [
  {
    "name": "Aarav Sharma",
    "city": "Delhi",
    "age": 25,
    "profession": "Software Engineer",
    "profilePhoto": "https://i.pravatar.cc/150?img=1"
  },
  {
    "name": "Priya Verma",
    "city": "Mumbai",
    "age": 28,
    "profession": "Graphic Designer",
    "profilePhoto": "https://i.pravatar.cc/150?img=5"
  },
  {
    "name": "Rahul Singh",
    "city": "Jaipur",
    "age": 31,
    "profession": "Teacher",
    "profilePhoto": "https://i.pravatar.cc/150?img=8"
  },
  {
    "name": "Neha Patel",
    "city": "Ahmedabad",
    "age": 26,
    "profession": "Doctor",
    "profilePhoto": "https://i.pravatar.cc/150?img=10"
  },
  {
    "name": "Vikram Mehta",
    "city": "Bengaluru",
    "age": 34,
    "profession": "Data Analyst",
    "profilePhoto": "https://i.pravatar.cc/150?img=12"
  }
]

  return (
    <>
      <div className='p-10'>
        {users.map(function(user, idx) {
          return <Card key={idx} name={user.name} age={user.age} city={user.city} prof={user.profession} photu={user.profilePhoto} />
        })}
      </div>
    </>
  )
}

export default App
