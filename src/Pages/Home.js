// import Navbar from '../Components/Navbar'
import Text from '../Components/Text'
import Heading from '../Components/Heading'
import Button from '../Components/Button'
import Footer from '../Components/Footer'
import Fotofoto from '../Components/Fotofoto'
import Popup from '../Components/Popup'
import Slider from '../Components/slider'




function Home() {
    return (
      <>

          <div className="home left-0 right-0 bottom-0 ">
            <Heading />
            <hr className="border-t-2 border-gray-400" />
            <Slider />
            
            <Text />
            
            <div className="flex items-center justify-center pt-14 space-x-4 pl-[35px]">   
              <Button />
              <Popup />
            </div>
              
            <Fotofoto />
            <Footer />
            
           </div>
    
      </>
    );
  }
  
  export default Home;
  








// function Home(){
//     return(

//         <div>
//         <Navbar />
//         <div >
//         <img src="images/bg2.png" alt="Foto" class="w-full h-auto relative"/>
//         <Heading />
//         <hr className="border-t-2 border-gray-400"/>
//         <Text />
//         <div className="flex items-center justify-center pt-14">
//             <Button />
//         </div>
    
//         </div>

//         </div>

//     );
// }

// export default Home;