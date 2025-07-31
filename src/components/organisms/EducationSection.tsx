interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

interface Award {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

interface EducationSectionProps {
  education: Education[];
  awards: Award[];
}

export default function EducationSection({
  education,
  awards,
}: EducationSectionProps) {
  return (
    <section className="space-y-8">
      {/* Education */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Education</h2>
          <p className="text-gray-300">
            My academic background and qualifications
          </p>
        </div>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-stone-800/60 backdrop-blur-sm rounded-3xl shadow-md p-6 cursor-target"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-green-500 font-medium">
                    {edu.institution}
                  </p>
                </div>
                <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
                  {edu.period}
                </span>
              </div>
              {edu.description && (
                <p className="text-gray-300 text-sm">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Awards */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Awards & Certifications
          </h2>
          <p className="text-gray-300">Recognition and achievements</p>
        </div>

        <div className="space-y-4">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-stone-800/60 backdrop-blur-sm rounded-3xl shadow-md p-6 cursor-target"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {award.title}
                  </h3>
                  <p className="text-green-500 font-medium">{award.issuer}</p>
                </div>
                <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
                  {award.date}
                </span>
              </div>
              {award.description && (
                <p className="text-gray-300 text-sm">{award.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
