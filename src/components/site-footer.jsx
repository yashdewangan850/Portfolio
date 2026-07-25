import { AtSign, Code2, Mail, Sparkles } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="shell footer">
      <span>© {new Date().getFullYear()} Yash Kumar Dewangan</span>
      <div>
        <a
          href="https://github.com/yashdewangan850"
          target="_blank"
          rel="noreferrer"
        >
          <Code2 size={17} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/yash-kumar-dewangan-5b0607266/"
          target="_blank"
          rel="noreferrer"
        >
          <AtSign size={17} /> LinkedIn
        </a>
        <a href="mailto:yashdewangan850@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Yash,">
          <Mail size={17} />
          <span>Email</span>
        </a>
      </div>
      <span className="made">
        <Sparkles size={14} /> Designed & Developed by Yash Kumar Dewangan
      </span>
    </footer>
  );
}
