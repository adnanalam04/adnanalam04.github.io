export default function handler(req, res) {
  // Fetch your stats data here
  const stats = {
    linkedinFollowers: 500,
    blogsPublished: 25,
    certifications: 8,
    projectsCompleted: 30
  };
  res.status(200).json(stats);
}
