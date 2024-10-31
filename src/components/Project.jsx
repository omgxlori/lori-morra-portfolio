import PropTypes from 'prop-types';

function Project({ title, description, imageUrl, githubLink, className }) {
  return (
    <a 
      href={githubLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`project-item ${className || ''}`}
    >
      <img 
        src={imageUrl} 
        alt={`${title} screenshot`} 
        className="project-image" 
      />
      <div className="overlay">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Project;
