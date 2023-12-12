import travelPlansData from "../assets/travel-plans.json";
import classes from "/src/TravelList.module.css";
import { useState } from "react";

function TravelList(){
    const [travelPlans, settravelPlans] = useState(travelPlansData);

    // const clickToDelete = id => { 
    //     const filteredPlan = travelPlans.filter(travelPlanData => 
    //       travelPlanData.id !== id
    //     ); 
    //     settravelPlans(filteredPlan);
    //   }
      
 const clickToDelete = id => { 
     const filteredPlan = travelPlans.filter(travelPlanData => {
        return travelPlanData.id !== id;
     }); 
     settravelPlans(filteredPlan);
   }
  


    return(
        <div className={classes.mainBox}>
            <ul>
            {
                travelPlans.map((travelPlan) =>{
                
                    return (
                    <div className= {classes.cards} key={travelPlan.id}>
                        

                        <div className={classes.img}>
                        <img src={travelPlan.image}/>
                        </div>

                        <div className={classes.text}>
                        <h2>{travelPlan.destination}</h2>
                        <p>({travelPlan.days} Days)</p>
                        <p>{travelPlan.allInclusive}</p>
                        <p><span classes = {classes.bold}> Price: </span>{travelPlan.totalCost}</p>
                        <p>{travelPlan.description}</p>

                        {travelPlan.totalCost < 350 && <p className={classes.label}>Great Deal</p>}
                        {travelPlan.totalCost > 1500 && <p className={classes.label}> Premium </p>}
                        {travelPlan.allInclusive && <p className={classes.label}>AllInclusive</p>}

                        <button onClick={() => {clickToDelete(travelPlan.id); console.log(travelPlan.id)}} className={classes.deleteButton}>delete</button>

                        </div>
                       
                    </div>
                    

                        )
                    
                } )
            }
             </ul>
        </div>

    )
}
export default TravelList;