import { IExperience } from "../Interfaces";

const ExperienceSection: React.FC<{ experienceData: IExperience[] }> = ({
  experienceData,
}) => {
  return (
    <section className="max-w-4xl mx-auto p-6 font-sans">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>

      <div className="space-y-8 border-l-2 border-gray-200 ml-3">
        {experienceData.map((exp) => (
          <div key={exp.id} className="relative pl-6">
            {/* Timeline Dot */}
            <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-2"></div>

            <div className="mb-1">
              <h3 className="text-xl font-semibold text-gray-900">
                {exp.role}
              </h3>
              <div className="text-md text-gray-700 font-medium">
                {exp.company} {exp.type !== "Career break" && `· ${exp.type}`}
              </div>
            </div>

            <div className="text-sm text-gray-500 mb-2">
              <span>{exp.duration}</span>
              <span className="mx-2">•</span>
              <span>{exp.location}</span>
              {exp.workModel && (
                <>
                  <span className="mx-2">•</span>
                  <span>{exp.workModel}</span>
                </>
              )}
            </div>

            {exp.description && (
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {exp.description}
              </p>
            )}

            {exp.skills && (
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
