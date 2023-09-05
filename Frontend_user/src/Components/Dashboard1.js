import imag from '../images/cabbage.jpg'
import tomato from '../images/tomato.jpg'
import spin from '../images/spinach.webp'

function Dashboard1()
{
return(
    <div className="container marketing">
    <div className="row">
      <div className="col-lg-4">

        <img className="img-circle" src={imag} alt="Generic placeholder image" width="140" height="140" id="101"
        />

        <h2>Cabbage</h2>
        <p>A cabbage generally weighs between 500 and 1,000 grams (1 and 2 lb). Smooth-leafed, firm-headed green cabbages are the most common, with smooth-leafed purple cabbages and crinkle-leafed savoy cabbages of both colours being rarer. </p>
       
      </div>
      <div className="col-lg-4">
        <img className="img-circle" src={spin} alt="Generic placeholder image" width="140" height="140" id="102"
        />

        <h2>Spinach</h2>
        <p>It belongs to the amaranth family and is related to beets and quinoa. Whats more, its considered very healthy, as its loaded with nutrients and antioxidants.

          There are many ways to prepare spinach. You can buy it canned or fresh and eat it cooked or raw. Its delicious either on its own or in other dishes.

        </p>
      </div>
      <div className="col-lg-4">
        <img className="img-circle" src={tomato} alt="Generic placeholder image" width="140" height="140" id="103"
        />

        <h2>Tomato</h2>
        <p>Tomato, (Solanum lycopersicum), flowering plant of the nightshade family (Solanaceae), cultivated extensively for its edible fruits. Labelled as a vegetable for nutritional purposes, tomatoes are a good source of vitamin C and the phytochemical lycopene. </p>
        
      </div>
    </div>
  </div>
)
} 
export default Dashboard1;