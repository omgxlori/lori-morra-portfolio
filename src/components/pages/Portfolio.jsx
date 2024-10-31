import Project from '../Project';

export default function Portfolio() {
  const projects = [
    {
      title: "Book Queue",
      description: "Book Management Tool",
      imageUrl: "/book-queue.png", // Since it's in the public folder
      githubLink: "https://github.com/omgxlori/book-queue",
      className: "project-image-left"
    },
    {
      title: "RoleCall Management",
      description: "Employee Tracking System",
      imageUrl: "/rolecall.png",
      githubLink: "https://github.com/omgxlori/rolecall_management"
    },
    {
      title: "SkySearch Weather Forecast",
      description: "5-Day Weather App",
      imageUrl: "/skysearch.png",
      githubLink: "https://github.com/omgxlori/skysearch-weather-forecast"
    },
    {
      title: "Vehicle Management CLI",
      description: "Command-Line Vehicle Tracker",
      imageUrl: "/vehicle.png",
      githubLink: "https://github.com/omgxlori/vehicle_management_cli",
      className: "project-image-left"
    }
  ];

  return (
    <div>
      <h1>My Portfolio</h1>
      <p>Here is my portfolio. I make cool things sometimes.</p>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            githubLink={project.githubLink}
            className={project.className}
          />
        ))}
      </div>
    </div>
  );
}
