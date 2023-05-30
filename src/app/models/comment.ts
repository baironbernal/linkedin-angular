import { User } from './user';
import { Reply } from './reply';
import { Image } from './image';

export class Comment {
        public id!: number;  
        public content?: String;  
        public createdAt!: String;  
        public score!: number;  
        public user!: User;  
        public replies?: Reply[];

        constructor(id:number = 0, content: String, username?: String, score: number = 1) {
                this.id = id;
                this.content = content;
                this.user = new User(new Image('assets/images/avatars/image-amyrobson.png', 'assets/images/avatars/image-amyrobson.webp'), username!);
                this.createdAt = '1 month ago';
                this.score = score;
                this.replies = []
        }
}
