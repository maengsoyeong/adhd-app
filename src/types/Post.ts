export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  imageUrl?: string;
  tags?: string[];
  author: {
    id: string;
    name: string;
    avatar: string;
    bio: string;
  };
  category: string;
  date: string;
  views: number;
  reactions: {
    likes: number;
    hearts: number;
    celebrates: number;
  };
  comments: {
    id: string;
    author: {
      id: string;
      name: string;
      avatar: string;
    };
    content: string;
    date: string;
  }[];
} 