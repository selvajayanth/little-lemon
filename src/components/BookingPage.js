import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function BookingForm({availableTimes, updateTimes}){
    const [formvalues, setFormvalues] = useState(
        {
            'res-date':'',
            'res-time':'',
            'guests':0,
            'occasion':'',
        }
    );
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormvalues({
            ...formvalues,
            [name]:value,
        })
        if(name==='res-date'){
            updateTimes(new Date(value))
        }
        seterrors({
            ...errors,
            [name]:'',
        })
    }
    const [errors,seterrors] = useState({});
    const validate = ()=>{
        const newerrors = {};
        if(!formvalues['res-date'])
            newerrors['res-date'] = "Please select a date.";
        if(!formvalues['res-time'])
            newerrors['res-time'] = "Please select a time.";
        if(formvalues.guests < 1 || formvalues.guests > 10)
            newerrors.guests = "Guests must be between 1 and 10.";
        if(!formvalues.occasion)
            newerrors.occasion = "Please select an occasion.";
        seterrors(newerrors);
        return Object.keys(newerrors).length ===0;
    }
    const navigate = useNavigate();
    const handlesubmit = (e)=>{
        e.preventDefault();
        if(validate())
            navigate('/confirmation');
        else
            alert('Failed to submit booking. Please try again.');

    }
    return(
        <form onSubmit={handlesubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                name="res-date"
                value={formvalues['res-date']}
                onChange={handleChange}
            />
            {errors['res-date'] && <span style={{ color: "red" }}>{errors['res-date']}</span>}

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                name="res-time"
                value={formvalues['res-time']}
                onChange={handleChange}
            >
                <option value="">Select a time</option>
                {availableTimes.map((item)=>
                     <option  key={item} value={item}>{item}</option>
                )}
            </select>
            {errors['res-time'] && <span style={{ color: "red" }}>{errors['res-time']}</span>}

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="10"
                value={formvalues.guests}
                onChange={handleChange}
            />
            {errors.guests && <span style={{ color: "red" }}>{errors.guests}</span>}

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name="occasion"
                value={formvalues.occasion}
                onChange={handleChange}
            >
                <option value="">Select an occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            {errors.occasion && <span style={{ color: "red" }}>{errors.occasion}</span>}

            <input type="submit" value="Make Your reservation" />
        </form>
    )
}