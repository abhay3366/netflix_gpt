
import { useRef } from 'react';
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'
import openai from '../utils/openAI';

const GptSearchBar = () => {
  const langkey=useSelector((store)=>store.config.language);
  const serchTextRef=useRef()

  

  const handleGptSearchClick=async()=>{
    const setQuery=`Act as a Movies Recommendation system and suggest some 
    movies for the query ${serchTextRef.current.value} only give the name of 
    5 movies commo seprated like the example resuts give ahead Results:Gadar,Soley,Don`
    console.log(serchTextRef.current.value)
    //Make a api call to get the search results
   const gptResults= await openai.chat.completions.create({
    
      messages: [{ role: 'user', content: setQuery  }],
      model: 'gpt-3.5-turbo',
    });
    
    // console.log('gptResults: ', gptResults);
    // console.log(gptResults.choices);

  }

  return (
    <div className='flex justify-center'>
        <form className='bg-black mt-[20%] w-1/2 grid grid-cols-12' onSubmit={(e)=>(e.preventDefault())}>
            <input ref={serchTextRef} type='text' className='p-4 m-4  col-span-9' placeholder={lang[langkey].search}/>
            <button onClick={handleGptSearchClick} className="py-2 px-4 m-3 col-span-3 bg-red-700 text-white">{lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar