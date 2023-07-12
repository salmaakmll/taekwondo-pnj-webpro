// import Navbar from '../Components/Navbar'
import List from '../Components/List'
import Tables from '../Components/Tables';

function Jadwal(){
    return(

        <>
        <div className="home top-0 left-0 right-0 bottom-0 h-screen ">
        <Tables />
        <hr className="border-[1px] border-gray-400 mt-[30px]  mx-auto rounded-full" />
        <List />
        </div>
        
        </>

    );
}

export default Jadwal;