import {
  FaHome, FaUser, FaListUl, FaBriefcase, FaComments, FaLaptopCode, FaServer,
  FaDatabase, FaRobot, FaBug, FaFileAlt, FaGithub, FaLinkedin, FaEnvelope,
  FaPhoneAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaBars, FaTimes, FaCog,
  FaGraduationCap, FaStar,
} from "react-icons/fa";

const map = {
  home: FaHome, user: FaUser, list: FaListUl, briefcase: FaBriefcase, chat: FaComments,
  web: FaLaptopCode, server: FaServer, db: FaDatabase, ai: FaRobot, test: FaBug, doc: FaFileAlt,
  github: FaGithub, linkedin: FaLinkedin, mail: FaEnvelope, phone: FaPhoneAlt,
  pin: FaMapMarkerAlt, link: FaExternalLinkAlt, menu: FaBars, close: FaTimes, cog: FaCog,
  school: FaGraduationCap, star: FaStar,
};

export default function Icon({ name, ...props }) {
  const C = map[name];
  return C ? <C aria-hidden="true" {...props} /> : null;
}
