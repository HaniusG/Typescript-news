

export interface ReplayProps{
    id: number;
    author: {
      id: number;
      name: string;
      image: string;
  };
    text: string;
    date: string;
}

export interface CommentI{
    id: number;
    author: {
      id: number;
      name: string;
      image: string;
  };
    text: string;
    date: string;
    replay: ReplayProps[];
}

export interface NewsCardProps {
  id: number;
  title: string;
  content: string;
  image: string;
  publishDate: string;
  comments: Comment[];
}