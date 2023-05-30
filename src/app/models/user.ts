import { Image } from './image';

export class User {

      public image!: Image;
      public username!: String;

      constructor(image: Image, username: String) {
            this.image = image;
            this.username = username;
      }


}
