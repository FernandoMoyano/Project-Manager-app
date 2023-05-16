import PropTypes from "prop-types";
import "./AvatarDisplay.css";
import avatarDefault from "../../assets/images/avatarDefault.svg"




const AvatarDisplay = ({ticket}) => {
  return (
    <div className="avatar-container">
      <div className="image-container">
      <img src={ticket.avatar ? ticket.avatar :avatarDefault } alt={'photo of ' + ticket.owner} />
      </div>
    </div>
  )
}


AvatarDisplay.propTypes = {
	ticket: PropTypes.object.isRequired,
	
};

export default AvatarDisplay
