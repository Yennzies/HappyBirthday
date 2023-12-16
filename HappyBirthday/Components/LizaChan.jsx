import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LizaChan = () => {
    const [currentPage , setCurrentPage] = useState(1)
    const navigate = useNavigate()
  return (
    <div>
        {currentPage === 1 &&
            <div className='FirstPage'>
            <h1>Happy Birthday Anwar!!</h1>
        <p>now you may be wondering what is all of this, well i just wanted to create this gift for you, a website to celebrate your 22 birthday!!</p>
        <img src="https://media.giphy.com/media/ik9DhzwjesBCo/giphy.gif" alt="404" />
         <button onClick={() => setCurrentPage(2)}>next</button>
            </div>
        }
        {currentPage === 2 && (
            <div className='FirstPage'>
            <h1>Happy birthday to the best drunkard bard ehe</h1>
            <img src="https://cdn.discordapp.com/attachments/1080692241271640076/1180590083909365833/e95f7a67b2ed65aff6c7964cdd04a07a.png?ex=65906e32&is=657df932&hm=e75be54ae0f7deff05106c0eed1a049febeafc52dcecaf117a206daa617492ba&" alt="" />
            <button onClick={() => setCurrentPage(3)}>next</button>
            </div>
        )}

        {currentPage === 3 && (
            <div className='FirstPage'>
                <h1>Happy birthday to the best hatsune miku fan!!</h1>
                <img src="https://i.imgur.com/KB2ROPA.gif" alt="" />
                <button onClick={() => setCurrentPage(4)}>next</button>
            </div>
        )}

        {currentPage === 4 && (
            <div>
                <h1>And most importantly, Happy birthday to a wonderful human being.. May everlasting happiness be in every moment in your life.</h1>
                <img src="https://cdn.discordapp.com/attachments/837869978509770772/862396589497778246/burn.jpg?ex=658c69e9&is=6579f4e9&hm=35d0eab0a6b32bd890bd18e507d7120e4148db9b005474482ac860111553e4d5&" style={{width : "1200px"}} alt="" />
                <button onClick={() => navigate("/OOEEOO" , {replace : true})}>next</button>
            </div>
        )}
    </div>
  )
}

export default LizaChan