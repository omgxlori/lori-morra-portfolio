export default function Resume() {
  const resumePages = [
    { id: 1, imageUrl: "/resume-page-1.png" },
    { id: 2, imageUrl: "/resume-page-2.png" },
  ];

  return (
    <div>
      <h1>My Resume</h1>
      <p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          Click Here to download my resume.
        </a>
      </p>
      <div className="resume-pages-grid">
        {resumePages.map((page) => (
          <div key={page.id} className="resume-page">
            <img src={page.imageUrl} alt={`Resume Page ${page.id}`} className="resume-page-image" />
          </div>
        ))}
      </div>
    </div>
  );
}
