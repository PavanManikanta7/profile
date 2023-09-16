import Pict from "./Images/Perfect.png";
const Home = () => {
    return <div>
    <section className="bod">
    <article class="avatar">
    <img src={Pict} alt='Myimage'/>
    </article>
    </section>
    <h1><center><span style={{fontSize:"30px",color:"Orange"}} >Hey,This is</span>
      <br/>
      <span style={{fontSize:"70px"}}>Pavan Manikanta</span></center></h1>
      <center><h2 style={{fontSize:"40px",color:"Green"}}>I'm a Web Dev...</h2></center>
    </div>
  };
  export default Home;