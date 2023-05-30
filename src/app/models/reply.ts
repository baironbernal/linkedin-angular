import { Image } from './image';
import { User } from './user';

export class Reply {
        public id!: number;  
        public content!: String;  
        public createdAt!: String;  
        public score!: Number;  
        public replyingTo!: String;
        public user!: User;


        constructor(id:number = 0, content: String, score: number, replyingTo: string) {
                this.id = id;
                this.content = content;
                this.replyingTo = replyingTo;
                this.user = new User(new Image('assets/images/avatars/image-amyrobson.png', 'assets/images/avatars/image-amyrobson.webp'), "bgb");
                this.createdAt = '1 month ago';
                this.score = score;
                
        }
}

