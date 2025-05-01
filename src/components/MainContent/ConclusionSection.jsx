import React,{ useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ScrollFadeIn from "/src/components/Animations/ScrollFadeIn";

const ConclusionSection = () => {

    const radialCurve = {
        borderTopLeftRadius: "15rem",
        borderTopRightRadius: "2rem",
        
    }

    const [ errorMessage,setErrorMessage ] = useState("");
    const [ usersEmail,setUsersEmail ] = useState("");

    const handleUserEmail = (event) => {
        setUsersEmail(event.target.value);
    }

    // validate email

    const processValidation = (email) => {

    if (!email.includes("@") || !email || !email.includes(".")){
            return false;
        }
        else if (email.length <= 0){
            return false
        }
        else{
            return true;
        }
    }
    const validateEmail = () => {
        const currEmail = usersEmail;

        const validating = processValidation(currEmail);

        if (validating){
            setErrorMessage("");
        }
        else{
            setErrorMessage("Invalid Email");
        }
    }


  return (
    <section className="min-h-screen flex justify-center items-center pt-20">

        <ScrollFadeIn>
        <div style={radialCurve} className="shadow-md w-[80vw] h-[60vh] bg-violet-50 flex flex-col gap-[6rem] cardHoverEffect pl-5">

            <div className="flex justify-end">
                <FontAwesomeIcon icon={faPaperPlane} style={{borderRadius: "50%"}} className="bg-gradient-to-b from-violet-300 to-purple-500 p-3 text-white text-2xl hover:cursor-pointer sendHoverEffect"/>
            </div>


            <div className="flex justify-center text-center font-bold">
                <h1 className=" max-sm:text-md sm:text-lg md:text-2xl lg:text-4xl ">Subscribe to get information,latest news and other <br /> interesting offers about Cobham</h1>
            </div>

            <div className="flex justify-center gap-3 sm: flex-col items-center md:flex-row">
                <div className="flex flex-col gap-2">
                   <div className="flex gap-2 max-sm:flex-col items-center gap-3  sm:flex-col items-center gap-3 md:flex-row">
                      <input className=" rounded-xl pl-5 sm: h-[6vh] md:h-[7.5vh]" type="text" placeholder={`Your email`} value={usersEmail} onChange={handleUserEmail}/>
                 
                       <div className="flex">
                         <button onClick={validateEmail} className=" inputHoverEffect hover:brightness-90  bg-gradient-to-t from-orange-500 to-orange-400 text-white px-5 rounded-lg sm: h-[6vh] md:h-[7.5vh] ">Subscribe</button>
                        </div>
                   </div>
                   <p className="text-red-500 text-center mt-2">{errorMessage}</p>
                </div>
            </div>
        </div>
        </ScrollFadeIn>
    </section>
  )
}

export default ConclusionSection