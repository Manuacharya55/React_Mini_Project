
const Card = ({img,name,role,team}) =>{
    return (
        <div className="card">
        <img
          src={img}
          alt=""
        />
        <div className="details">
          <h2>{name}</h2>
          <p>{team}</p>
          <p>{role}</p>
        </div>
      </div>
    )
}

export default Card;