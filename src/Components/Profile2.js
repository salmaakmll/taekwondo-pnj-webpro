import maris from '../foto/maris.JPG';
import aldi from '../foto/aldi.JPG';
import alfahrizi from '../foto/alfahrizi.JPG';
import lexi from '../foto/lexi.JPG';
import muhammad from '../foto/muhammad.JPG';
import mulkya from '../foto/mulkya.JPG';
import nurul from '../foto/nurul.JPG';



export default function Profile2() {
    return (

        
    <div className="flex justify-center items-center pb-[100px] ">
      <div className="grid xl:grid-cols-3 sm:grid-cols-1 p-[35px] gap-[50px] shadow-xl  ">
          <div className=" p-[10px] max-w-sm min-w-[200px] bg-[#F7E2E2] rounded-xl">
              <img src="images/salma.jpg" alt="image" className=" rounded-xl w-[100%]"/>
              <h2 className=" font-extrabold text-lg my-4 mx-4 hover:cursor-default">Salma Kamila - GEUP 4</h2>
              <p className=" font-medium  text-md my-4 mx-4 hover:cursor-default">
              Salma Kamila sekarang adalah salah satu anggota di taekwondo pnj yang berasal dari jurusan Teknik Informatika. Hobi dia overthinking eskipun begitu diusianya yang masih sangat muda dia sudah menorehkan kemenangan dibeberapa kejuaraan .
              </p>
              <button className="bg-blue-600 text-white font-bold px-4 py-1 mx-4 rounded-md my-2 hover:bg-blue-700 hover:scale-105 duration-300 mb-8"><a href="https://www.instagram.com/salmaakmll/ " target="_blank">More</a></button>
          </div>
  
          <div className=" p-[10px] max-w-sm min-w-[200px] bg-[#B4ECE3] rounded-xl">
              <img src="images/akmal.jpg" alt="image" className=" rounded-xl w-[100%]"/>
              <h2 className="font-extrabold text-lg my-4 mx-4 hover:cursor-default">Akmal Nur Wahid - GEUP 10</h2>
              <p className="font-medium text-md my-4 mx-4 hover:cursor-default">
              Akmal adalah anggota yang berasal dari jurusan Teknik Informatika. Hanya sedikit kemenangan yang dia menorehkan pada turnamen yang dia ikuti. pencapaian terbesarnya adalah memenangkan kejuaraan antar kampung.
              </p>
              <button className="bg-blue-600 text-white font-bold px-4 py-1 mx-4 rounded-md my-2 hover:bg-blue-700 hover:scale-105 duration-300 mb-8"><a href="https://www.instagram.com/akmal_nw/" target="_blank">More</a></button>
          </div>
  
          <div className=" p-[10px] max-w-sm min-w-[200px] bg-[#FBFFDC] rounded-xl">
              <img src={maris} alt="image" className=" rounded-xl w-[100%]"/>
              <h2 className="font-extrabold text-lg my-4 mx-4 hover:cursor-default">Maris Prakasa - GEUP 6</h2>
              <p className="font-medium text-md my-4 mx-4 hover:cursor-default">
              Maris adalah anggota yang berasal dari jurusan Teknik Mesin. Salah satu hobinya adalah mengikuti komunitas motor dan Diusianya yang masih sangat muda dia sudah menorehkan kemenangan dibeberapa kejuaraan. 
              </p>
              <button className="bg-blue-600 text-white font-bold px-4 py-1 mx-4 rounded-md my-2 hover:bg-blue-700 hover:scale-105 duration-300 mb-8"><a href="https://www.instagram.com/mxrspraka._/" target="_blank">More</a></button>
          </div>

          <div className=" p-[10px] max-w-sm min-w-[200px] bg-[#D6D2C4] rounded-xl">
              <img src={aldi} alt="image" className=" rounded-xl w-[100%]"/>
              <h2 className="font-extrabold text-lg my-4 mx-4 hover:cursor-default">Aldi Dwi Permana - GEUP 2</h2>
              <p className="font-medium text-md my-4 mx-4 hover:cursor-default">
              Aldi adalah salah satu anggota di taekwondo pnj yang berasal dari jurusan Teknik Elektro. Selalu menjadi yang membanggakan dikampus meskipun diusianya yang masih sangat muda dia sudah menorehkan kemenangan dibeberapa kejuaraan.
              </p>
              <button className="bg-blue-600 text-white font-bold px-4 py-1 mx-4 rounded-md my-2 hover:bg-blue-700 hover:scale-105 duration-300 mb-8">More</button>
          </div>
  
          <div className=" p-[10px] max-w-sm min-w-[200px] bg-[#ECF9FF] rounded-xl">
              <img src={alfahrizi} alt="image" className=" rounded-xl w-[100%]"/>
              <h2 className="font-extrabold text-lg my-4 mx-4 hover:cursor-default">Muhammad Al Fahrizi - GEUP 8</h2>
              <p className="font-medium text-md my-4 mx-4 hover:cursor-default">
              Al fahrizi adalah anggota yang berasal dari jurusan Teknik Elektro. Selalu menjadi yang membanggakan dikampus meskipun diusianya yang masih sangat muda dia sudah menorehkan kemenangan dibeberapa kejuaraan.
              </p>
              <button className="bg-blue-600 text-white font-bold px-4 py-1 mx-4 rounded-md my-2 hover:bg-blue-700 hover:scale-105 duration-300 mb-8">More</button>
          </div>
  
          <div className=" p-[10px] max-w-sm min-w-[200px] bg-[#FFE7CC] rounded-xl">
              <img src={lexi} alt="image" className=" rounded-xl w-[100%]"/>
              <h2 className="font-extrabold text-lg my-4 mx-4 hover:cursor-default">Lexi Andi Pratomo - GEUP 7</h2>
              <p className="font-medium text-md my-4 mx-4 hover:cursor-default">
              Lexi adalah anggota yang berasal dari jurusan Teknik Mesin. Selalu menjadi yang membanggakan dikampus meskipun diusianya yang masih sangat muda dia sudah menorehkan kemenangan dibeberapa kejuaraan.
              </p>
              <button className="bg-blue-600 text-white font-bold px-4 py-1 mx-4 rounded-md my-2 hover:bg-blue-700 hover:scale-105 duration-300 mb-8">More</button>
          </div>

          <div className=" p-[10px] max-w-sm min-w-[200px] bg-[#C1D0B5] rounded-xl">
              <img src={muhammad} alt="image" className=" rounded-xl w-[100%]"/>
              <h2 className="font-extrabold text-lg my-4 mx-4 hover:cursor-default">Muhammad Rakken Akbar At-thorriq - GEUP 6</h2>
              <p className="font-medium text-md my-4 mx-4 hover:cursor-default">
              Akbar adalah anggota yang berasal dari jurusan Teknik Mesin. Diusianya yang masih sangat muda dia sudah menorehkan kemenangan dibeberapa kejuaraan baik daerah aupun nasional.
              </p>
              <button className="bg-blue-600 text-white font-bold px-4 py-1 mx-4 rounded-md my-2 hover:bg-blue-700 hover:scale-105 duration-300 mb-8">More</button>
          </div>

          <div className=" p-[10px] max-w-sm min-w-[200px] bg-[#F5FFC9] rounded-xl">
              <img src={mulkya} alt="image" className=" rounded-xl w-[100%]"/>
              <h2 className="font-extrabold text-lg my-4 mx-4 hover:cursor-default">Mulkya Wahida Putra - GEUP 7</h2>
              <p className="font-medium text-md my-4 mx-4 hover:cursor-default">
              Mulkya adalah anggota yang berasal dari jurusan Teknik Elektro. Selalu menjadi yang membanggakan dikampus meskipun Diusianya yang masih sangat muda dia sudah menorehkan kemenangan dibeberapa kejuaraan.
              </p>
              <button className="bg-blue-600 text-white font-bold px-4 py-1 mx-4 rounded-md my-2 hover:bg-blue-700 hover:scale-105 duration-300 mb-8">More</button>
          </div>

          <div className=" p-[10px] max-w-sm min-w-[200px] bg-[#C3ACD0] rounded-xl">
              <img src={nurul} alt="image" className=" rounded-xl w-[100%]"/>
              <h2 className="font-extrabold text-lg my-4 mx-4 hover:cursor-default">Nurul Hasanah - GEUP 4</h2>
              <p className="font-medium text-md my-4 mx-4 hover:cursor-default">
              Nurul adalah anggota yang berasal dari jurusan Teknik Informatika. Selalu menjadi yang membanggakan dikampus meskipun diusianya yang masih sangat muda dia sudah menorehkan kemenangan dibeberapa kejuaraan.
              </p>
              <button className="bg-blue-600 text-white font-bold px-4 py-1 mx-4 rounded-md my-2 hover:bg-blue-700 hover:scale-105 duration-300 mb-8"><a href="https://www.instagram.com/nrl.sanah/" target="_blank">More</a></button>
          </div>

        </div>
      </div>
  
      
    );
  }
  