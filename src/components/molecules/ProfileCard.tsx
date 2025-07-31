import Avatar from "@/components/atoms/Avatar";
import Badge from "@/components/atoms/Badge";

interface ProfileCardProps {
  name: string;
  title: string;
  avatar: string;
  bio: string;
  skills: string[];
  contact: {
    email?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export default function ProfileCard({
  name,
  title,
  avatar,
  bio,
  skills,
  contact,
}: ProfileCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">
      {/* Avatar and Name */}
      <div className="text-center space-y-4">
        <Avatar src={avatar} alt={name} size="xl" className="mx-auto" />
        <div>
          <h1 className="text-2xl font-bold text-white">{name}</h1>
          <p className="text-lg text-green-500 font-medium">{title}</p>
        </div>
      </div>

      {/* Bio */}
      <div>
        <p className="text-gray-300 leading-relaxed">{bio}</p>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
          Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="primary" size="sm">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
          Contact
        </h3>
        <div className="space-y-2">
          {contact.email && (
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center text-sm text-gray-300 hover:text-green-400 transition-colors"
            >
              <span className="mr-2">📧</span>
              {contact.email}
            </a>
          )}
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-300 hover:text-green-400 transition-colors"
            >
              <span className="mr-2">💼</span>
              LinkedIn
            </a>
          )}
          {contact.github && (
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-300 hover:text-green-400 transition-colors"
            >
              <span className="mr-2">🐙</span>
              GitHub
            </a>
          )}
          {contact.website && (
            <a
              href={contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-300 hover:text-green-400 transition-colors"
            >
              <span className="mr-2">🌐</span>
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
