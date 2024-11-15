import restauranfood from '../assets/images/restauranfood.jpg'
import item1 from '../assets/images/greek salad.jpg'
import item2 from '../assets/images/bruchetta.svg'
import item3 from '../assets/images/lemon dessert.jpg'
import adrian from '../assets/images/Mario and Adrian A.jpg'
import BookingPage from '../components/BookingPage';
import { useState, useReducer,useEffect } from 'react';
export default function Main(){
    // const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    // const initializeTimes = async () => {
    //     const today = new Date();
    //     // Assuming fetchAPI returns a Promise
    //     const availableTimes = await window.fetchAPI(today);
    //     return availableTimes;
    // };
    const [showBookingForm,setshowBookingForm] = useState(false);
    const toggleForm = ()=>{
        setshowBookingForm((prev)=>!prev);
    }
    const availableTimesReducer = (state,action)=>{
        switch(action.type){
            case 'SET_TIMES':
                console.log(action.payloads);
                return action.payloads;
            default:
                return state;
        }
    }
    const [availableTimes,dispatch] = useReducer(availableTimesReducer, []);
    console.log(availableTimes);
    const updateTimes = async (selectedDate) => {
        const updatedTimes = await window.fetchAPI(selectedDate);
        dispatch({
            type: 'SET_TIMES',
            payloads: updatedTimes
        });
    };
    useEffect(() => {
        const fetchInitialTimes = async () => {
          const today = new Date();
          const initialTimes = await window.fetchAPI(today);
          dispatch({
            type: 'SET_TIMES',
            payloads: initialTimes
          });
        };
        fetchInitialTimes();
      }, []);
    return(
        <>
        <main className="main-section">
            <section className="hero">
                <div className="text-content">
                    <h1 className="display-title">Little lemon</h1>
                    <h1 className="sub-title">Chicago</h1>
                    <p className="card-text">
                        we are family owned meditareanan restaurent focused on traditional
                        recipes served with modern twist.
                    </p>
                    <button className='btn' onClick={toggleForm}>Reserve a table</button>
                    {showBookingForm && (
                    <BookingPage availableTimes={availableTimes} updateTimes={updateTimes} />
                    )}
                </div>
                <img src={restauranfood} alt="restauranfood.jpg"/>
            </section>
            <section className="special-items" id='special-items'>
                <div className='head'>
                    <h1 className='sectiontitle'>This week special!</h1>
                    <button className='btn'>Order online</button>
                </div>
                <div className='sbody'>
                <div className='item'>
                    <img src={item1} alt='greek_salad.jpg'></img>
                    <div className='item-content'>
                        <h1 className='card-title'>Greek salad</h1>
                        <div className='price'>$124</div>
                    </div>
                    <p>Description of the special dish with some ingredients and what makes it special.</p>
                    <a href='/test'>Order a delivery</a>
                    </div>
                <div className='item'>
                    <img src={item2} alt='bruchetta.jpg'></img>
                    <div className='item-content'>
                        <h1 className='card-title'>bruchetta</h1>
                        <div className='price'>$14</div>
                    </div>
                    <p>Description of the special dish with some ingredients and what makes it special.</p>
                    <a href='/test'>Order a delivery</a>
                </div>
                <div className='item'>
                    <img src={item3} alt='lemon dessert.jpg'></img>
                    <div className='item-content'>
                        <h1 className='card-title'>lemon dessert</h1>
                        <div className='price'>$104</div>
                    </div>
                    <p>Description of the special dish with some ingredients and what makes it special.</p>
                    <a href='/test'>Order a delivery</a>
                    </div>
                    
                </div>
            </section>
            <section className="testimonial" id='testimonial'>
                <h1 className='section-title'>Testimonial</h1>
                <div className='rating'>
                    <div className='item'>
                        <h5>Rating</h5>
                        <img alt='name1'></img>
                        <span>Name 3</span>
                        <p className=''>review text</p>
                    </div>
                    <div className='item'>
                        <h5>Rating</h5>
                        <img alt='name1'></img>
                        <span>Name 3</span>
                        <p className=''>review text</p>
                    </div>
                    <div className='item'>
                        <h5>Rating</h5>
                        <img alt='name1'></img>
                        <span>Name 3</span>
                        <p className=''>review text</p>
                    </div>
                </div>
            </section>
            <section className="about-us" id='about-us'>
                <div className="text-content">
                        <h1 className="display-title">Little lemon</h1>
                        <h1 className="sub-title">Chicago</h1>
                        <p className="card-text">
                            we are family owned meditareanan restaurent focused on traditional
                            recipes served with modern twist.
                        </p>
                </div>
                <img src={adrian} alt="adrian.jpg"/>
            </section>
        </main>
        </>
    )
}