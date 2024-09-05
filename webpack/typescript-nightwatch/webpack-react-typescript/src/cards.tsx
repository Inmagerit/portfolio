import imageOne from './images/faureRequiem.png';
import homerImage from './images/homerMove.gif'
export const CardsOne = () => {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <img src={homerImage} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">This is the content of card 1.</p>
                <a href="./pageTwo.html" className="btn btn-danger" id='botonUno'>Go to second page</a>
              </div>
            </div>
          </div>
  
          <div className="col-md-6">
            <div className="card">
              <img src={homerImage} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">This is the content of card 2.</p>
                <a href="./pageTwo.html" className="btn btn-danger" id='botonDos'>Go to second page</a>
              </div>
            </div>
          </div>
  
          <div className="col-md-6">
            <div className="card">
              <img src={homerImage} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">This is the content of card 3.</p>
                <a href="./pageTwo.html" className="btn btn-danger" id='botonTres'>Go to second page</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img src={homerImage} className="card-img-top" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">Card 4</h5>
                <p className="card-text">This is the content of card 4.</p>
                <a href="./pageTwo.html" className="btn btn-danger" id='botonCuatro'>Go to second page</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  