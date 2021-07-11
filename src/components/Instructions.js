import image from '../assets/Group.jpg'

function Instructions() {
    return (
        <section className="instruction">
            <div className="svg-img">
                <img 
                  src={image}
                  alt="intruction_img"
                  width="100%"   
                />
            </div>  
        </section>
    )
}

export default Instructions;
