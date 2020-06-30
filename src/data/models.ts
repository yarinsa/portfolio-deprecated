export interface IProject {
  name: string;
  images: _Image[];
  paragraphs: _Paragraph[];
  description: string;
  git: string;
  webLink: string;
  id: number;
  technologies: _Technology[];
}

interface _Image {
  link: string;
}

interface _Paragraph {
  title: string;
  text: string;
}

interface _Technology {
  name: string;
  photo: string;
  id: number;
}
